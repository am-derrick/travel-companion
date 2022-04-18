import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Menu} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

function List() {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Must-be Place'},
    { name: 'Best Nyama Choma'},
    { name: 'Best Pork'},
    { name: 'Must-be Place'},
    { name: 'Best Nyama Choma'},
    { name: 'Best Pork'},
    { name: 'Must-be Place'},
    { name: 'Best Nyama Choma'},
    { name: 'Best Pork'},
];

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels and Sites near you</Typography>
      <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}> {/*default is type or restaurants which changes on click, refer to useState method */}
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="sites">Sites</MenuItem>
          </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}> {/*on click changes the rating */}
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={2}>Above 2</MenuItem>
              <MenuItem value={3}>Above 3</MenuItem>
              <MenuItem value={4}>Above 4</MenuItem>
          </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default List;