import React from 'react'
import Button from '../UI/Button'
import InputField from './InputField'

const NewsLetter = () => {





    return (

        <section className='w-full py-16 text-white px-4'>
            <div className='max-w[1240px] mx-auto grid lg:grid-cols-3'>

                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optime your flow?</h1>
                    <p>Want tips & tricks to optime your flow</p>
                </div>

                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row item-center justify-between w-full'>

                        <InputField placeholder="Email" type='email' style='p-3  w-[100%] rounded-md text-black font-bold' getEmail={submitHandler} />

                        <Button className='bg-[#00df9a] text-black mx-auto sm:mx-4 px-0 w-[200px] mt-3 sm:mt-0 font-medium' onClick={submitHandler}>Notify me</Button>

                    </div>

                    <p className='my-4'>We care about protection of data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>

                </div>


            </div>
        </section>
    )
}

export default NewsLetter