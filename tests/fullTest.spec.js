import {test, expect} from '@playwright/test';
const LoginPage = require('../POM/loginPage');
const poPriorityPage= require('../POM/PoPriorityPage');
const colorSize=require('../POM/colorSizePage');
const barcodeSpecPage= require('../POM/barcodeSpecPage');
const packDimensionPage =require('../POM/packDimensionPage');
const prePackRatioPage= require('../POM/prePackRatioPage');
const fgsPage= require('../POM/fgsPage');
import {WriteExcelData} from '../utils/writeExcel'
import { readExcelData} from '../utils/excelReader';

test.beforeEach('launch URL',async({page})=>
{
    
        await page.goto('/');
})
let loginPage;

test(`Add and update PoPriority`, async({page})=>
{

    loginPage= new LoginPage(page);
    const PoPriorityPage= new poPriorityPage(page);
    await loginPage.mnuPoPriority();
    await page.screenshot({ path: 'screenshots/screenshot.png' });
    await PoPriorityPage.addPo();
    await PoPriorityPage.editPo();
    await WriteExcelData(1,1,'Pass');

})

test('And and update barcodespec',async({page})=>
    {
        const barcodeSpec= new barcodeSpecPage(page);
        await barcodeSpec.navMnuBarcode();
        await barcodeSpec.addBarcodeSpec();
        await barcodeSpec.fillTagEditScreen();
    
})

test('Add and update packDimension',async({page})=>
{
    const packDimension= new packDimensionPage(page);
    await packDimension.navPackDimension();
    await packDimension.addPackDimension();
    await packDimension.updatePackDimension();
})

test('Add and update prepackRatio',async({page})=>
{
    const prePackRatio= new prePackRatioPage(page);
    await prePackRatio.navPrepackRatio();
    await prePackRatio.addPrepackRatio();
    await prePackRatio.updatePrepackRatio();

})

test(`Add and update colorSizeCode`, async({page})=>
{

    loginPage= new LoginPage(page);
    const ColorSize= new colorSize(page);
    await loginPage.mnucolorSizeCode();
    await ColorSize.addColorSize(page);
    await ColorSize.editColorSize();
    await WriteExcelData(2,1,'Pass');

})

test('FGS(First Level Scanning)',async({page})=>
{
    const fgs=new fgsPage(page);
    await fgs.navMnuFgs();
    await fgs.ScanGar(page);

})


