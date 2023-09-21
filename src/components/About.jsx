import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                As a passionate web developer and data structure enthusiast,
                I have honed my skills in front-end and back-end web development.
                I possess a strong understanding of fundamental data structures and algorithms, 
                and have extensive experience in designing, implementing and optimizing complex data structures to solve real-world problems. 
                I have honed my skills in programming languages such as Python,Cpp,C,Javascript.
            </p>
            <br />
            <p className='text-xl'>
                In my journey, I've had the privilege of working on a wide array of projects, 
                from e-commerce platforms to content management systems and everything in between. 
                I approach each project with a dedication to quality and a determination to push the boundaries of what's possible. 
                Whether it's coding a sleek user interface,  optimizing database performance, or architecting a scalable web application,
                I'm always up for the challenge.
            </p>
        </div>
    </div>
  )
}

export default About