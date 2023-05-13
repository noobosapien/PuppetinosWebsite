import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import height from '../../public/height.png';
import width from '../../public/width.png';
import difficulty from '../../public/difficulty.png';
import { Grid } from '@mui/material';
import Difficulty from './Difficulty';

export default function InfoTable({ product }) {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (product.additionalInfo instanceof Array) {
      setRows([...product.additionalInfo]);
    } else {
      setRows([]);
    }
  }, [product]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          <TableRow
            key="prod dificulty"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Grid container alignItems={'center'} spacing={3}>
                <Grid item>Dificulty</Grid>

                <Grid item>
                  <Image src={difficulty} width={30} height={30} />
                </Grid>
              </Grid>
            </TableCell>
            <TableCell align="right">
              <Difficulty diff={product.difficulty} />
            </TableCell>
          </TableRow>

          <TableRow
            key="prod width"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Grid container alignItems={'center'} spacing={3}>
                <Grid item>Width</Grid>

                <Grid item>
                  <Image src={width} width={30} height={30} />
                </Grid>
              </Grid>
            </TableCell>
            <TableCell align="right">{product.width} inches</TableCell>
          </TableRow>

          <TableRow
            key="prod height"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Grid container alignItems={'center'} spacing={3}>
                <Grid item>Height</Grid>

                <Grid item>
                  <Image src={height} width={30} height={30} />
                </Grid>
              </Grid>
            </TableCell>
            <TableCell align="right">{product.height} inches</TableCell>
          </TableRow>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
