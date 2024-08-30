import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown, ChevronRight, Folder, File, PlusCircle, EllipsisVertical, Plus, Edit, Trash2 } from 'lucide-react';
import { setApiJson, setServiceMasterJson, setServiceRequestData } from './Store/Action/ServiceMasterAction';
import { AllApiCallHere } from './Store/AllApiCallHere';
import { addRequest, deleteApiService, searchApiService, updateApiService } from './constants/constant';
import AddMoreService from './addMoreService';
import ApiRequest from './ApiRequest';
import {FullJson} from './FullJson';
import CustomInput from './component/custom-input';

export default function ApiService() {
  const ServiceMasterReducer = useSelector(state => state.ServiceMasterReducer);
  const [openServices, setOpenServices] = useState({});
  const dispatch = useDispatch()
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [addMoreServiceModal, setAddMoreServiceModal] = useState(false);
  const [dataForRequest, setDataForRequest] = useState(false);
  const [bodyScreen, setBodyScreen] = useState('Global');
  const [requestAddModal, setRequestAddModal] = useState(false);

  useEffect(() => {
    if (ServiceMasterReducer?.doc === null) {
      getApiService()
    }
  }, [ServiceMasterReducer])

  const getApiService = () => {
    var json = {
      page: 1,
      limit: 10,
      search: {

      }
    }
    AllApiCallHere(json, searchApiService).then(res => {
      console.log('res',res);
      if (res?.content?.length > 0) {
        dispatch(setServiceMasterJson(res?.content))
      }
    })
  }

  const toggleService = (index) => {
    setOpenServices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const togglePopup = (index) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  const onClickServiceRequest = (i, index) => {
    dispatch(setServiceRequestData(null))

    setDataForRequest({serviceIndex:i, requestIndex:index})
    setBodyScreen('Request')
  };

  const handleDeleteService = (id) => {
    var confirm = window.confirm('Are you sure to delete this service')
    if (confirm) {
      var json = {
        _id: id
      }
      AllApiCallHere(json, deleteApiService).then(res => {
        dispatch(setServiceMasterJson(null))
      })
    }
    setOpenPopupIndex(null);
  };

  console.log('dsfds---');
  
  const editServiceClick = (object) => {
    var oldJson = ServiceMasterReducer?.apiJson
    oldJson.protocol = object.protocol
    oldJson.serviceName = object.serviceName
    dispatch(setApiJson(oldJson))
    setAddMoreServiceModal(object?.type)
  }

  const handleAddGloabalVariables = (id) => {
    setBodyScreen('Global')
  }

  const handleAddNewRequest = (data) => {
    var json = FullJson
    json.name = ServiceMasterReducer?.apiJson?.requestName
    json.serviceName = data.serviceName
    json.serviceId = data._id

    console.log('data',data);
    console.log('json',json);

    AllApiCallHere(json,addRequest).then(res=>{
      console.log('res',res);
      if(res.status === 201){
        var newJson = {
          requestId:res?.data?._id,
          requestName:res?.data?.name
        }
        if(data?.requests === null){
          data.requests = [newJson]
        }
        else{
          data?.requests.push(newJson)
        }
        delete data.createdAt
        delete data.updatedAt
        AllApiCallHere(data,updateApiService).then(result=>{
          setRequestAddModal(false)
        })
      }
    })
  }

  return (
    <div className="grid grid-cols-12 gap-2 h-screen">
      <div className="col-span-3 bg-gray-100 p-4 overflow-y-auto">
        <div className='flex justify-between bg-white shadow-md items-center p-2 rounded-xl mb-5'>
          <h2 className="text-xl font-semibold text-gray-700">
            Services
          </h2>
          <PlusCircle onClick={() => setAddMoreServiceModal('add')} />
        </div>
        {ServiceMasterReducer?.doc?.map((ele, i) => (
          <div key={i} className="mb-2">
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded justify-between"
              onClick={() => toggleService(i)}
            >
              <div className='flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded'>
                {openServices[i] ? (
                  <ChevronDown className="w-4 h-4 mr-2 text-gray-600" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-600" />
                )}
                <Folder className="w-5 h-5 mr-2 text-yellow-500" />
                <span className="text-gray-700 font-medium">{ele?.serviceName}</span>
              </div>
              <div className="relative">
                <EllipsisVertical
                  size={20}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePopup(i);
                  }}
                />
                {openPopupIndex === i && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <button
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => setRequestAddModal(ele)}
                      >
                        <Plus className="mr-2" size={16} />
                        Add New Request
                      </button>
                      <button
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => editServiceClick({ type: ['edit', ele?._id], serviceName: ele?.serviceName, protocol: ele?.protocol })}
                      >
                        <Edit className="mr-2" size={16} />
                        Edit Service Name
                      </button>
                      <button
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleDeleteService(ele?._id)}
                      >
                        <Trash2 className="mr-2" size={16} />
                        Delete Service
                      </button>
                      <button
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleAddGloabalVariables(ele?._id)}
                      >
                        <Trash2 className="mr-2" size={16} />
                        Add Global Variables
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {openServices[i] && (
              <div className="ml-6 mt-1">
                {ele?.requests?.map((item, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-200 rounded" onClick={() => onClickServiceRequest(i, index)}>
                    <File className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600 text-sm">{item?.requestName}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="col-span-9 p-4">
        {
          bodyScreen === 'Global' ?
            <h1>Hellow</h1>
            :
            <ApiRequest dataForRequest={dataForRequest} />
        }
      </div>
      {
        addMoreServiceModal === 'add' || addMoreServiceModal?.[0] === 'edit' ?
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <AddMoreService setModal={setAddMoreServiceModal} type={addMoreServiceModal === 'add' ? 'add' : addMoreServiceModal} />
          </div>
          :
          ''
      }

      {
        requestAddModal !== false ?
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-lg font-semibold mb-4">Enter Request Name</h2>
              <CustomInput name='requestName' />
              <div className="flex justify-end mt-2">
                <button onClick={() => setRequestAddModal(false)} className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800">
                  Cancel
                </button>
                <button onClick={() => handleAddNewRequest(requestAddModal)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Save
                </button>
              </div>
            </div>
          </div>
          :
          ''
      }
    </div>
  );
}