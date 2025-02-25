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
        <p>Welcome to Touchables, your ultimate destination for stylish, high-quality, and affordable fashion for men, women, and kids. At Touchables, we believe that fashion is not just about looking good—it’s about feeling confident, comfortable, and expressing your unique personality. Our mission is to bring you a carefully curated collection of clothing and footwear that reflects the latest trends while ensuring comfort and durability. Whether you're looking for casual everyday wear, elegant formal attire, sporty outfits, or trendy footwear to complete your look, Touchables has something for everyone.</p>
        <p>Our journey began with a simple vision—to make high-quality fashion accessible to everyone without the hefty price tag. We understand that fashion trends evolve constantly, and we strive to keep up with the latest styles, ensuring our customers always have fresh and trendy options to choose from. From stylish dresses, shirts, and ethnic wear to sneakers, loafers, and heels, we bring a wide range of options designed to cater to diverse tastes and preferences. Each product is carefully selected to meet our quality standards, offering a perfect blend of style, comfort, and affordability.</p>
        <p>At Touchables, customer satisfaction is at the heart of everything we do. We aim to make online shopping a seamless and enjoyable experience. Our user-friendly website is designed for easy navigation, allowing you to browse through our collections effortlessly. We also offer secure payment options, fast shipping, and a hassle-free return policy, ensuring a stress-free shopping experience. Whether you're revamping your wardrobe, shopping for a special occasion, or simply looking for stylish and comfortable everyday wear, Touchables is here to make fashion more convenient and affordable for you.</p>
        <p>We take pride in being more than just an e-commerce brand—we are a fashion community that values our customers. Your feedback and preferences shape our collections, and we are constantly working to improve and expand our offerings. Thank you for choosing Touchables as your go-to fashion destination. We look forward to being a part of your style journey and helping you embrace fashion that is not only trendy but also truly touchable!</p>
        </div>
      </div>
    </div>
  )
}

export default About
  