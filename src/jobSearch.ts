const jobSearch = async (page: any,job:string, location:string) => {
    try {
      await page.waitForSelector('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input');
      await page.type('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input',job);
      await page.waitForSelector('[aria-label="City, state, or zip code"]');
      await page.type('[aria-label="City, state, or zip code"]',location);
      await page.keyboard.press("Enter");
    } catch (error) {
      console.log(error);
    }
  
  
  }
  
export default jobSearch;
