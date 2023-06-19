import {
  AppBar,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Controller, useForm } from 'react-hook-form';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SmallProductCard from '../../components/common/SmallProductCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Reviews from '../../components/Product/Reviews';
import InfoTable from '../../components/Product/InfoTable';
import { Store } from '../../utils/store';
import { getProductInfo } from '../../helpers/getProductInfo';
import Message from '../../components/common/Message';
import { setDebug } from '../../helpers/setDebug';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import ShippingnReturn from '../../components/Product/ShippingnReturn';
import Confidence from '../../components/Product/Confidence';
import CustomCarousel from '../../components/Product/CustomCarousel';

export default function ProductPage(props) {
  const { product } = props;

  const { state, dispatch } = useContext(Store);

  const [openMessage, setOpenMessage] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(1);

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [showRelated, setShowRelated] = useState(true);
  const [update, setUpdate] = useState(1);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const prodInfo = product instanceof Array && product.length ? product[0] : {};

  useEffect(() => {
    const updateReviews = async () => {
      try {
        const info = await getProductInfo(product[0]?.id);
        prodInfo.noofreviews =
          info instanceof Array && info[0].noofreviews
            ? info[0].noofreviews
            : 0;
        prodInfo.rating =
          info instanceof Array && info[0].rating ? info[0].rating : 0;
        setUpdate(update + 1);
      } catch (e) {
        console.log(e);
      }
    };
    updateReviews();
  }, []);

  const images = [];

  if (prodInfo.images instanceof Array) {
    prodInfo.images.forEach((image) => {
      const item = {
        original: image.url,
        thumbnail: image.url,
      };

      images.push(item);
    });
  }

  let video = null;

  if (prodInfo.video) {
    video = prodInfo.video;
  }

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/[e\+\-]/gi, '1');
    setAmount(value);
  };

  const handleAddAmount = (e) => {
    setAmount(Number(amount) + 1);
  };

  const handleDownAmount = (e) => {
    if (Number(amount) > 1) setAmount(Number(amount) - 1);
  };

  const handleAddToCart = async (e) => {
    if (amount === '') {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          ...product[0],
          img:
            product[0].images &&
            product[0].images[0] &&
            product[0].images[0].url,
          quantity: 1,
        },
      });
    } else {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          ...product[0],
          img:
            product[0].images &&
            product[0].images[0] &&
            product[0].images[0].url,
          quantity: amount,
        },
      });
    }

    await setDebug({ product: product[0] });

    setOpenMessage(true);
  };

  return (
    <Layout title={prodInfo.name} description={prodInfo.description}>
      <Grid container direction="column" spacing={4} sx={{ marginTop: '2rem' }}>
        <Grid item>
          <Message
            text={`Added ${prodInfo.name} to the bag!`}
            severity="success"
            open={openMessage}
            setOpen={setOpenMessage}
          />
        </Grid>

        <Grid item>
          {/* Product */}
          <Grid container justifyContent="space-evenly" spacing={8}>
            <Grid
              item
              sx={(theme) => ({
                minWidth: '600px',
                [theme.breakpoints.down('xl')]: { minWidth: '600px' },
                [theme.breakpoints.down('lg')]: { minWidth: '400px' },
                [theme.breakpoints.down('sm')]: { minWidth: '300px' },
              })}
            >
              {/* <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                thumbnailPosition={'left'}
              /> */}
              <CustomCarousel items={images} thumbnails={'left'} />
            </Grid>

            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={3}
                sx={{
                  marginBottom: video ? '35vh' : '0',
                  minWidth: '600px',
                  [theme.breakpoints.down('xl')]: { minWidth: '600px' },
                  [theme.breakpoints.down('lg')]: { minWidth: '400px' },
                  [theme.breakpoints.down('sm')]: { minWidth: '100vw' },
                }}
              >
                <Grid item alignSelf={'center'}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '2rem',
                    }}
                  >
                    {prodInfo.name}
                  </Typography>
                </Grid>

                <Grid
                  item
                  container
                  justifySelf={'center'}
                  alignSelf={'center'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={(theme) => ({
                        color: theme.palette.common.black,
                        fontSize: '2.0rem',
                        fontWeight: '400',
                      })}
                    >
                      ${prodInfo.price ? prodInfo.price.toFixed(2) : '0.00'}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography sx={{ fontSize: '1.4rem' }}>
                      <s>
                        $
                        {prodInfo.highPrice
                          ? prodInfo.highPrice.toFixed(2)
                          : '0.00'}
                      </s>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        border: '2px solid red',
                        borderRadius: '3px',
                        padding: '2px',
                        color: 'red',
                      }}
                    >
                      🔥-
                      {(
                        ((prodInfo.highPrice - prodInfo.price) /
                          prodInfo.highPrice) *
                        100
                      ).toFixed(0)}
                      % off
                    </Typography>
                  </Grid>
                </Grid>

                {matchesMD ? (
                  <>
                    <Grid item xs={10} sx={{ marginBottom: '25vh' }}>
                      {video ? (
                        <>
                          <Typography sx={{ marginBottom: '2rem' }}>
                            Video demo:
                          </Typography>
                          <Player fluid>
                            <source src={video.url} />
                          </Player>
                        </>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid
                      item
                      container
                      alignItems="center"
                      justifyContent={'center'}
                      spacing={3}
                    >
                      <Grid item xs={10}>
                        {video ? (
                          <>
                            <Typography>Video demo:</Typography>
                            <Player>
                              <source src={video.url} />
                            </Player>
                          </>
                        ) : (
                          <></>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          onClick={handleAddToCart}
                          startIcon={<LocalMallTwoToneIcon />}
                          variant="contained"
                          fullWidth
                          sx={(theme) => ({
                            borderRadius: '1.4rem',
                            background: theme.palette.common.lightGreen,
                            color: 'black',
                            '&:hover': {
                              color: 'white',
                            },
                            '&:focus': {
                              color: 'white',
                            },
                          })}
                        >
                          Add to bag
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}

                <Grid item>
                  <Typography
                    align="center"
                    paragraph
                    variant="body2"
                    sx={(theme) => ({
                      fontSize: '1rem',
                      color: theme.palette.common.lightGray,
                      maxWidth: '600px',
                      whiteSpace: 'pre-wrap',
                    })}
                  >
                    {prodInfo.description}
                  </Typography>
                </Grid>

                {prodInfo.description2 ? (
                  <Grid item>
                    <Typography
                      align="center"
                      paragraph
                      variant="body2"
                      sx={(theme) => ({
                        fontSize: '1.3rem',
                        color: theme.palette.common.lightGray,
                      })}
                    >
                      {prodInfo.description2}
                    </Typography>
                  </Grid>
                ) : (
                  <></>
                )}

                <Grid item>
                  {product instanceof Array ? (
                    <InfoTable product={product[0]} />
                  ) : (
                    <></>
                  )}
                </Grid>

                <Grid item sx={{ marginTop: '3rem' }}>
                  <ShippingnReturn />
                </Grid>

                <Grid item sx={{ marginTop: '3rem' }}>
                  <Confidence />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          // sx={{ marginTop: '2rem' }}
        >
          <Grid item>
            <Button
              sx={{ fontSize: '1.0rem', fontWeight: '200' }}
              endIcon={
                showRelated ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
              }
              onClick={(e) => {
                setShowRelated(!showRelated);
              }}
            >
              {showRelated ? 'Hide' : 'Show'} Related puppets
            </Button>
          </Grid>

          <Grid item>
            <Collapse in={showRelated}>
              <Grid container justifyContent="space-evenly" spacing={10}>
                {prodInfo.products instanceof Array &&
                  prodInfo.products.map((prod) => {
                    return (
                      <Grid item key={prod.id}>
                        <SmallProductCard product={prod} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Collapse>
          </Grid>
        </Grid>

        {/* <Grid item>
          <Reviews product={prodInfo} page={page} setPage={setPage} />
        </Grid> */}
      </Grid>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <AppBar
          position="fixed"
          color="secondary"
          sx={{ top: 'auto', bottom: 0 }}
        >
          <Toolbar>
            <Grid
              container
              spacing={2}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={10}>
                <Button
                  fullWidth
                  onClick={handleAddToCart}
                  variant="contained"
                  color="secondary"
                  sx={(theme) => ({
                    borderRadius: '1.4rem',
                    background: theme.palette.common.lightGreen,
                    color: 'black',
                    '&:hover': {
                      color: 'black',
                    },
                    '&:focus': {
                      color: 'black',
                    },
                  })}
                >
                  Add to bag
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + `products`);
    const products = await res.json();

    const names = [];
    products.forEach((prod) => {
      names.push('/product/' + prod.slug); //This has the first letter capital
    });

    return {
      paths: names,
      fallback: true,
    };
  } catch (e) {
    // console.log(e);

    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const { slug } = params;

    var param = slug.toLowerCase();

    const res = await fetch(process.env.STRAPI_BASE + `products?slug=${param}`);
    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (e) {
    console.log(e);
  }
}
