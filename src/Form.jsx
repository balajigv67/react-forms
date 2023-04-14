import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import './Form.css'

const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required('Full Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        age: yup.number().typeError("Age is required").positive().integer().min(18).required('Age is required'),
        password: yup.string().min(4).max(20).required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    })

    const [formData, setFormData] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        setFormData(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Full Name' {...register('fullName')} />
                {errors.fullName && <span>{errors.fullName.message}</span>}
                <input type="email" placeholder='Email' {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
                <input type="number" placeholder='Age' {...register('age')} />
                {errors.age && <span>{errors.age.message}</span>}
                <input type="password" placeholder='Password' {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}
                <input type="password" placeholder='Confirm Password' {...register('confirmPassword')} />
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                <input type="submit" />
            </form>
            {formData && (
                <div>
                    {Object.entries(formData).map(([key, value]) => (
                        <h4 key={key}>
                            {key}: {value}
                        </h4>
                    ))}
                    {/* In the onSubmit function, you can use the Object.entries() method to convert the data object into an array of its own enumerable property [key, value] pairs, then use Array.prototype.map() to log each element. Here's the modified onSubmit function: */}
                </div>
            )}
        </>
    )
}

export default Form;
