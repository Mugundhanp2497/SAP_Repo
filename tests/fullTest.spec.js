import {test, expect} from '@playwright/test';
const LoginPage = require('../POM/loginPage');
const poPriorityPage= require('../POM/PoPriorityPage');
const colorSize=require('../POM/colorSizePage');
const barcodeSpecPage= require('../POM/barcodeSpecPage');
const packDimensionPage =require('../POM/packDimensionPage');
const prePackRatioPage= require('../POM/prePackRatioPage');
const fgsPage= require('../POM/fgsPage');
import {WriteExcelData} from '../utils/writeExcel'
import {readExcelData} from '../utils/excelReader';

test.beforeEach('launch URL',async({page})=>
{
        await page.goto('/');
})
let loginPage;

test(`Add and update PoPriority`, async({page})=>
{
    let unit= await readExcelData(2,1);
    let buyerDiv= await readExcelData(2,2);
    let orderNo= await readExcelData(2,3);

    loginPage= new LoginPage(page);
    const PoPriorityPage= new poPriorityPage(page);
    await loginPage.mnuPoPriority();
    page.pause();  
    await page.screenshot({ path: 'screenshots/navPoPriority.png' });
    await PoPriorityPage.addPo(page,unit,buyerDiv,orderNo);
    await PoPriorityPage.editPo(page);
    await WriteExcelData(1,1,'Pass');

})

test('And and update barcodespec',async({page})=>
    {
        let unit= await readExcelData(2,1);
        let buyerDiv= await readExcelData(2,2);
        let orderNo= await readExcelData(2,3);
        let destination= await readExcelData(2,4);
        let scanPoint= await readExcelData(2,5);
        let weightUom= await readExcelData(2,6);
        let weight= await readExcelData(2,14);
        let priceTag= await readExcelData(2,8);

        const barcodeSpec= new barcodeSpecPage(page);
        await barcodeSpec.navMnuBarcode();
        await barcodeSpec.addBarcodeSpec(page,unit,buyerDiv,orderNo,destination,scanPoint,weightUom);
        await barcodeSpec.fillTagEditScreen(page,weight,priceTag);
    
})

test('Add and update packDimension',async({page})=>
{
    let unit= await readExcelData(2,1);
    let buyerDiv= await readExcelData(2,2);
    let orderNo= await readExcelData(2,3);
    let packType= await readExcelData(2,9);
    let weightUom= await readExcelData(2,6);
    let dimensionUom= await readExcelData(2,7);
    let length= await readExcelData(2,10);
    let width= await readExcelData(2,11);
    let height= await readExcelData(2,12);
    let thickness= await readExcelData(2,13);
    let weight= await readExcelData(2,14);
    let maxWeight= await readExcelData(2,15);
    let optName= await readExcelData(2,16);
    let ratiopcs= await readExcelData(2,17);

    const packDimension= new packDimensionPage(page);
    await packDimension.navPackDimension();
    await packDimension.addPackDimension(page,unit,buyerDiv,orderNo,packType,weightUom,dimensionUom,length,width,height,thickness,weight,maxWeight);
    await packDimension.updatePackDimension(page,optName,ratiopcs);
})

test('Add and update prepackRatio',async({page})=>
{
    let unit= await readExcelData(2,1);
    let buyerDiv= await readExcelData(2,2);
    let orderNo= await readExcelData(2,3);
    let destination= await readExcelData(2,4);
    let ratiopcs= await readExcelData(2,17);
    let prepackType= await readExcelData(2,18);
    let packSku= await readExcelData(2,19);

    const prePackRatio= new prePackRatioPage(page);
    await prePackRatio.navPrepackRatio();
    await prePackRatio.addPrepackRatio(page,unit,buyerDiv,orderNo,destination,prepackType,packSku);
    await prePackRatio.updatePrepackRatio(page,ratiopcs);

})

test(`Add and update colorSizeCode`, async({page})=>
{
    let unit= await readExcelData(2,1);
    let buyerDiv= await readExcelData(2,2);
    let orderNo= await readExcelData(2,3);
    let destination= await readExcelData(2,4);
    let dcCode= await readExcelData(2,20);

    loginPage= new LoginPage(page);
    const ColorSize= new colorSize(page);
    await loginPage.mnucolorSizeCode();
    await ColorSize.addColorSize(page,unit,buyerDiv,orderNo,destination,dcCode);
    await ColorSize.editColorSize(page);
    await WriteExcelData(2,1,'Pass');

})

test('FGS(First Level Scanning)',async({page})=>
{
    let priceTag= await readExcelData(2,8);
    const fgs=new fgsPage(page);
    await fgs.navMnuFgs();
    await fgs.ScanGar(page,priceTag);

})


