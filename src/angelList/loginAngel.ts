//import applyWWR from './applyWWR';



const loginAngel = async (page:any) => {
    try {
      await page.goto(urll);
      await page.waitForSelector("article ul .feature");
      const ar=await page.evaluate(()=>{
          const elements=document.querySelectorAll('article ul .feature a');
          const arr=[]
          let regx:any=/remote-jobs/
          for(let element of elements){
              
              const wor:string=element.toString()
              if(regx.test(wor)){
                arr.push(wor)
              }
              
          }
          return arr

      });
      console.log(ar)
      
    
    } catch (error) {
      console.log(error);
  
    }
  
  
}

const urll:string = "https://weworkremotely.com/";

export default loginAngel;