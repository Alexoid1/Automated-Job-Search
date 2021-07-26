const applyWWR = async (page:any) => {
    try{
        await page.click()
        const heading1 = await page.waitForSelector('a[target="_blank"]');
        await page.click('a[target="_blank"]')
        console.log(heading1)
        
    }catch (error){
        console.log(error)
    }
    
}

export default applyWWR