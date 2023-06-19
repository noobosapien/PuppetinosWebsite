import { Box, Card, CardMedia, Grid, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardBG from '../../public/cardbg.png';

function Thumbnail({ item }) {
  return (
    <>
      <Card variant="outlined">
        <CardMedia
          component="img"
          //   height="50"
          sx={{
            height: { xs: 50, md: 50, lg: 100 },
          }}
          image={item?.original}
          alt="Puppet"
        />
      </Card>
    </>
  );
}

function Thumbnails({ items, setActive }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setActive(newValue);
  };

  return (
    <>
      <Box
        sx={{
          height: { xs: 300, md: 400, lg: 600 },
          width: { xs: 70, md: 70, lg: 100 },
          bgcolor: 'background.paper',
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <Tabs
          centered
          orientation="vertical"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          allowScrollButtonsMobile={true}
        >
          {items.map((item) => (
            <Tab icon={<Thumbnail item={item} />}></Tab>
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default function CustomCarousel({ items, thumbnails }) {
  const [selected, setSelected] = useState({ original: '', thumbnail: '' });

  useEffect(() => {
    if (items instanceof Array && items.length > 1) {
      setSelected(items[0]);
    }
  }, [items]);

  const setActive = (index) => {
    setSelected(items[index]);
  };

  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        spacing={3}
      >
        {/* thumbnails */}
        <Grid item>
          <Grid container direction={'column'}>
            {items instanceof Array ? (
              <>
                <Thumbnails items={items} setActive={setActive} />
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>

        {/* main image */}
        <Grid item>
          <Card
            variant="outlined"
            sx={{
              borderImage: `url('${CardBG.src}') 30`,
              borderWidth: '0.5rem',
              borderStyle: 'solid',
              borderRadius: '0.5rem',
            }}
          >
            <CardMedia
              component="img"
              height="600"
              sx={{
                height: { xs: 250, md: 400, lg: 600 },
              }}
              image={selected.original}
              alt="Puppet"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
