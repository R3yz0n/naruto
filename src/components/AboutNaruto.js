import React from 'react'
import Naruto from '../assests/naruto.webp'

const AboutNaruto = () => {
    const paragraphData = `A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf 
    village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World. In response, 
    the leader of Konoha and the Fourth Hokage, seals the fox inside the body of his newborn son.`



    return (
        <section className=' bg-white py-10  px-4 ' id='about'>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 overflow-hidden">
                <img className='w-[500px] mx-auto my-4 animate-bounce cursor-grab' src={Naruto} alt="Error" />

                <article className='flex flex-col justify-center'>
                    <p className='text-[#2a44ed] font-bold text-xl md:text-2xl  '>NARUTO STORY ARC ORIGINS</p>

                    <h1 className='text-2xl md:text-4xl sm:text-3xl py-2 font-bold'>Village hidden in the leaves</h1>

                    <p className='text-md font-[400] mt-2'> {paragraphData} </p>


                    <button className='my-6 md:my-4 px-10 py-2 font-bold text-l md:text-2xl  rounded-md  text-lg
                     bg-[#000] text-white hover:bg-[#212020] mx-auto'>Get Started</button>
                </article>


            </div>



        </section>
    )
}

export default AboutNaruto