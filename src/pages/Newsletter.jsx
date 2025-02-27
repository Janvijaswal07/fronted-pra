import React from 'react'
import news from '../images/newsimg.webp'
const Newsletter = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='flex justify-center mt-10'>
            <img src={news} alt="newsimg" className='h-[230px] w-[670px] ' />
        </div>
        <h1 className="font-[Roboto]   font-bold text-2xl mt-6  ">
        Frontend Practice Newsletter
        </h1>
     <div className='flex justify-center px-3 mt-3'>
     <p className='md:w-[20%] text-gray-500  '>Get the latest Frontend Practice updates and recommendations for websites, articles, and videos worth checking out. Stay informed and inspired with us.</p>
     </div>
     <p className='text-gray-500 mt-2 text-sm font-semibold'>Over 1,000 subscribers</p>
   <div className='flex justify-center mt-7'>
   <div className="md:w-[25%] flex">
  <input 
    type="text" 
    placeholder="Type your email..." 
    className="border rounded-l-lg  pr-16 pl-3 text-base text-gray-400 h-10 font-semibold w-full "
  />
  <button className="   h-10  rounded-r-lg px-4 text-base text-white bg-black font-semibold hover:bg-gray-800">
    Subscribe
  </button>
</div>
   </div>
   <div className='flex justify-center mt-4'>
     <p className='md:w-[27%] text-gray-500 text-[12px]'>By subscribing, I agree to Substack’s Terms of Use and acknowledge its Information Collection Notice and Privacy Policy</p>
     </div>

<h2 className=' font-[Roboto]  text-sm text-gray-500 font-semibold mt-4'>No Thanks </h2>
    </div>
  )
}

export default Newsletter
