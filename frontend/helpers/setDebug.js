import axios from 'axios';

export async function setDebug(info) {
  try {
    console.log('here');
    const { data } = await axios.post(`https://cms.puppetinos.com/debugs`, {
      data: {
        info,
      },
    });

    return data;
  } catch (e) {}
}
