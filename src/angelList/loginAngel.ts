import applyWWR from './applyWWR';

const loginAngel = async (page:any) => {
    try {
      await page.goto(urll);
      await page.waitForSelector("article ul .feature");
      const features=await page.$$('.feature');
      for(let i=0;i<2;i++){
          applyWWR(features[i],page)
      }
    
    } catch (error) {
      console.log(error);
  
    }
  
  
}

const urll:string = "https://weworkremotely.com/";

export default loginAngel;