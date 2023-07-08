import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './checkout_form';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { create_payment_intent } from '../../call_apis';


const stripePromise = loadStripe('pk_test_51Li9vSLrpfnp4zWJSER4O48PXEo5KbbN0a9Re1pAtbUnwkq0Z326X4lR3vx0iH0Edy064XgMNS29nyKAqcYIwWNj00mO5ifGxz');

export default function BuyMemberShip() {
  const params = useLocation()
 
  const [client_secret,setClientSecret] = useState("")

  const price = params.state.price
  const membership_id = params.state.membership_id



  const get_client_secret = async()=>{
  await create_payment_intent(price)
  .then(res=>{
    setClientSecret(res.data.client_secret)
  })
  }


  useEffect(()=>{
    

    get_client_secret(100)
  },[])
  if(client_secret){

  return (
    <Elements stripe={stripePromise}  options={ {
      mode: 'payment',
      currency: 'usd',
      amount:price*100,
     
      automatic_payment_methods: {
          enabled: true,
      }          
     
    }}>
      <CheckoutForm client_secret={client_secret} membership_id={membership_id}/>
    </Elements>
  );
}else{
  return null;
}

};