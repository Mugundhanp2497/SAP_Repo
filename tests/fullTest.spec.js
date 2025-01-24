import {test, expect} from '@playwright/test';
const LoginPage = require('../POM/loginPage');
const poPriorityPage= require('../POM/PoPriorityPage');
const colorSize=require('../POM/colorSizePage');

test.beforeEach('launch URL',async({page})=>
{
        await page.goto('/');
})
let loginPage;
test('Add and update PoPriority', async({page})=>
{
    loginPage= new LoginPage(page);
    const PoPriorityPage= new poPriorityPage(page);
    await loginPage.mnuPoPriority();
    await page.screenshot({ path: 'screenshots/screenshot.png' });
    await PoPriorityPage.addPo();
    await PoPriorityPage.editPo();

})

test('@sanity Add and update colorSizeCode', async({page})=>
{
    loginPage= new LoginPage(page);
    const ColorSize= new colorSize(page);
    await loginPage.mnucolorSizeCode();
    await ColorSize.addColorSize();
    await ColorSize.editColorSize();

})