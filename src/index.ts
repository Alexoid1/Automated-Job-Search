/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({path: '.env'})
import { startBrowser } from './startCloseBrowser';
import loginLinked from './linkedin/loginLinked';
import applyToJobs from "./applyToJobs";
import risetoTop from './rizeTop';

const gotToAndDo = async (rizeTop:boolean) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  let { page } = await startBrowser();
  page.setViewport({ width: 1000, height: 700 }); 
  await loginLinked(page, email, password);
  if(rizeTop){ 
  await risetoTop(page);
  }
  //await page.goto(url + search);
  await page.setViewport({ width: 500, height: 1000 });
  await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  await applyToJobs(page)

}




const rizeTop =true;

(async () => {
  await gotToAndDo(rizeTop);
})();