const applyWWR = async (url:string, page:any) => {
    try{
        await page.goto(url);
        await page.waitForSelector("form");
        const formnumber=await page.evaluate(()=>{
            const forms=Array.from(document.querySelectorAll('form'));
            return forms.length
        })
        console.log(formnumber);
        
    }catch (error){
        console.log(error);
    }
    
}

export default applyWWR