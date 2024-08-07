import React from 'react'
import { Form } from '../../../Component/ui/form'
import { siteMasterSchema } from '../../../Utils/validators/master/site-master/site-master.schema'
import { useDispatch } from 'react-redux';
import { useMedia } from '../../../Hooks/use-media';
import { Button, Input } from 'rizzui';
import { addSite } from '../../../Constant/Api/Api';
import { HitApi } from '../../../Store/Action/Api/ApiAction';

const initialValues = {
    siteName: '',
    buildings: '',
    area: ''
};

export default function AddSiteMaster({ closeModal }) {
    const isMedium = useMedia('(max-width: 1200px)', false);
    const onSubmit = (data) => {
        console.log('Sign in data ->', data);
        HitApi(data, addSite).then((res) => {
            console.log('res', res);
            alert(res.message)
          
        })

    };

    return (
        <div className='p-10'>
              <div className='text-xl mb-2 font-bold text-center'>Add Site</div>
            <Form validationSchema={siteMasterSchema} onSubmit={onSubmit} useFormProps={{ mode: 'onChange', defaultValues: initialValues, }} >
                {({ register, formState: { errors } }) => (
                    <div className="space-y-5 lg:space-y-6">
                        <Input type="text" size={isMedium ? 'lg' : 'xl'} label="Site Name" placeholder="Enter Site Name" className="[&>label>span]:font-medium " {...register('siteName')} error={errors.siteName?.message} />
                        <Input type="text" size={isMedium ? 'lg' : 'xl'} label="Buildings (Operation)" placeholder="Enter Build Name" className="[&>label>span]:font-medium " {...register('buildings')} />
                        <Input type="text" size={isMedium ? 'lg' : 'xl'} label="Area (Optional)" placeholder="Enter Area" className="[&>label>span]:font-medium " {...register('area')} />
                        <div className='flex gap-3 justify-end'>
                            <Button className="w-full" variant="flat" type="button" size={isMedium ? 'lg' : 'md'} onClick={() => closeModal()}> Cancel </Button>
                            <Button className="w-full" type="submit" size={isMedium ? 'lg' : 'md'} > Submit </Button>
                        </div>
                    </div>
                )}
            </Form>
        </div>
    )
}
