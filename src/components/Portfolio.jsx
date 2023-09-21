import React from 'react';
import Bidding from "../assets/portfolio/Bidding.jpg";
import Loan from "../assets/portfolio/Loan.jpg";
import Expense from "../assets/portfolio/Expense.jpg";
import eShop from "../assets/portfolio/eShop.jpg";
import Food from "../assets/portfolio/Food.jpg";
import Attendance from "../assets/portfolio/Attendance.jpg";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Bidding,
            link: 'https://github.com/Nikkhil797/NFT_Bidding'
        },
        {
            id: 2,
            src: eShop,
            link: 'https://github.com/Nikkhil797/eShop'
        },
        {
            id: 3,
            src: Expense,
            link: 'https://github.com/Nikkhil797/Expense_Tracker'
        },
        {
            id: 4,
            src: Food,
            link: 'https://github.com/Nikkhil797/Online_Food'
        },
        {
            id: 5,
            src: Loan,
            link: 'https://github.com/Nikkhil797/Loan_Prediction'
        },
        {
            id: 6,
            src: Attendance,
            link: 'https://github.com/Nikkhil797/Kalvium_Assessment'
        },
    ];

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, link }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            </a>
                            <div className='flex items-center justify-center'>
                                <a href={link} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                                <a href={link} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
