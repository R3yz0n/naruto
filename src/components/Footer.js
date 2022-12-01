import { FaDribbbleSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' id='team'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Itachi Uchiha</h1>
                <p className='py-4'>You and I are flesh and blood. I'm always going to be there for you, even if it's only as an obstacle for you to overcome.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div className='px-3'>
                    <h6 className='font-medium text-[1rem] md:text-[1.2rem] text-[#00DF9A] '>Hokages</h6>
                    <ul>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Hashirama</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Tobirama</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Hiruzen</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Minato</li>
                    </ul>
                </div>


                <div className='px-3'>
                    <h6 className='font-medium text-[1rem] md:text-[1.2rem] text-[#00DF9A] '>Jonin</h6>
                    <ul>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Kakashi</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Asuma</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Guy Sensei</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Hanabi</li>
                    </ul>
                </div>


                <div className='px-3'>
                    <h6 className='font-medium text-[1rem] md:text-[1.2rem] text-[#00DF9A] '>Chunin</h6>
                    <ul>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Sikamaru</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Neji</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Sakura</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Choji</li>
                    </ul>
                </div>


                <div className='px-3'>
                    <h6 className='font-medium text-[1rem] md:text-[1.2rem] text-[#00DF9A] '>Traitors</h6>
                    <ul>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Madara</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Sasuke</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Orochimaru</li>
                        <li className='py-2 sm:text-sm text-[0.78rem] md:text-[1rem]'>Mizuki</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Footer