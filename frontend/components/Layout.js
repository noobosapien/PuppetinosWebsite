import React, { useContext, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Tooltip,
  Link,
  Badge,
  Divider,
} from '@mui/material';
import Logo from '../public/Logo1.png';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchDialog from './common/SearchDialog';
import { useRouter } from 'next/router';
import { Store } from '../utils/store';
import Sticker from '../public/sticker.png';
import ContactForm from './common/ContactForm';

const LogoButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '2rem !important',
  },
  [theme.breakpoints.up('sm')]: {
    width: '4rem !important',
  },
  [theme.breakpoints.up('md')]: {
    width: '6rem !important',
  },
  [theme.breakpoints.up('lg')]: {
    width: '8rem !important',
  },

  '&:hover': {
    backgroundColor: '#ffffff00',
  },

  top: '0rem',
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  top: '1rem',
}));

const CustomLogo = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {},
  // width: '200px',
  // height: `${174}px`,
}));

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const { cart } = state;
  const [openShipping, setOpenShipping] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);

  const openSearchHandler = (e) => {
    setOpenSearch(true);
  };

  return (
    <>
      <Head>
        <title>{title ? `${title}` : 'Puppetinos'}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <SearchDialog openSearch={openSearch} setOpenSearch={setOpenSearch} />

      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar disableGutters>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            direction="row"
          >
            <Grid item>
              <NextLink href="/" passHref>
                <LogoButton disableRipple component={Link}>
                  <Grid container alignItems="center" direction="column">
                    <Grid item>
                      <CustomLogo src={Logo} alt="Logo" />
                    </Grid>

                    <Grid item>
                      <Typography>Puppetinos</Typography>
                    </Grid>
                  </Grid>
                </LogoButton>
              </NextLink>
            </Grid>

            <Grid item>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Search">
                  <NavButton onClick={openSearchHandler} size="large">
                    <SearchIcon
                      sx={(theme) => ({
                        [theme.breakpoints.up('lg')]: {
                          fontSize: '3.0rem',
                        },
                        [theme.breakpoints.down('lg')]: {
                          fontSize: '2.5rem',
                        },
                      })}
                    />
                  </NavButton>
                </Tooltip>

                <Tooltip title="Bag">
                  <NavButton onClick={(e) => router.push('/bag')}>
                    {cart.cartItems.length ? (
                      <Badge
                        color="primary"
                        badgeContent={cart.cartItems.length}
                        showZero
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        overlap="circular"
                      >
                        <ShoppingBagIcon
                          sx={(theme) => ({
                            [theme.breakpoints.up('lg')]: {
                              fontSize: '3.0rem',
                            },
                            [theme.breakpoints.down('lg')]: {
                              fontSize: '2.5rem',
                            },
                          })}
                        />
                      </Badge>
                    ) : (
                      <ShoppingBagIcon
                        sx={(theme) => ({
                          [theme.breakpoints.up('lg')]: {
                            fontSize: '3.0rem',
                          },
                          [theme.breakpoints.down('lg')]: {
                            fontSize: '2.5rem',
                          },
                        })}
                      />
                    )}
                  </NavButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <TopMenu /> */}

      {children}

      <footer
        style={{
          backgroundColor: '#fff',
          marginTop: '15%',
          // paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <Divider sx={{ marginBottom: '1rem' }} />

        <Grid container alignItems="center">
          <Grid
            item
            container
            alignItems="center"
            direction="column"
            md={3}
            spacing={4}
          >
            <Grid item>
              <Image src={Sticker} alt="sticker" width={50} height={50} />
            </Grid>

            <Grid item>
              <Typography variant="body2">We accept:</Typography>
            </Grid>

            <Grid item container justifyContent="space-evenly"></Grid>

            <Grid item></Grid>
          </Grid>

          <Grid item container alignItems="center" direction="column" md={4}>
            <ContactForm />
          </Grid>

          <Grid item container direction="column" alignItems="center" md={4}>
            <Grid item>
              <NextLink href="/privacy">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Privacy
                </Typography>
              </NextLink>
            </Grid>

            <Grid item>
              <NextLink href="/terms">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Terms & Conditions
                </Typography>
              </NextLink>
            </Grid>

            <Grid item>
              <NextLink href="/refunds">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Returns & Refunds
                </Typography>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
