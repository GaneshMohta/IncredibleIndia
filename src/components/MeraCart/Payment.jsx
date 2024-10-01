import React, { useState } from 'react';
import axios from 'axios';

export default function Payment(props) {
  console.log(props);
  const [orderDetails, setOrderDetails] = useState({
    orderId: '',
    orderAmount: '',
    currency: 'INR',
  });

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };


  const handleCreateOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3000/pay/create-order', { amount: props.Amount  });
      setOrderDetails({
        orderId: response.data.id,
        orderAmount: response.data.amount,
        currency: response.data.currency,
      });
      handlePayment(response.data);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const handlePayment = async (orderData) => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    const options = {
      key: "rzp_test_NUXd7hr82kbcfF",
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'Make-In-Bharat Gateway',
      description: 'Pay for Best',
      order_id: orderData.id,
      handler: async function (response) {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);

        // Verify the payment on the backend
        const verifyResponse = await axios.post('http://localhost:3000/pay/verify-payment', {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        if (verifyResponse.data.message === 'Payment verified successfully') {
          alert(`Payment successful!!!`);
        } else {
          alert('Payment verification failed');
        }
      },
      prefill: {
        name: 'Ganesh',
        email: 'ganimaheshwari07@example.com',
        contact: '6374620670',
      },
      theme: {
        color: '#f39454f9',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <button onClick={handleCreateOrder} className='button1'>
        Make Payment
      </button>
    </>
  );
}
