import {page,expect} from '@playwright/test';
class colorSizePage
{
    constructor(page)
    {
        this.page=page;
        this.btn_addColorSizeCode= this.page.locator('[data-testid="add_color-size"]');
        this.slt_unit= this.page.locator('[data-testid="add_color_size-unitCode"]');
        this.slt_buyerDiv= this.page.locator('[data-testid="add_color_size-buyerDiv"]');
        this.slt_orderStyle= this.page.locator('[data-testid="add_color_size-orderNo"]');
        this.slt_destination= this.page.locator('[data-testid="add_color_size-destination"]');
        this.txt_dcCode= this.page.locator('[data-testid="add_color_size-dcCode"]');
        this.btn_Save= this.page.locator('[data-testid="add_color_size-save"]');
        this.btn_cancel= this.page.locator('[data-testid="edit_color_size-cancel"]');
        this.btn_edit= this.page.locator('[data-testid="list_color-edit 1"]');
        this.txt_colorCode= this.page.locator('[data-testid="edit_color_size-colorCode 1"]');
        this.lnk_fit= this.page.locator("//a[text()='Fit']");
        this.txt_fitCode= this.page.locator('[data-testid="edit_color_size-fitCode 1"]');
        this.lnk_size= this.page.locator("//a[text()='Size']");
        this.txt_sizeCode= this.page.locator('[data-testid="edit_color_size-sizeCode 1"]');
        this.btn_update= this.page.locator('[data-testid="edit_color_size-update"]');
        this.btn_finalConfirm= this.page.locator('[data-testid="confirm-button-testid"]');



    }
    async addColorSize(page,unit,buyerDiv,orderNo,destination,dcCode)
    {
        await this.btn_addColorSizeCode.click();
        await this.slt_unit.selectOption(unit);
        await this.slt_buyerDiv.selectOption(buyerDiv);
        await this.slt_orderStyle.selectOption(orderNo);
        await this.slt_destination.selectOption(destination);
        await this.txt_dcCode.fill(dcCode);
        await this.page.on('dialog', async({dialog}) => {
            console.log(dialog.message());
            await dialog.accept();
        });
        //await this.btn_Save.click();
        await page.screenshot({path: 'screenshots/colorSizeCodeSave.png'});
        //await this.btn_finalConfirm.click();
    }
    async editColorSize(page)
    {
        await this.btn_edit.click();
        await this.txt_colorCode.fill('abc');
        await this.lnk_fit.click();
        await this.txt_fitCode.fill('xyz')
        await this.lnk_size.click();
        await this.txt_sizeCode.fill('def');
        await this.btn_update.click();
        await this.btn_finalConfirm.click();
        await page.screenshot({path: 'screenshots/colorSizeCodeUpdate.png'});
    }

}
module.exports=colorSizePage;