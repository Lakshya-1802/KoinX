import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../assets/css/aa.webp'
import img2 from '../assets/css/ww.jpg'

const BitCoin = () => {
  return (
    <div className='background'>
        <p className='font-bold text-3xl'>About Bitcoin</p>
        <br />
        <p className='font-semibold text-xl'>What is bitCoin ?</p>
        <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex sapiente nihil mollitia laudantium eligendi, exercitationem consectetur aspernatur molestiae? Unde placeat, explicabo sed ipsum repudiandae expedita beatae cumque perferendis dolore.
        </p>
        <hr className='my-3 '/>
        <h4 className='font-semibold text-2xl mb-2'>Lorem ipsum dolor sit amet.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio ipsam nobis dolore accusamus nisi delectus facilis, rem, magnam necessitatibus consequuntur quia deserunt ullam facere minus incidunt sunt minima dolor eos aliquam harum. Itaque velit, tenetur sed, iste ducimus deserunt nihil dolor necessitatibus quasi voluptates illum id. Totam, harum minima.
        </p>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ducimus maxime deleniti voluptatum ullam, asperiores quas! Illum esse odio cumque rem illo quasi, enim aspernatur alias repudiandae consectetur ad voluptatem ut deserunt maxime nesciunt possimus qui eum reprehenderit, sit nobis veniam corrupti quia recusandae. Asperiores voluptate quod neque et consequuntur. Aspernatur, quidem! Nesciunt soluta minima maiores harum nemo quam corporis.</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sit dolorum voluptate aspernatur aliquid officia, eos incidunt. Error, nesciunt rerum, blanditiis est consequuntur similique delectus esse, reprehenderit minus placeat harum!</p>
        <hr className='my-3 '/>
        <h4 className='font-semibold text-2xl'>Already Holding BitCoin?</h4>

       <div className='flex gap-2 flex-wrap'>
       <div class="card1 flex">
            <img src={img1} alt="Company Logo" className='h-40 w-32 rounded-md'/>
            <div className='flex flex-col ml-4 gap-5'>
            <h2 className=' font-bold text-xl text-white '>Calculate Your Profits</h2>
           
            <a href="#" class="button">Check Now <FaArrowRightLong/></a>

            </div>
        </div>
        <div class="card2 flex">
            <img src={img2} alt="Company Logo" className='h-40 w-32 rounded-md'/>
            <div className='flex flex-col ml-4 gap-5'>
            <h2 className=' font-bold text-xl text-white '>Calculate Your Profits</h2>
           
            <a href="#" class="button">Check Now <FaArrowRightLong/></a>

            </div>
        </div>
       </div>
       <hr className='my-3 '/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam recusandae repudiandae quaerat, in nam reiciendis cupiditate, facilis quidem nisi praesentium ea. Sapiente perferendis officiis illum quam magni deserunt aliquam quibusdam odio placeat molestias, beatae, ipsam obcaecati. Ullam laborum impedit architecto?</p>
      
    </div>
  )
}

export default BitCoin
