import { FETCH_HOME_SUCCESS, FETCH_HOME_FAIL} from "./type";
import axios from "axios";


const ROOT_URL = 'https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy'

export const fetchHome = (placename,onSuccess) => async dispatch => {
  const url = `${ROOT_URL}&place_name=${placename}`
  console.log(url)  
  try {
    const results = await axios.get(url);
    const data = results.data.response.listings;
    // console.log(data)
    dispatch({ type: FETCH_HOME_SUCCESS, payload: data });
    onSuccess()
  } catch (e) {
    dispatch({ type: FETCH_HOME_FAIL })
    console.log('error here')
  }
};
