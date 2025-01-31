class prePackRatioPage
{
    constructor(page)
    {
        this.page=page;
        this.mnu_prepackRatio= this.page.locator('[data-testid="Mnu_Prepack Ratio"]');
        this.btn_addPrepack=this.page.locator('[data-testid="add_prepackRatio-btn"]');
        this.slt_unit=this.page.locator('[data-testid="add_prepackRatio-unitCode"]');
        this.slt_buyerDiv=this.page.locator('[data-testid="add_prepackRatio-buyerDiv"]');
        this.slt_orderNo=this.page.locator('[data-testid="add_prepackRatio-orderNo"]');
        this.slt_destination= this.page.locator('[data-testid="add_prepackRatio-destination"]');
        this.slt_buyerPo=this.page.locator('//div[@id="add_prepackRatio-poNo"]');
        this.slt_prepackType=this.page.locator('[data-testid="add_prepackRatio-prepackType"]');
        this.txt_packSku=this.page.locator('[data-testid="add_prepackRatio-packSku"]');
        this.btn_save=this.page.locator('[data-testid="add_prepackRatio-save"]');
        this.btn_finalConfirm= this.page.locator('[data-testid="confirm-button-testid"]');
        this.btn_edit= this.page.locator('[data-testid="close-prepackRatio-edit-btn 1"]');
        this.btn_colorFit= this.page.locator('[data-testid="edit_prepackRatio-colorandFit"]');
        this.btn_ratiopc= this.page.locator('[data-testid="edit_prepackRatio-raioPcs-btn"]');
        this.txt_ratioPcDetail= this.page.locator('[data-testid="edit_prepackRatio-ratioPcs 1"]');
        this.btn_ratioPcOk= this.page.locator('[data-testid="edit_prepackRatio-modal-OK"]');
        this.btn_allColor= this.page.locator('[data-testid="edit_prepackRatio-all-color"]');
        this.txt_ratioPcColor= this.page.locator('[data-testid="edit_prepackRatio-ratioPcs 1"]');
        this.btn_update= this.page.locator('[data-testid="edit_prepackRatio-update"]');

    }
    async navPrepackRatio()
    {
        await this.mnu_prepackRatio.click();
    }

    async addPrepackRatio()
    {
        await this.btn_addPrepack.click();
        await this.slt_unit.selectOption('D15-2');
        await this.slt_buyerDiv.selectOption('GAPMT');
        await this.slt_orderNo.selectOption('39360 / 543204-D18282 HO24');
        await this.slt_destination.selectOption('USA');
        await this.slt_prepackType.selectOption('2Pc PrePack');
        await this.txt_packSku.fill('Test143');
        await this.btn_save.click();
        await this.btn_finalConfirm.click();

    }

    async updatePrepackRatio()
    {
        await this.btn_edit.click();
        await this.btn_colorFit.click();
        await this.btn_ratiopc.click();
        await this.txt_ratioPcDetail.fill('2');
        await this.btn_ratioPcOk.click();
        await this.btn_finalConfirm.click();
        await this.btn_allColor.click();
        await this.txt_ratioPcColor.fill('2');
        await this.btn_update.click();
        await this.btn_finalConfirm.click();

    }
} 
module.exports=prePackRatioPage;