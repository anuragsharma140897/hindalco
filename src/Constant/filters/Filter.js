import SearchableSelect from "../../Component/ui/form/select/SearchableSelect";
import { searchGeneral, searchRole } from "../Api/Api";
import { ScreenName } from "../Screen/Screen";

export const FilterCondition = [
    {
        _id : 1, screen : ScreenName?.user,
        condition : [
            {
                id : 0,
                serverKey:'status',
                title:'Status',
                render : (onChange, onClear)=><SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{'usedBy':'status'}} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true}/>,
                
            },
            {
                id : 1,
                serverKey:'roleName',
                title:'Role Name',
                render : (onChange, onClear)=><SearchableSelect name={'roleName'} placeholder={'Select Role Name'} type={'filter'} api={searchRole} getFieldName={'roleName'} onChange={onChange} onClear={onClear} useCustomDisplay={false}/>,
                
            }
        ]
    },
    {
        _id : 1, screen : ScreenName?.roleAndPermission,
        condition : [
            {
                id : 0,
                serverKey:'roleName',
                render : (onChange, onClear)=><SearchableSelect name={'roleName'} placeholder={'Select Role Name'} type={'filter'} api={searchRole} getFieldName={'roleName'} onChange={onChange} onClear={onClear} useCustomDisplay={false}/>,
                
            }
        ]
    },
    {
        _id : 1, screen : ScreenName?.siteMaster,
        condition : [
            {
                id : 0,
                serverKey:'status',
                render : (onChange, onClear)=><SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{'fieldName':'status'}} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true}/>,
                
            }
        ]
    },
    {
        _id : 3, screen : ScreenName?.buildingMaster,
        condition : [
            {
                id : 0,
                serverKey:'status',
                render : (onChange, onClear)=><SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{'fieldName':'status'}} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true}/>,
                
            }
        ]
    }
]