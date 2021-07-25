const resumeChoose= async (page:any) => {
    try{
        await page.waitForSelector('[aria-label="Continue to next step"]');
        await page.click('[aria-label="Continue to next step"]');
    }catch (error){
        console.log(error)
    }
  
}

export default resumeChoose