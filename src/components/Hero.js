import Typed from 'react-typed';
import Button from '../UI/Button';



const Hero = () => {
    return (
        <section className='text-white'>
            <div className='max-w-[900px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col   '>

                <p className='text-[#00df9a] font-bold p-2 md:text-2xl sm:text-xl'>GROW WITH DATA ANALYSTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>

                <div>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>

                    <p className='md:text-2xl sm:text-xl text-l font-bold py-4 text-[#f4b83f]'>
                        <Typed strings={['Lets start to code together ..', 'Starting from today !']} typeSpeed={20} backSpeed={10} loop />
                    </p>

                    <p className='md:text-2xl sm:text-xl text-l font-bold py-4 text-[#898885]  px-6 mb-2'>
                        Monitor your data analystics to increase revenue for BTB, BTC and SAAS platforms.
                    </p>

                </div>

                <Button className='text-[1.5rem] py-1 px-6 text-[#000] bg-[#00df9a]'>Get Started</Button>

            </div>

        </section>
    )
}

export default Hero