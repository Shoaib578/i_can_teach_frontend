import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

import { message } from 'antd';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
      
    event.preventDefault();

    if (!stripe || !elements) {
   
      return;
    }
    elements.submit()
    const result = await stripe.confirmPayment({
     
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret:props.client_secret,
      confirmParams: {
          return_url:`http://localhost:3000/bought_membership/${props.membership_id}`,
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)

      message.error(result.error.message)
      console.log('error message: ',result.error.message);
    } else {
      console.log("Hello tehre")
    }
  };
 
  return (
    <center>

    <form style={{width:'50%',padding:20,borderColor:'green',backgroundColor:'green',borderRadius:10,marginTop:50}} onSubmit={handleSubmit}>
      <PaymentElement />
      <br />
    <br />
      <button style={{borderColor:'#90EE90',backgroundColor:'#90EE90',padding:10,borderRadius:10,color:'white',width:100,float:'left',}}>Pay</button>
      <br />
    <br />
    <br />
    </form>
    

    </center>

  );
};

export default CheckoutForm;