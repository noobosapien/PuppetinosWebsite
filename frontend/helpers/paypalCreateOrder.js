import axios from 'axios';

export async function paypalCreateOrder(details) {
  try {
    console.log(data);
    const { data } = await axios.post(
      //   `https://cms.puppetinos.com/orders/process`,
      `http://localhost:1337/orders/paypalProcess`,
      details
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}
