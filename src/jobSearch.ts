//import nextJobCard  from './nextJobCard';
import emailChose from './emailChose';
import resumeChoose from './resumeChoose';
import questionPage from './questionPage';


const jobSearch = async (page: any,job:string, location:string) => {
    
    try {
      await page.waitForSelector('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input');
      await page.type('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input',job);
      await page.waitForSelector('[aria-label="City, state, or zip code"]');
      await page.type('[aria-label="City, state, or zip code"]',location);
      await page.keyboard.press("Enter");
      await page.waitForSelector('.jobs-search-results-list__header');
      
      try{
        await page.waitForSelector('[data-control-name="jobdetails_topcard_inapply"]');
        await page.click('[data-control-name="jobdetails_topcard_inapply"]');
      }catch{
        await page.waitForSelector('[data-control-name="shareProfileThenExternalApplyControl"]');
        await page.click('[data-control-name="shareProfileThenExternalApplyControl"]');
      }
      //finally{
        //const jobCards=await page.$$('.jobs-search-results.display-flex.flex-column button')
        //console.log(jobCards)
      
        //nextJobCard(jobCards, 1);
        
      //}
      
     try{
      emailChose(page)
     }catch{
      resumeChoose(page)
     }
      emailChose(page)
      try{
        resumeChoose(page)
        await page.click('[data-control-name="continue_unify"]');
        questionPage(page);
        //await page.waitForSelector('[aria-label="Review your application"]');
        //await page.click('[aria-label="Review your application"]');
        //await page.waitForSelector('[aria-label="Submit application"]');
        //await page.click('[aria-label="Submit application"]');
      }catch(error){
        //await page.click('[aria-label="Dismiss"]');
        //await page.click('[data-control-name="discard_application_confirm_btn"]')
        console.log(error);
      }
      
      
   
    } catch (error) {
      console.log(error);
      
    }
  
  
  }
  
export default jobSearch;
