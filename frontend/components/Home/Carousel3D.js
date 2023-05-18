import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { styled } from '@mui/system';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

const Carousel = loadable(() => import('react-spring-3d-carousel'));

const CustomImg = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.common.roseRed,
  borderRadius: '2rem',
}));

const CustomTyp = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '1.0rem',
  background: 'rgba(0, 0, 0, 0.4)',
}));

export default function Carousel3D({ slides }) {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === 2) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slide]);

  useEffect(() => {
    if (slides instanceof Array) {
      const _cards = [];

      slides.forEach((sl, i) => {
        const card = (
          <CustomImg
            elevation={10}
            sx={(theme) => ({
              margin: '0 5rem',
              width: '11rem',
              height: '14rem',
              [theme.breakpoints.up('sm')]: {
                width: '30rem',
                height: '30rem',
              },
              backgroundImage: `url(${sl.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            })}
          >
            <CardActionArea
              sx={(theme) => ({
                top: '50%',
                [theme.breakpoints.up('sm')]: {
                  top: '80%',
                },
              })}
              onClick={(e) => {
                router.push(`/product/${sl.slug}`);
              }}
            >
              <CardContent>
                <CustomTyp
                  align="center"
                  sx={{
                    borderRadius: '10% 10% 0% 0%',
                  }}
                >
                  {sl.name}
                </CustomTyp>

                <CustomTyp
                  align="center"
                  variant="h6"
                  sx={(theme) => ({
                    [theme.breakpoints.up('xs')]: {
                      fontSize: '1.2rem',
                    },
                    [theme.breakpoints.up('md')]: {
                      fontSize: '1.6rem',
                    },
                    borderRadius: '0% 0% 30% 30%',
                  })}
                >
                  ${sl.price}
                </CustomTyp>
              </CardContent>
            </CardActionArea>
          </CustomImg>
        );

        _cards.push({ key: i, content: card });
      });

      setCards([..._cards]);
    }
  }, [slides]);

  return <Carousel slides={cards} goToSlide={slide} />;
}
