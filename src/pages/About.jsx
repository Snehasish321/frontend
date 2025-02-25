import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-6xl text-center border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p className='text-3xl font-bold'>Touchables</p>
        <p>Welcome to Touchables, your go-to online fashion destination, where style meets affordability! At Touchables, we believe that fashion is more than just clothing—it’s an expression of personality, confidence, and creativity. That’s why we have made it our mission to provide high-quality, stylish, and comfortable apparel and footwear for men, women, and kids at prices that won’t break the bank. Whether you’re looking for everyday essentials, trendy outfits for a special occasion, or the perfect pair of shoes to complete your look, Touchables has got you covered.</p>
        <p className='text-3xl font-bold'>Our Mission</p>
        <p>Our mission is simple: to make fashion accessible to everyone. We understand that shopping for stylish, high-quality clothing can often be expensive, and many people hesitate to buy trendy outfits due to high price tags. That’s where Touchables comes in! We are committed to bringing the latest fashion trends to your doorstep without compromising on quality or affordability. Our goal is to ensure that everyone—regardless of their budget—can find clothing and footwear that makes them feel confident and comfortable.</p>
        </div>
      </div>
    </div>
  )
}

export default About
  