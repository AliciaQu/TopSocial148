// third party imports

import axios from 'axios';

//file imports
import { getPath } from './utiles';

async function getHighline() {
  const path = getPath("highline");
    const response = await getInfo(path);
    console.log(response);
  return response.data;
}

async function getInfo(path) {
  
  try {
    return await axios.get(path);
    
  } catch (error) {
    console.error(error);
  }
}

export const highline = await getHighline();

