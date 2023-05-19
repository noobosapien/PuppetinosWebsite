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
import React, { useState } from 'react';
import NewsLetterBG from '../../public/newsletterbg.png';
import { getNewsLetter } from '../../helpers/getNewsLetter';
import Message from '../common/Message';

export default function NewsLetterSection() {
  const [email, setEmail] = useState('');
  const [openMessage, setOpenMessage] = useState(false);

  const newsletter = async (e) => {
    const result = await getNewsLetter(email);
    setEmail('');

    if (result.message === 'success') {
      setOpenMessage(true);
    }
  };

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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              sx={{ color: 'white' }}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="outlined" fullWidth onClick={newsletter}>
            Join
          </Button>
        </Grid>

        <Grid item>
          <Message
            text={`Success!`}
            severity="success"
            open={openMessage}
            setOpen={setOpenMessage}
          />
        </Grid>
      </Grid>
    </div>
  );
}
