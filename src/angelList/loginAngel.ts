const loginAngel = async (page: any, email='tyrt') => {
    try {
      await page.goto(urll);
      await page.waitForSelector('#user_email');
      await page.type("#user_email",email);
    
    } catch (error) {
      console.log(error);
  
    }
  
  
}

const urll:string = "https://angel.co/login";

export default loginAngel;