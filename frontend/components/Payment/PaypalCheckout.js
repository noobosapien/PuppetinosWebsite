import { PayPalButtons, FUNDING } from '@paypal/react-paypal-js';
import React from 'react';

export default function PaypalCheckout(
  cartItems,
  shippingMethod,
  shippingAddress,
  total
) {
  console.log(shippingMethod);
  return (
    <>
      <PayPalButtons
        // createOrder={createOrder}
        createOrder={async (data, actions) => {
          const response = await fetch(
            'http://localhost:1337/orders/paypalProcess',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                items: cartItems,
                total,
                shippingOption: {
                  label: shippingMethod && shippingMethod.value,
                  price: 0,

                  // price:
                  //   state.cart.shippingMethod &&
                  //   state.cart.shippingMethod.value === 'express'
                  //     ? 20
                  //     : 5,
                },
                shippingAddress,
              }),
            }
          );
          const details = await response.json();
          return details.id;
        }}
        // onApprove={onApprove}
        // onError={onError}
        style={{ layout: 'horizontal' }}
        fundingSource={FUNDING.PAYPAL}
      ></PayPalButtons>
    </>
  );
}
