const {chromium,expect}=require('@playwright/test');
import {readExcelData} from "../utils/excelReader";
const LoginPage = require('../POM/loginPage');
const config= require('../config.json')

module.exports = async()=>{
    const browser= await chromium.launch({headless:false,args:['--incognito','--no-sandbox'],});
    const context = await browser.newContext();
    const page= await context.newPage();
    const loginPage =new LoginPage(page);
    const environment = 'staging';
    const envConfig = config[environment];
    const url= String(envConfig.baseUrl);
    //const urk2= await(readExcelData(2,2));
    const email= String(envConfig.username);
    const password= String(envConfig.password);
    await page.goto(url);
    await loginPage.iThredLogin(email,password); 
    await loginPage.navigateSAP();
    await page.waitForLoadState('networkidle',{timeout:19000})
    await page.context().storageState({path:"user.json"});
    await browser.close();

};

