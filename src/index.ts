/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({path: '.env'})
import { startBrowser } from './startCloseBrowser';
import login from './login';
import jobSearch from "./jobSearch";
import applyToJobs from "./applyToJobs";
import risetoTop from './rizeTop';

const gotToAndDo = async (url: string,search:string,rizeTop:boolean,searchLocation:string) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  let { page } = await startBrowser();
  page.setViewport({ width: 1000, height: 800 });
  await page.goto(url);
  await login(page, email, password);
  await page.goto(url2);
  await jobSearch(page, search, searchLocation);
  
  if(rizeTop){ 
  await risetoTop(page);
  }
  await page.goto(url + search);
  await page.setViewport({ width: 500, height: 1000 });
  await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  await applyToJobs(page)

}

const url:string = "https://www.linkedin.com/login/";
const url2:string ="https://www.linkedin.com/jobs/";
const searchJob = 'React';
const searchLocation = 'Remote';
const rizeTop =true;

(async () => {
  await gotToAndDo(url,searchJob,rizeTop, searchLocation);
})();