require('dotenv').config({path: '.env'})
import jobSearch from './jobSearch';
import loginAngel from '../angelList/loginAngel'

const login = async (page: any, email = "hello", password = "world") => {
  try {
    await page.goto(url);
    await page.waitForSelector('#username');
    await page.type("#username",email);
    await page.waitForSelector("#password");
    await page.type("#password", password);
    await page.waitForSelector('.btn__primary--large.from__button--floating');
    await page.click('.btn__primary--large.from__button--floating');
    await page.goto(url2);
    await page.waitForSelector('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input');
    await jobSearch(page, searchJob, searchLocation);
  } catch {
    
    loginAngel(page)

  }


}
const searchJob:string = 'react';
const searchLocation:string = 'Remote';
const url:string = "https://www.linkedin.com/login/";
const url2:string ="https://www.linkedin.com/jobs/";
export default login;