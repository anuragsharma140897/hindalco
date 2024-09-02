// import React, { useEffect, useState } from 'react';
// import Header from '../api-service/ApiRequestType/Header'
// import Auth from '../api-service/ApiRequestType/Auth'
// import Body from '../api-service/ApiRequestType/Body'
// import { useDispatch, useSelector } from 'react-redux';
// import { AllApiCallHere } from './store/AllApiCallHere';
// import { setServiceRequestData } from './store/Action/ServiceMasterAction';
// import { searchRequest, updateRequest } from './constants/constant';
// import { dynamicFetch } from './FullJson';
// import { File } from 'lucide-react';
// import CustomJsonEditor from '../../../Component/ui/editor/json-editor';

// function ApiRequest({ dataForRequest }) {

//     const ServiceMasterReducer = useSelector(state => state.ServiceMasterReducer);

//     const [activeTab, setActiveTab] = useState('Params');
//     const [accuatalResult, setAccuatalResult] = useState(null)
//     const [render, setRender] = useState(Date.now())
    

//     const dispatch = useDispatch()

//     useEffect(() => {
//         if (ServiceMasterReducer?.requestDoc === null) {
//             getApiRequest()
//             setAccuatalResult("")
//             setRender(Date.now())
//         }
//     }, [ServiceMasterReducer,render])

//     const getApiRequest = () => {
//         var json = {
//             page: 1,
//             limit: 1,
//             search: {
//                 _id: ServiceMasterReducer?.doc?.[dataForRequest?.serviceIndex]?.requests?.[dataForRequest?.requestIndex]?.requestId
//             }
//         }
//         AllApiCallHere(json, searchRequest).then(res => {
//             if (res?.content?.length > 0) {
//                 dispatch(setServiceRequestData(res?.content?.[0]))
//                 setRender(Date.now())
//             };
//         })
//     }

//     const onClickSend = async () => {
//         const resultString = await dynamicFetch(ServiceMasterReducer?.requestDoc);
//         console.log('resultString',resultString);
//         setAccuatalResult(JSON.parse(resultString))
//         setRender(Date.now())
//     };

//     const onChnageMethod = (value) => {
//         var oldJson = ServiceMasterReducer?.requestDoc
//         oldJson.request.method = value
//         dispatch(setServiceRequestData(oldJson))
//     }

//     const onChnageUrl = (value) => {
//         var oldJson = ServiceMasterReducer?.requestDoc
//         oldJson.request.url.raw = value
//         dispatch(setServiceRequestData(oldJson))
//         setRender(Date.now())
//     }

//     const onClickSaveRequest = () => {
//         var oldData = ServiceMasterReducer.requestDoc
//         if (accuatalResult !== null && accuatalResult !== "") {
//             oldData.response[0] = accuatalResult
//         }

//         console.log('ServiceMasterReducer?.requestDoc', oldData);

//         AllApiCallHere(oldData, updateRequest).then(result => {
//             console.log('result', result);
//             // setAccuatalResult(result)
//             setRender(Date.now())
//         })
//     }

//     const tabs = ['Params', 'Authorization', 'Headers', 'Body'];

//     console.log('accuatalResult',accuatalResult);

//     return (
//         ServiceMasterReducer?.requestDoc !== null ?
//             <div>
//                 <div className="p-4 bg-white rounded-lg shadow-md">
//                     <div className="grid grid-cols-12 gap-3 mb-4">
//                         <select onChange={(e) => onChnageMethod(e.target.value)} className="col-span-1 block w-max rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
//                             <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'GET'}>GET</option>
//                             <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'POST'}>POST</option>
//                             <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'PUT'}>PUT</option>
//                             <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'DELETE'}>DELETE</option>
//                         </select>
//                         <div className='col-span-10'>
//                             <input value={ServiceMasterReducer?.requestDoc?.request.url.raw} onChange={(e) => onChnageUrl(e.target.value)} className='w-full rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
//                         </div>
//                         <button className="text-white font-bold col-span-1 bg-blue-400 items-center text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onClick={onClickSend}>
//                             Send
//                         </button>
//                     </div>
//                     <div className="flex border-b">
//                         {tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
//                                 onClick={() => setActiveTab(tab)}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>
//                     {
//                         activeTab === 'Params' ?
//                             <h1>Params</h1> :
//                             activeTab === 'Authorization' ?
//                                 <Auth /> :
//                                 activeTab === 'Headers' ?
//                                     <Header />
//                                     :
//                                     <Body />
//                     }
//                 </div>
//                 <div className='flex justify-end mt-5'>
//                     <button className="flex gap-1 p-2 text-white font-bold col-span-1 bg-blue-400 items-center text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onClick={() => onClickSaveRequest()}>
//                         <File /> Save
//                     </button>
//                 </div>
//                 <div className='mt-5'>
//                     {/* accuatalResult === null || accuatalResult === "" ? JSON.stringify(ServiceMasterReducer?.requestDoc?.response?.[0]) : accuatalResult */}
//                     <CustomJsonEditor readOnly={true} detectRender={render} json={accuatalResult === null || accuatalResult === "" ? ServiceMasterReducer?.requestDoc?.response?.[0] : accuatalResult} />
//                     {/* <textarea className='w-full h-96' value={accuatalResult === null || accuatalResult === "" ? JSON.stringify(ServiceMasterReducer?.requestDoc?.response?.[0]) : accuatalResult} /> */}
//                 </div>
//             </div>
//             :
//             'Loading'

//     );
// }

// export default ApiRequest;





import React, { useEffect, useState } from 'react';
import Header from '../api-service/ApiRequestType/Header'
import Auth from '../api-service/ApiRequestType/Auth'
import Body from '../api-service/ApiRequestType/Body'
import { useDispatch, useSelector } from 'react-redux';
import { AllApiCallHere } from './store/AllApiCallHere';
import { setServiceRequestData } from './store/Action/ServiceMasterAction';
import { searchRequest, updateRequest } from './constants/constant';
import { dynamicFetch } from './FullJson';
import { File } from 'lucide-react';
import CustomJsonEditor from '../../../Component/ui/editor/json-editor';

function ApiRequest({ dataForRequest }) {

    const ServiceMasterReducer = useSelector(state => state.ServiceMasterReducer);

    const [activeTab, setActiveTab] = useState('Params');
    const [accuatalResult, setAccuatalResult] = useState(null)
    const [render, setRender] = useState(Date.now())


    const dispatch = useDispatch()

    useEffect(() => {
        if (ServiceMasterReducer?.requestDoc === null) {
            getApiRequest()
            setAccuatalResult("")
            setRender(Date.now())
        }
    }, [ServiceMasterReducer, render])

    const getApiRequest = () => {
        var json = {
            page: 1,
            limit: 1,
            search: {
                _id: ServiceMasterReducer?.doc?.[dataForRequest?.serviceIndex]?.requests?.[dataForRequest?.requestIndex]?.requestId
            }
        }
        AllApiCallHere(json, searchRequest).then(res => {
            if (res?.content?.length > 0) {
                dispatch(setServiceRequestData(res?.content?.[0]))
                setRender(Date.now())
            };
        })
    }

    const onClickSend = async () => {
        var oldData = ServiceMasterReducer?.requestDoc?.request
        oldData.body.raw = JSON.parse(oldData?.body?.raw)     
        const hashValues = extractHashValues(oldData);
        let updatedValue = oldData
        console.log('hashValues',hashValues);
        if(hashValues?.length !== 0){
            hashValues.map((ele) => {
                const tokenObject = ServiceMasterReducer?.globalResponse.find(item => item.valueName === ele?.split("#")[1]);
                const token = tokenObject ? tokenObject.data : null;
                updatedValue = replaceValues(oldData,{[ele?.split("#")[1]]:token})
            })
        }
        oldData.body.raw = JSON.stringify(oldData?.body?.raw)
        updatedValue.body.raw = JSON.stringify(updatedValue?.body?.raw)
        const resultString = await dynamicFetch({request:updatedValue});
        setAccuatalResult(JSON.parse(resultString))
        setRender(Date.now())
    };

    const extractHashValues = (obj) => {
        const result = [];
        const traverse = (item) => {
            if (typeof item === 'object' && item !== null) {
                Object.values(item).forEach(traverse);
            } else if (typeof item === 'string' && item.startsWith('#')) {
                console.log('item',item);
                result.push(item);
            }
        };
        traverse(obj);
        return result;
    };

    const replaceValues = (obj, valueMap) => {
        if (typeof obj !== 'object' || obj === null) {
          return obj;
        }
      
        if (Array.isArray(obj)) {
          return obj.map(item => replaceValues(item, valueMap));
        }
      
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
          if (typeof value === 'string' && value.startsWith('#')) {
            const newValue = valueMap[value.slice(1)];
            newObj[key] = newValue !== undefined ? newValue : value;
          } else if (typeof value === 'object') {
            newObj[key] = replaceValues(value, valueMap);
          } else {
            newObj[key] = value;
          }
        }
        return newObj;
      }


    const onChnageMethod = (value) => {
        var oldJson = ServiceMasterReducer?.requestDoc
        oldJson.request.method = value
        dispatch(setServiceRequestData(oldJson))
    }

    const onChnageUrl = (value) => {
        var oldJson = ServiceMasterReducer?.requestDoc
        oldJson.request.url.raw = value
        dispatch(setServiceRequestData(oldJson))
        setRender(Date.now())
    }

    const onClickSaveRequest = () => {
        var oldData = ServiceMasterReducer.requestDoc
        if (accuatalResult !== null && accuatalResult !== "") {
            oldData.response[0] = accuatalResult
        }

        console.log('ServiceMasterReducer?.requestDoc', oldData);

        AllApiCallHere(oldData, updateRequest).then(result => {
            console.log('result', result);
            // setAccuatalResult(result)
            setRender(Date.now())
        })
    }

    const tabs = ['Params', 'Authorization', 'Headers', 'Body'];

    console.log('accuatalResult', ServiceMasterReducer.requestDoc);

    return (
        ServiceMasterReducer?.requestDoc !== null ?
            <div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <div className="grid grid-cols-12 gap-3 mb-4">
                        <select onChange={(e) => onChnageMethod(e.target.value)} className="col-span-1 block w-max rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'GET'}>GET</option>
                            <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'POST'}>POST</option>
                            <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'PUT'}>PUT</option>
                            <option selected={ServiceMasterReducer?.requestDoc?.request?.method === 'DELETE'}>DELETE</option>
                        </select>
                        <div className='col-span-10'>
                            <input value={ServiceMasterReducer?.requestDoc?.request.url.raw} onChange={(e) => onChnageUrl(e.target.value)} className='w-full rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
                        </div>
                        <button className="text-white font-bold col-span-1 bg-blue-400 items-center text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onClick={onClickSend}>
                            Send
                        </button>
                    </div>
                    <div className="flex border-b">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {
                        activeTab === 'Params' ?
                            <h1>Params</h1> :
                            activeTab === 'Authorization' ?
                                <Auth /> :
                                activeTab === 'Headers' ?
                                    <Header />
                                    :
                                    <Body />
                    }
                </div>
                <div className='flex justify-end mt-5'>
                    <button className="flex gap-1 p-2 text-white font-bold col-span-1 bg-blue-400 items-center text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onClick={() => onClickSaveRequest()}>
                        <File /> Save
                    </button>
                </div>
                <div className='mt-5'>
                    {/* accuatalResult === null || accuatalResult === "" ? JSON.stringify(ServiceMasterReducer?.requestDoc?.response?.[0]) : accuatalResult */}
                    <CustomJsonEditor readOnly={true} detectRender={render} json={accuatalResult === null || accuatalResult === "" ? ServiceMasterReducer?.requestDoc?.response?.[0] : accuatalResult} />
                    {/* <textarea className='w-full h-96' value={accuatalResult === null || accuatalResult === "" ? JSON.stringify(ServiceMasterReducer?.requestDoc?.response?.[0]) : accuatalResult} /> */}
                </div>
            </div>
            :
            'Loading'

    );
}

export default ApiRequest;