const applyWWR = async (fe:any,page:any) => {
    try{
        await fe.click()
        await page.waitForSelector("article ul .feature");
        
    }catch (error){
        console.log(error)
    }
    
}

export default applyWWR