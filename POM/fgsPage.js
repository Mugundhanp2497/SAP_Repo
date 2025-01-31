class fgsPage
{
    constructor(page)
    {
        this.page=page;
        this.mnu_Fgs= this.page.locator('[data-testid="Mnu_FGS"]');
        this.txt_barcodeId= this.page.locator('[data-testid="fgs-tag-value"]');
        this.btn_proceed= this.page.locator('[data-testid="fgs-proceed-btn 1"]');
        this.btn_remove= this.page.locator('[data-testid="fgs-remove-btn"]');
        this.lnk_TUR= this.page.locator('[]');
      
    }
    async navMnuFgs()
    {
        await this.mnu_Fgs.click();
    }
    async ScanGar(page)
    {
        await this.txt_barcodeId.fill('1234');
        await this.page.keyboard.press('Enter');
        await this.btn_proceed.click();
        await this.txt_barcodeId.fill('1234');
        await this.page.keyboard.press('Enter');
        await this.btn_remove.click();
        await this.lnk_TUR.click();

    }
}
module.exports= fgsPage;