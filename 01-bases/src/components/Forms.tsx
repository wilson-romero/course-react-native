import { useForm } from 'react-hook-form'
import { Field, Label } from './ui/fieldset'
import { Input } from './ui/input'
import { Divider } from './ui/divider'
import { Button } from './ui/button'

interface FormInputs {
    email: string
    password: string
}

export default function Forms() {
    const { register, handleSubmit } = useForm<FormInputs>({
        defaultValues: {
            email: 'test@a.com',
            password: '123'
        }
    })

    const onSubmit = (data: FormInputs) => {
        console.log({ data })
    }

    return (
        <form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='className="text-base/7 font-semibold mb-10'>Forms</h3>
            <div className="space-y-2 mb-10">
                <Field>
                    <Label>Email</Label>
                    <Input type='email' {...register('email', { required: true })} />
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Input type='password' {...register('password', { required: true })} />
                </Field>
            </div>
            <Divider className='mb-4' />
            <div className='flex justify-end'>
                <Button type='submit' >Login</Button>
            </div>
        </form>
    )
}
