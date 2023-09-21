import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {MdKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center f-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white px-4'>
                    I'm a full Stack developer</h2>
                    <p className='text-gray-500  py-4 px-4'>
                        I'm a SRM University final year student with a major in Computer Science and Engineering.
                        I'm passionate about technology and building user-centered products. 
                        I have experience in frontend development and user experience design.
                        I have worked on Machine learning in the area of Ensemble learning , 
                        specifically related to data visualizations. Currently I love to work on talwind CSS , react.js and Next.js.
                    </p>
                    <div className='px-4'>
                        <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </Link>
                    </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home