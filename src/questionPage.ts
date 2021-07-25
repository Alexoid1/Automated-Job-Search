const questionPage= async (page:any) => {
    try{
        await page.waitForSelector('[type="text"]');
        const questions=await page.$$('[type="text"]')
        for(let i=0;i<questions.length;i++){
          
            await questions[i].click();
            await page.keyboard.press('Backspace');
            await questions[i].type('1');
            
        }
        
        
    }catch (error){
        console.log(error)
    }
  
}

export default questionPage