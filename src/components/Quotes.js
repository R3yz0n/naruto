import Typed from 'react-typed';
import Button from '../UI/Button';



const Quotes = () => {
    return (
        <section className='text-white'>
            <div className='max-w-[900px] mt-[4rem] md:mt-[6rem] w-full min-h-[55vh] sm:min-h-screen mx-auto text-center flex flex-col px-3  py-4  '>

                <p className='text-[#00df9a] font-bold p-2 md:text-2xl sm:text-xl'>A NINJA IS SOMEONE WHO ENDURES.</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#dfb344]'>Naruto Shipudden</h1>

                <div>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>" Once you question your own belief "</p>

                    <p className='md:text-2xl sm:text-xl text-l font-bold py-4 text-[#f4b83f]'>
                        <Typed strings={['It is Over !!', 'Believe in yourself, work hard.']} typeSpeed={20} backSpeed={10} loop />
                    </p>

                    <p className='md:text-2xl sm:text-xl text-l font-bold py-4 text-[#898885]  px-6 mb-2'>
                        However strong you become, never seek to bear everything alone. If you do, failure is certain"
                    </p>

                </div>

                <Button className='text-[1.7rem]  px-6'>Get Started</Button>
            </div>
        </section>


    )
}

export default Quotes