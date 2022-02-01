import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '0cdd2c39a7msh62fe99a09756de4p1b2ccbjsn22fa53714352'
    },
  });
    
  return data;
}