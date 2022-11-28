import Typed from 'react-typed';


const Hero = () => {
    return (
        <section className='text-white'>
            <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col border-2 border-red-900'>

                <p className='text-[#00df9a] font-bold p-2'>GROW WITH DATA ANALYSTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>

                <div>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                </div>
                <Typed />

            </div>

        </section>
    )
}

export default Hero