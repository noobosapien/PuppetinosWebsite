import axios from 'axios';

export async function getReviewsForProduct(id, page, sort) {
  try {
    var param = '';

    switch (sort) {
      case 'latest':
        param = 'updatedAt:DESC';
        break;
      case 'oldest':
        param = 'updatedAt:ASC';
        break;
      case 'highest':
        param = 'rating:DESC';
        break;
      case 'lowest':
        param = 'rating:ASC';
        break;

      default:
        param = 'updatedAt:DESC';
    }

    const { data } = await axios.get(
      `https://cms.puppetinos.com/reviews?product=${id}&_start=${
        (page - 1) * 3
      }&_limit=3&_sort=${param}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
