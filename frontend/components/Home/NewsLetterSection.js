import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import NewsLetterBG from '../../public/newsletterbg.png';

export default function NewsLetterSection() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '60vh',
        top: '40vh',
        paddingBottom: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          // background: `rgba(0, 255, 255, 0.8)`,
          background: `url(${NewsLetterBG.src}) rgba(0, 255, 240, 0.1)`,
          backgroundBlendMode: 'multiply',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          // filter: 'blur(8px)',
          //   top: '30vh',
          //   opacity: '0.3',
          zIndex: -2,
          //   clipPath: 'polygon(0 24%, 100% 0%, 100% 78%, 0% 100%)',
        }}
      ></div>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="50%"
        spacing={2}
      >
        <Grid item>
          <Typography sx={{ color: 'black' }}>
            Join our newsletter for updates!
          </Typography>
        </Grid>
        <Grid item container justifyContent={'center'} alignItems={'center'}>
          <Grid item md={4} xs={10}>
            <TextField
              size="small"
              // variant="filled"
              placeholder="Email address"
              fullWidth
              type="email"
              sx={{ color: 'white' }}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="outlined" fullWidth>
            Join
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
