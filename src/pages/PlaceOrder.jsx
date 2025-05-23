import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { currency } from '../../../admin/src/App';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate , backendUrl , token , cartItems , setCartItems , getCartAmount , delivery_fee , products } = useContext(ShopContext);  // Use useNavigate for navigation
  const [formData , setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    postOffice: '',
    city: '',
    pinCode: '',
    state: '',
    phoneNo: '',
    altPhoneNo: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data,[name]: value}))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response) => {
        console.log(response);
    }
  }
  const rzp = new window.Razorpay(options);
  rzp.open();
}

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    try {
      let orderItems = []
      for(const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0 ) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {
         // API call for COD
         case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place',orderData, { headers: {token} })
          console.log(response.data.success);
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
         break;

         case 'stripe' :
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe' , orderData , { headers: {token} })
          if (responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }
         break;

         case 'razorpay':
          const responseRazorpay = await axios.post( backendUrl + '/api/order/razorpay' , orderData , { headers: {token} })
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
            
          }
         break;
         default:
          break;
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-1 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[500px]'>
        <div className='text-xl sm:text-3xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" value={formData.firstName} placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" value={formData.lastName} placeholder='Last name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='postOffice' value={formData.postOffice} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Post office' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='pinCode' value={formData.pinCode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" inputMode="numeric" pattern="[0-9]*" placeholder='PIN Code' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <input required onChange={onChangeHandler} name='phoneNo' value={formData.phoneNo} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" inputMode="numeric" pattern="[0-9]*" placeholder='Phone no.' />
        <input onChange={onChangeHandler} name='altPhoneNo' value={formData.altPhoneNo} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" inputMode="numeric" pattern="[0-9]*" placeholder='Alternative Phone no.' />
      </div>

      {/* Right Side */}
      <div className='mt-1'>
        <div className='mt-8 text-xl min-w-80'>
          <CartTotal />
        </div>
        <div className='text-xl mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            {/* Razorpay */}
            <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'razorpay' ? 'border-black' : ''}`}>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            {/* Stripe */}
            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'stripe' ? 'border-black' : ''}`}>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* Cash on Delivery */}
            <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'border-black' : ''}`}>
              <p className='text-gray-800 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8 '>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
