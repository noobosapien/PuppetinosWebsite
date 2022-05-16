import {
  Box,
  Card,
  CardActions,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export default function Bundles() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [sort, setSort] = useState({
    method: 'name',
    asc: true,
  });

  const [category, setCategory] = useState('all');

  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    //   getBundles(sort, setBundles);
  }, [sort]);

  const handleStateChange = (method) => (e) => {
    if (sort.method !== method) {
      setSort({
        method,
        asc: true,
      });
    } else {
      setSort({ ...sort, asc: !sort.asc });
    }
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: '5rem',
      },
    },
  };

  return (
    <Layout title="Puppetinos" description={'Puppetinos'}>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        spacing={10}
        direction="column"
        sx={(theme) => ({
          marginTop: '0%',
        })}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: matchesMD ? '1.5rem' : '3rem',
              fontFamily: 'Monoton',
            }}
          >
            Bundles
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card variant="outlined">
            <CardActions>
              <Grid
                container
                direction="row"
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <FilterAltIcon color="primary" />
                </Grid>

                <Grid item>
                  <ToggleButtonGroup
                    color="primary"
                    value={sort.method}
                    exclusive
                  >
                    <ToggleButton
                      value="name"
                      onClick={handleStateChange('name')}
                    >
                      A-Z
                      {sort.method === 'name' ? (
                        sort.asc ? (
                          <ArrowCircleUpIcon />
                        ) : (
                          <ArrowCircleDownIcon />
                        )
                      ) : (
                        ''
                      )}
                    </ToggleButton>
                    <ToggleButton
                      value="price"
                      onClick={handleStateChange('price')}
                    >
                      Price
                      {sort.method === 'price' ? (
                        sort.asc ? (
                          <ArrowCircleUpIcon />
                        ) : (
                          <ArrowCircleDownIcon />
                        )
                      ) : (
                        ''
                      )}
                    </ToggleButton>
                    <ToggleButton
                      value="createdAt"
                      onClick={handleStateChange('createdAt')}
                    >
                      Latest
                      {sort.method === 'createdAt' ? (
                        sort.asc ? (
                          <ArrowCircleUpIcon />
                        ) : (
                          <ArrowCircleDownIcon />
                        )
                      ) : (
                        ''
                      )}
                    </ToggleButton>
                    <ToggleButton
                      value="reviews"
                      onClick={handleStateChange('reviews')}
                    >
                      Reviews
                      {sort.method === 'reviews' ? (
                        sort.asc ? (
                          <ArrowCircleUpIcon />
                        ) : (
                          <ArrowCircleDownIcon />
                        )
                      ) : (
                        ''
                      )}
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>

        <Grid item container justifyContent="space-evenly" alignItems="center">
          <Grid item>
            {/* Search bar */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Search for a bundle..."
                variant="standard"
              />
            </Box>
          </Grid>

          <Grid item>
            {/* Category selector */}
            <FormControl fullWidth sx={{ minWidth: '5rem' }}>
              <InputLabel id="select category">Category</InputLabel>
              <Select
                labelId="Select Category"
                id="select category"
                value={category}
                label="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                MenuProps={MenuProps}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'fable'}>Fable</MenuItem>
                <MenuItem value={'satire'}>Satire</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={10}>
          {/* bundle cards */}
        </Grid>
      </Grid>
    </Layout>
  );
}
