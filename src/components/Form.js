import React, { useState } from 'react'
import Button from '../UI/Button';

const Form = (p) => {

    const [formData, setFormData] = useState({ email: '' });
    const changeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.email.length === 0 || !formData.email.includes('@') || !formData.email.includes('.com'))
            alert("Invalid email !!");
        p.getFormData(formData);
        setFormData({ email: '' });
    }


    return (
        <>

            <input type="email" value={formData.email} name='email' placeholder='Your Email' onChange={changeHandler}
                className='p-3 w-full text-black rounded-md font-bold' />

            <Button className='bg-[#00df9a] text-black mx-auto sm:mx-4 px-0 w-[200px] mt-4 sm:mt-0 font-medium' onClick={submitHandler}>Notify us</Button>



        </>

    )
}

export default Form