import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useValidation from '../../../Hooks/useValidation';
import { siteMasterSchema } from '../../../Utils/validators/master/site-master/site-master.schema';
import { setSiteMasterApiJson } from '../../../Store/Action/master/site-master/site-master-action';
import CustomButton from '../../../Component/ui/buttons/custom-button';
import CustomInput from '../../../Component/ui/form/input/custom-input';
import { addSite, updateSite } from '../../../Constant/Api/Api';
import { HitApi } from '../../../Store/Action/Api/ApiAction';
import { siteMasterVariable as variable } from '../../../Constant/variables/master/site-master/site-master.variable';



export default function AddSiteMaster({ row, closeModal }) {
    var dispatch = useDispatch()
    const reduxSite = useSelector(state => state.SiteMasterReducer)
    const { errors, validate } = useValidation(siteMasterSchema);

    useEffect(() => {
        if (row?.id) {
            loadDefault(row)
        }
    }, [])


    const loadDefault = (row) => {
        var json = reduxSite?.apiJson
        Object.assign(json, ...Object.keys(variable).map(key => ({ [variable[key]]: row[key] })));
        dispatch(setSiteMasterApiJson(json))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var json = reduxSite?.apiJson
        const validationErrors = validate(json);
        if (Object.keys(validationErrors).length === 0) {
            if (row?.id) {
                Object.assign(json, { id: row?.id })
                HitApi(json, updateSite).then((result) => {
                  console.log('result', result);
                })
              } else {
                Object.assign(json, { status: json?.status || 'active' })
                HitApi(json, addSite).then((result) => {
                  console.log('result', result);
                })
              }
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className='p-10'>
            <form onSubmit={handleSubmit}>
                <div className="space-y-5 lg:space-y-6">
                    <CustomInput name="siteName" label="Site Name" value={reduxSite?.apiJson?.siteName} error={errors} reduxState={reduxSite?.apiJson} setAction={setSiteMasterApiJson} disabled={row?.id?true : false} />
                    <CustomInput important={false} name="buildings" label="Building" value={reduxSite?.apiJson?.buildings} error={errors} reduxState={reduxSite?.apiJson} setAction={setSiteMasterApiJson} />
                    <CustomInput important={false} name="area" label="Site Name" value={reduxSite?.apiJson?.area} error={errors} reduxState={reduxSite?.apiJson} setAction={setSiteMasterApiJson} />
                    <div className='flex gap-3 justify-end'>
                        <CustomButton text={'Cancel'} variant='flat' className={''} onClick={closeModal} />
                        <CustomButton type={'submit'} className={''} text={row?.id?'Update' : 'Submit'} />
                    </div>
                </div>
            </form>

        </div>
    )
}
