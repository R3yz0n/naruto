import React from 'react'
import Laptop from '../assests/laptop.jpg'

const Analystics = () => {
    const paragraphData = ` Corrupti dignissimos nobis molestiae eveniet similique, atque ipsam.
    Obcaecati accusamus doloribus nobis sunt eveniet possimus, praesentium  Obcaecati accusamus
     doloribus nobis sunt eveniet possimus, praesentium fuga quod fugiat cumque velit ipsum.`


    return (
        <section className=' bg-white py-10  px-4'>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 overflow-hidden">
                <img className='w-[500px] mx-auto my-4 animate-bounce' src={Laptop} alt="Error" />

                <article className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold text-xl md:text-2xl '>DATA ANALYSTICS DASHBOARD</p>

                    <h1 className='text-2xl md:text-4xl sm:text-3xl py-2 font-bold   '>Manage Data Analystics Centrally</h1>

                    <p className='text-md font-[400] mt-2'> {paragraphData} </p>


                    <button className='my-6 md:my-4 px-10 py-2 font-bold text-l md:text-2xl  rounded-md  text-lg
                     bg-[#000] text-white hover:bg-[#212020] mx-auto'>Get Started</button>
                </article>


            </div>



        </section>
    )
}

export default Analystics