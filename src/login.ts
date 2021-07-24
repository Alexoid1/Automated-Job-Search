const login = async (page: any, email = "hello", password = "world") => {
  try {
    await page.waitForSelector('#username');
    await page.type("#username",email);
    await page.waitForSelector("#password");
    await page.type("#password", password);
    await page.waitForSelector('.btn__primary--large.from__button--floating');
    await page.click('.btn__primary--large.from__button--floating');
  } catch (error) {
    console.log(error);
  }


}

export default login;