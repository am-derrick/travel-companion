import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

/* travel advisor API from rapid API https://rapidapi.com/apidojo/api/travel-advisor/
this snippet is a GET endpoint made to restaurants within defined boundaries (longitude & latitudes)
const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '1569af2c72msh6c4bba387745b7dp1dc46bjsn988caf13e89e'
  }
};
*/

/* Axios promise, comment out if needed
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/

// static coordinates replaced with dynamic ones
export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lng,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                },
              headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '1569af2c72msh6c4bba387745b7dp1dc46bjsn988caf13e89e'
              }
            });

        return data;
    } catch (error) {
        console.log(error);
    }
}