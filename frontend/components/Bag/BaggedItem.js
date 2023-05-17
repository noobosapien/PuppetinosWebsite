// import {
//   Button,
//   Card,
//   CardActionArea,
//   CardMedia,
//   Grid,
//   IconButton,
//   Typography,
// } from '@mui/material';
// import React from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

// export default function BaggedItem({ item, removeItemHandler }) {
//   const theme = useTheme();
//   const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Card variant="outlined" sx={{ width: matchesSM ? '18rem' : '30rem' }}>
//       <Grid container direction="column" spacing={2}>
//         <Grid item container justifyContent="space-between">
//           <Grid item>
//             {/* <CardActionArea> */}
//             <Grid container spacing={2}>
//               <Grid item>
//                 <CardMedia
//                   component="img"
//                   height="138rem"
//                   image={item.img}
//                   alt={item.name}
//                 />
//               </Grid>

//               <Grid item alignSelf="center">
//                 <Grid container direction="column" alignItems="center">
//                   <Grid item>
//                     <Typography variant="body2">{item.name}</Typography>
//                   </Grid>

//                   <Grid item>
//                     <Typography>Each: {item.price.toFixed(2)}</Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//             {/* </CardActionArea> */}
//           </Grid>

//           <Grid item>
//             <IconButton onClick={removeItemHandler}>
//               <CloseIcon />
//             </IconButton>
//           </Grid>
//         </Grid>

//         <Grid item container justifyContent="space-between" alignItems="center">
//           <Grid item>
//             <Typography variant="body2">Quantity: {item.quantity}</Typography>
//           </Grid>

//           <Grid item>
//             <Typography variant="body2" sx={{ fontSize: '2rem' }}>
//               $ {(item.price * item.quantity).toFixed(2)}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Card>
//   );
// }

import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CardBG from '../../public/cardbg.png';

export default function BaggedItem({ item, removeItemHandler }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  console.log(item);

  return (
    <Card
      variant="outlined"
      sx={{
        width: matchesSM ? '18rem' : '30rem',
        borderImage: `url('${CardBG.src}') 30`,
        borderWidth: '0.5rem',
        borderStyle: 'solid',
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item alignSelf="flex-end">
          <IconButton onClick={removeItemHandler}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item container justifyContent="space-between">
          <Grid item>
            {/* <CardActionArea> */}
            <Grid container spacing={2}>
              <Grid item>
                <Badge
                  color="primary"
                  badgeContent={item.quantity}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="138rem"
                    image={item.img}
                    alt={item.name}
                  />
                </Badge>
              </Grid>

              <Grid item alignSelf="center">
                <Grid item>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    {item.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={4}
        >
          <Grid item>
            <Typography sx={{ fontSize: '1.2rem' }}>
              <s>${item.highPrice ? item.highPrice.toFixed(2) : '0.00'}</s>
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" sx={{ fontSize: '2rem' }}>
              $ {(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
