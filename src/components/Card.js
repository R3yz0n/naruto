import React from 'react'
import Single from '../assests/single.png'
// import Double from '../assests/double.png'
// import Triple from '../assests/triple.png'

const Card = () => {
    return (
        <section className='w-full py-[10rem] px-4 bg-white'>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

                <aside className=' shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale duration-300'>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>$149</p>
                    <div>
                        <p>500GB</p>
                        <p>1 Granted User</p>
                        <p>Send up to 2GB</p>
                    </div>
                </aside>
                <aside className=' shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale duration-300'>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>$149</p>
                    <div>
                        <p>500GB</p>
                        <p>1 Granted User</p>
                        <p>Send up to 2GB</p>
                    </div>
                </aside>
                <aside className=' shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale duration-300'>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>$149</p>
                    <div>
                        <p>500GB</p>
                        <p>1 Granted User</p>
                        <p>Send up to 2GB</p>
                    </div>
                </aside>


            </div>

        </section>
    )
}

export default Card