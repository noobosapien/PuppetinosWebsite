import axios from 'axios';

export async function getNewsLetter(details) {
  try {
    const { data } = await axios.post(
      //   `https://cms.puppetinos.com/newsletters/add`,
      `http://localhost:1337/newsletters/add`,
      { email: details }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}
