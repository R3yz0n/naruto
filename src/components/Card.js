import Single from '../assests/single.png'
import Double from '../assests/double.png'
import Triple from '../assests/triple.png'
import Button from '../UI/Button'


const Card = () => {
    return (
        <section className='w-full pt-[3rem] pb-[7rem] px-4 bg-white' id='apply'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium pb-3'>Join our membership down here</h1>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-3 lg:gap-8 px-6 md:px-0'>

                <aside className=' shadow-md shadow-black flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 py-10 '>

                    <img src={Single} className='w-32 mx-auto ] bg-white' alt="" />
                    <h2 className='text-2xl font-bold text-center py-5 border-b-[1px] border-[#c8c0c0]'>Single User</h2>
                    <p className='text-3xl font-bold text-center py-3  border-b-[1px] border-[#c8c0c0]'>$299</p>
                    <p className='text-xl font-bold text-center py-3  border-b-[1px] border-[#c8c0c0]'>Genin Course</p>
                    <Button className='bg-[#11e77c] font-bold border-[1px] border-black mt-4'>Start Trail</Button>

                </aside>

                <aside className=' shadow-md shadow-black flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 py-10'>

                    <img src={Double} className='w-32 mx-auto ] bg-white' alt="" />
                    <h2 className='text-2xl font-bold text-center py-5 border-b-[1px] border-[#c8c0c0]'>Double User</h2>
                    <p className='text-3xl font-bold text-center py-3  border-b-[1px] border-[#c8c0c0]'>$399</p>
                    <p className='text-xl font-bold text-center py-3  border-b-[1px] border-[#c8c0c0]'>Chunin Course</p>
                    <Button className='bg-[#000000] font-bold  mt-4 text-[#fffbfb!important] hover:bg-[#1e1e1e] text-xl'>Start Trail</Button>

                </aside>

                <aside className=' shadow-md shadow-black flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 py-10'>

                    <img src={Triple} className='w-32 mx-auto ] bg-white' alt="" />
                    <h2 className='text-2xl font-bold text-center py-5 border-b-[1px] border-[#c8c0c0]'>Triple User</h2>
                    <p className='text-3xl font-bold text-center py-3  border-b-[1px] border-[#c8c0c0]'>$899</p>
                    <p className='text-xl font-bold text-center py-3  border-b-[1px] border-[#c8c0c0] '>Jounin Course</p>
                    <Button className='bg-[#11e77c] font-bold border-[1px] border-black mt-4'>Start Trail</Button>

                </aside>




            </div>

        </section>
    )
}

export default Card