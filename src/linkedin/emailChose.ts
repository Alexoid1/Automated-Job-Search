const emailChose = async (page:any) => {
    try{
        await page.waitForSelector('.fb-dropdown__select');
        await page.click('.fb-dropdown__select');
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Enter");
    }catch (error){
        console.log(error)
    }
  
}

export default emailChose 