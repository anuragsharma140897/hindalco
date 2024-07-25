import React, { useEffect, useMemo, useState } from 'react'
import { useModal } from '../../../shared/modal-views/use-modal';
import { useColumn } from '../../../Hooks/use-column';
import { useSelector } from 'react-redux';
import { getRolesAndPermissionColumns } from './roles-and-permission-column';
import ControlledTable from '../../../Component/ControlledTable/ControlledTable';
import { TableClass } from '../../../Constant/Classes/Classes';
import PageHeader from '../../../shared/page-header';
import { roleData } from '../../../dummyData/role-and-permission-data';
import { Badge, Text, Title } from 'rizzui';
import AddRolesAndPermission from './add/add-roles-and-permission';
import { HitApi } from '../../../Store/Action/Api/ApiAction';
import { getRoles } from '../../../Constant/Api/Api';

export const PermissionTypes = () => {
  return <div className='flex items-center gap-5'>
    <div><Title as="h6"> Permission Types </Title></div>
    <div className='flex gap-4 my-4'>
      <div className="flex items-center ">
        <Badge renderAsDot className="bg-yellow-500" />
        <Text className="ms-2 font-medium capitalize text-gray-600"> Read </Text>
      </div>
      <div className="flex items-center">
        <Badge renderAsDot className="bg-green-500" />
        <Text className="ms-2 font-medium capitalize text-gray-600"> Write </Text>
      </div>
      <div className="flex items-center">
        <Badge renderAsDot className="bg-red-500" />
        <Text className="ms-2 font-medium capitalize text-gray-600"> Delete </Text>
      </div>
    </div>
  </div>
}

export default function RolesAndPermission() {
  const { openModal ,closeModal } = useModal();
  const columns = useMemo(() => getRolesAndPermissionColumns({ roleData, openModal }))

  console.log("columns",columns);
  const { visibleColumns } = useColumn(columns);
  const reduxPagination = useSelector(state => state.PaginationReducer)
const [data,setRoleData] = useState(null)

if(data === null){
  var json ={
    page: reduxPagination?.doc?.current || 1,
    limit: 2 || 10,
  }
  HitApi(json,getRoles).then((res)=>{
    console.log("res",res);
    setRoleData(res.doc)
  })
}


  
console.log("data",data);
  return (
    <div>
      <PageHeader metaTitle={'Role And Permission'} btnText={'Add Role'} children={<AddRolesAndPermission closeModal={closeModal}  />} />
      <PermissionTypes />
      <ControlledTable
        variant="modern"
        isLoading={false}
        showLoadingText={true}
        data={roleData}
        columns={visibleColumns}
        className={TableClass}
      />
    </div>
  )
}
