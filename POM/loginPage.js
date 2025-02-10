import {page,locator,expect} from '@playwright/test';
import { timeout } from '../playwright.config';

class loginPage
{
   
constructor(page)
{
    this.page= page;
    this.txt_email= this.page.locator("//input[@placeholder='Email']");
    this.txt_passWord= this.page.locator("//input[@placeholder='Password']");
    this.btn_login= this.page.locator("//span[text()='Login']");
    this.btn_mainMenu= this.page.locator("//img[@src='/static/media/iThreadLogo.f7a3395f.png']");
    this.lnk_productDevelopment= this.page.locator("//h6[text()='Product Development']");
    this.lnk_forecasting= this.page.locator("(//a[@data-bs-original-title='Forecasting'])[1]");
    this.btn_guide= this.page.locator("//a[text()='Guide']");
    this.txt_buyer= this.page.locator("(//input[@placeholder='Buyer'])[2]");
    this.lnk_qualityApp= this.page.locator("//h6[text()='Quality App']");
    this.lbl_qaMenu= this.page.locator("//span[text()='Menu']");
    this.lnk_cutAndSpread= this.page.locator("//a[text()='Cutting & Spreading']");
    this.lnk_transaction= this.page.locator("//span[text()='TRANSACTION']");
    this.btn_editcut= this.page.locator("(//div[@style='cursor: pointer;'])[6]");
    this.lnk_SAP= this.page.locator("//h6[text()='Scan and Pack']");
    this.mnu_PoPriority= this.page.locator('[data-testid="Mnu_PO Priority"]');
    this.mnu_colorSizeCode= this.page.locator('[data-testid="Mnu_Color Size Code"]');

}

async iThredLogin(email,password)
{
    await this.txt_email.fill(email);
    await this.txt_passWord.fill(password);
    await this.btn_login.click();
    await expect (await this.btn_mainMenu).toBeVisible({timeout:19000});
}
async navigateQualityApp()
{
  await this.btn_mainMenu.click();
  await this.lnk_qualityApp.click();
 
}
async navigateSAP()
{
    await this.btn_mainMenu.click();
    await this.lnk_SAP.click();
    expect (await this.mnu_PoPriority).toBeVisible({timeout:19000});
}
async mnuPoPriority()
{
    await this.mnu_PoPriority.waitFor({ state: 'visible', timeout: 30000 }).click();
}
async mnucolorSizeCode()
{
    await this.mnu_colorSizeCode.click();
}
}


module.exports= loginPage; 