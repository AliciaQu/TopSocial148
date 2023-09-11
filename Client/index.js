
import "./index.css";

import { highline } from '@/js/database';

const middle = document.querySelector(".main-middle");
const middle-highline = middle.querySelector('.highline');
const middle-highline-description = middle-highline.querySelectorAll(".description");

const middle-highline-description-img = middle-highline.querySelectorAll(".description img");
const middle-highline-description-img = middle-highline.querySelectorAll(".description p");

middle-highline-description-package.forEach ((ele, i) => { 
  ele.textContent = highline.description[i];
})

