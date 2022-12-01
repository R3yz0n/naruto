import Form from './Form'

const EmailEntry = () => {

    const getFormData = (formData) => {
        alert('Your email is : ' + formData.email)
    }







    return (

        <section className='w-full py-16 text-white px-4' id='contact'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to join leaf village Jonin-team?</h1>
                    <p className='font-bold text-[#00df9a]'>We train shinobi to their extreme level.</p>

                </div>


                <div className='my-4'>

                    <div className='flex flex-col sm:flex-row item-center justify-between w-full'> <Form getFormData={getFormData} /> </div>

                    <p className='my-4'>We care about protection of data.  <span className='text-[#00df9a]'> @Bandai-namco</span></p>

                </div>



            </div>
        </section>
    )
}

export default EmailEntry