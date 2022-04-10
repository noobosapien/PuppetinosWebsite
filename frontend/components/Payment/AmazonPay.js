import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatFilledTwoToneIcon from '@mui/icons-material/DirectionsBoatFilledTwoTone';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Store } from '../../utils/store';
import { useRouter } from 'next/router';
import BillingAddress from './BillingAddress';
import Message from '../common/Message';
import { placeOrder } from '../../helpers/placeOrder';

export default function AmazonPay() {
  const { state, dispatch } = useContext(Store);
  const [clientSecret, setClientSecret] = useState(null);
  const [cardValid, setCardValid] = useState(false);
  const [diff, setDiff] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [countryValid, setCountryValid] = useState(true);

  const router = useRouter();

  function reducer(state, action) {
    switch (action.type) {
      case 'FIRSTNAME_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            firstName: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          firstName: { error: false, value: action.payload, valid },
        };
      }

      case 'LASTNAME_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            lastName: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          lastName: { error: false, value: action.payload, valid },
        };
      }

      case 'ADDRESS_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            address: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          address: { error: false, value: action.payload, valid },
        };
      }

      case 'APARTMENT_CHANGE': {
        // const valid = action.payload !== '';
        const valid = true;

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            apartment: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          apartment: { error: false, value: action.payload, valid },
        };
      }

      case 'REGION_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            region: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          region: { error: false, value: action.payload, valid },
        };
      }

      case 'CITY_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            city: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          city: { error: false, value: action.payload, valid },
        };
      }

      case 'ZIPCODE_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            zipCode: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          zipCode: { error: false, value: action.payload, valid },
        };
      }

      case 'PHONE_CHANGE': {
        const valid = action.payload !== '';

        dispatch({
          type: 'SAVE_BILLING_ADDRESS',
          payload: {
            ...state,
            phone: { error: false, value: action.payload, valid },
          },
        });

        return {
          ...state,
          phone: { error: false, value: action.payload, valid },
        };
      }

      case 'FIRSTNAME_INVALID': {
        return {
          ...state,
          firstName: { ...state.firstName, error: true },
        };
      }

      case 'LASTNAME_INVALID': {
        return {
          ...state,
          lastName: { ...state.lastName, error: true },
        };
      }

      case 'ADDRESS_INVALID': {
        return {
          ...state,
          address: { ...state.address, error: true },
        };
      }

      case 'APARTMENT_INVALID': {
        return {
          ...state,
          apartment: { ...state.apartment, error: true },
        };
      }

      case 'REGION_INVALID': {
        return {
          ...state,
          region: { ...state.region, error: true },
        };
      }

      case 'CITY_INVALID': {
        return {
          ...state,
          city: { ...state.city, error: true },
        };
      }

      case 'ZIPCODE_INVALID': {
        return {
          ...state,
          zipCode: { ...state.zipCode, error: true },
        };
      }

      case 'PHONE_INVALID': {
        return {
          ...state,
          phone: { ...state.phone, error: true },
        };
      }

      default:
        return state;
    }
  }

  const [stateInfo, dispatchInfo] = useReducer(reducer, {
    firstName: state.cart.billingAddress
      ? state.cart.billingAddress.firstName
      : '',
    lastName: state.cart.billingAddress
      ? state.cart.billingAddress.lastName
      : '',
    address: state.cart.billingAddress ? state.cart.billingAddress.address : '',
    apartment: state.cart.billingAddress
      ? state.cart.billingAddress.apartment
      : '',
    city: state.cart.billingAddress ? state.cart.billingAddress.city : '',
    region: state.cart.billingAddress ? state.cart.billingAddress.region : '',
    zipCode: state.cart.billingAddress ? state.cart.billingAddress.zipCode : '',
    phone: state.cart.billingAddress ? state.cart.billingAddress.phone : '',
  });

  const {
    cart: {
      cartItems,
      shippingAddress,
      shippingCountry,
      billingAddress,
      billingCountry,
      shippingMethod,
    },
  } = state;

  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');

  useEffect(() => {
    console.log();
  }, []);

  const handlePay = async (e) => {
    try {
      const total = (
        cartItems.reduce((a, c) => a + c.quantity * c.price, 0) +
        (shippingMethod.value === 'standard' ? 5 : 20)
      ).toFixed(2);

      const subtotal = cartItems
        .reduce((a, c) => a + c.quantity * c.price, 0)
        .toFixed(2);

      const order = await placeOrder({
        items: cartItems,
        total,
        subtotal,
        country: 'US',
        billingCountry: 'US',
        shippingOption: {
          label: state.cart.shippingMethod && state.cart.shippingMethod.value,
          price:
            state.cart.shippingMethod &&
            state.cart.shippingMethod.value === 'express'
              ? 20
              : 5,
        },
        shippingAddress,
        billingAddress: diff ? billingAddress : shippingAddress,
        orderId: Math.floor(Math.random() * 3) * Math.floor(Math.random() * 2),
      });

      if (order && order.message === 'success') {
        dispatch({ type: 'CART_CLEAR' });

        router.push(`/order/${order.link}?auth=${order.auth}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Card variant="outlined" sx={{}}>
        <Message
          text={message}
          severity={severity}
          open={openMessage}
          setOpen={setOpenMessage}
        />
        <CardContent>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Email"
                secondary={`${
                  state.cart.shippingAddress
                    ? state.cart.shippingAddress.email.value
                    : ''
                }`}
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Delivery address"
                secondary={`${
                  state.cart.shippingAddress
                    ? `${state.cart.shippingAddress.address.value}, 
                              ${state.cart.shippingAddress.apartment.value}, 
                              ${state.cart.shippingAddress.city.value},
                              ${state.cart.shippingAddress.region.value},
                              ${state.cart.shippingCountry.value}`
                    : ''
                }`}
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsBoatFilledTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Shipping method"
                secondary={`${
                  state.cart.shippingMethod &&
                  state.cart.shippingMethod.value === 'express'
                    ? `Express shipping ($20.00)`
                    : `Standard shipping ($5.00)`
                }`}
              />
            </ListItem>
          </List>
        </CardContent>

        <Divider />

        <CardHeader
          title="Billing Address"
          sx={(theme) => ({
            '& 	.MuiCardHeader-title': {
              fontFamily: 'Roboto',
              fontSize: '1rem',
              color: theme.palette.common.greenBlue,
            },
          })}
        />

        <CardContent>
          <BillingAddress
            diff={diff}
            setDiff={setDiff}
            stateInfo={stateInfo}
            dispatchInfo={dispatchInfo}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            countryValid={countryValid}
            setCountryValid={setCountryValid}
          />
        </CardContent>

        <Divider />

        <CardHeader
          title="Payment method"
          sx={(theme) => ({
            '& 	.MuiCardHeader-title': {
              fontFamily: 'Roboto',
              fontSize: '1rem',
              color: theme.palette.common.greenBlue,
            },
          })}
        />

        <CardContent>
          <Grid container direction="column" spacing={4}>
            <Grid item>{/* pay goes here  */}</Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
