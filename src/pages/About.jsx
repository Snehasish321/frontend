import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

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
        <p className=''>Welcome to Touchables, your ultimate destination for stylish, high-quality, and affordable fashion for men, women, and kids. At Touchables, we believe that fashion is not just about looking good—it’s about feeling confident, comfortable, and expressing your unique personality. Our mission is to bring you a carefully curated collection of clothing and footwear that reflects the latest trends while ensuring comfort and durability. Whether you're looking for casual everyday wear, elegant formal attire, sporty outfits, or trendy footwear to complete your look, Touchables has something for everyone.</p>
        <p>Our journey began with a simple vision—to make high-quality fashion accessible to everyone without the hefty price tag. We understand that fashion trends evolve constantly, and we strive to keep up with the latest styles, ensuring our customers always have fresh and trendy options to choose from. From stylish dresses, shirts, and ethnic wear to sneakers, loafers, and heels, we bring a wide range of options designed to cater to diverse tastes and preferences. Each product is carefully selected to meet our quality standards, offering a perfect blend of style, comfort, and affordability.</p>
        <p>At Touchables, customer satisfaction is at the heart of everything we do. We aim to make online shopping a seamless and enjoyable experience. Our user-friendly website is designed for easy navigation, allowing you to browse through our collections effortlessly. We also offer secure payment options, fast shipping, and a hassle-free return policy, ensuring a stress-free shopping experience. Whether you're revamping your wardrobe, shopping for a special occasion, or simply looking for stylish and comfortable everyday wear, Touchables is here to make fashion more convenient and affordable for you.</p>
        <p>We take pride in being more than just an e-commerce brand—we are a fashion community that values our customers. Your feedback and preferences shape our collections, and we are constantly working to improve and expand our offerings. Thank you for choosing Touchables as your go-to fashion destination. We look forward to being a part of your style journey and helping you embrace fashion that is not only trendy but also truly touchable!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={"KOI HUMSE"} text2={"PYAR KYU KARE ?"} />
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-2xl'>QUALITY ASSURANCE:</b>
          <p className='text-gray-600'>At Touchables, quality is at the core of everything we offer. We believe that fashion should not only look great but also stand the test of time. That’s why we meticulously source high-quality fabrics, durable materials, and expert craftsmanship to ensure that every piece in our collection meets the highest standards. From clothing to footwear, each product undergoes a rigorous quality check before reaching our customers, ensuring durability, comfort, and a flawless finish. Our team carefully selects designs that are not only stylish but also crafted with precision, ensuring that they maintain their shape, color, and texture even after multiple wears and washes. We prioritize skin-friendly fabrics, strong stitching, and comfortable fits, making sure that our products feel as good as they look. With Touchables, you can shop with confidence, knowing that every item is crafted with care, designed for long-lasting wear, and guaranteed to deliver the perfect balance of style and reliability.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-2xl'>CONVENIENCE:</b>
          <p className='text-gray-600'>At Touchables, we believe that shopping should be effortless, enjoyable, and stress-free. That’s why we have designed our e-commerce platform to offer a seamless and convenient shopping experience from start to finish. With our user-friendly website, you can easily browse through a wide range of stylish clothing and footwear for men, women, and kids, all from the comfort of your home. Our intuitive search and filter options make finding the perfect outfit or pair of shoes quick and hassle-free. We also offer secure payment methods, multiple shipping options, and a hassle-free return and exchange policy, ensuring that you can shop with confidence. Whether you're looking for casual wear, formal attire, or trendy footwear, you can place your order in just a few clicks and have it delivered straight to your doorstep. Plus, our dedicated customer support team is always ready to assist you with any queries or concerns. At Touchables, we make fashion shopping simple, efficient, and enjoyable—because you deserve the best without any inconvenience!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-2xl'>EXCEPTIONAL CUSTOMER SUPPORT:</b>
          <p className='text-gray-600'>At Touchables, we believe that great fashion should be complemented by great service. That’s why we are committed to providing exceptional customer support to ensure a smooth and hassle-free shopping experience for every customer. Our dedicated support team is always ready to assist you with any queries, whether it's about product details, order tracking, returns, or payment issues. We understand that online shopping should be convenient and stress-free, which is why we offer quick response times, easy return policies, and a seamless refund process. You can reach out to us via email, chat, or phone, and we’ll make sure to resolve your concerns as efficiently as possible. Your satisfaction is our top priority, and we continuously strive to improve our services based on your feedback. At Touchables, we’re not just here to sell fashion—we’re here to build trust and long-lasting relationships with our customers, ensuring you always have a positive and enjoyable shopping experience.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
  