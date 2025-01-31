class barcodeSpecPage
{
    constructor(page)
    {
        this.page=page;
        this.mnu_barcodeSpec= this.page.locator('[data-testid="Mnu_Barcode Spec"]');
        this.btn_addBarcode= this.page.locator('[data-testid="add_barcode-btn"]');
        this.slt_unit=this.page.locator('[data-testid="add_barcodespec-unitcode"]');
        this.slt_buyerDiv=this.page.locator('[data-testid="add_barcodespec-buydivcode"]');
        this.slt_orderNo=this.page.locator('[data-testid="add_barcodespec-orderno"]');
        this.slt_destination=this.page.locator('[data-testid="add_barcodespec-destination"]');
        this.slt_scanPoint=this.page.locator('[data-testid="add_barcodespec-scan_point"]');
        this.slt_weightUom=this.page.locator('[data-testid="add_barcodespec-weightuom"]');
        this.btn_save=this.page.locator('[data-testid="add_barcodespec-save"]');
        this.btn_cancel= this.page.locator('[data-testid="add_barcodespec-cancel"]');
        this.btn_edit= this.page.locator('[data-testid="barcodespec-edit-btn 1"]');
        this.btn_view=this.page.locator('[data-testid="edit_barcodespec-view 1"]');
        this.txt_weight= this.page.locator('[data-testid="edit_barcodespec-garweight 1"]');
        this.txt_priceTag= this.page.locator('[data-testid="edit_barcodespec-pricetag 1"]');
        this.btn_finalConfirm= this.page.locator('[data-testid="confirm-button-testid"]');



    }

    async navMnuBarcode()
    {
        await this.mnu_barcodeSpec.click();
    }
    async addBarcodeSpec()
    {
        await this.btn_addBarcode.click();
        await this.slt_unit.selectOption('D15-2');
        await this.slt_buyerDiv.selectOption('GAPMT');
        await this.slt_orderNo.selectOption('34110 / 671087-D6366 SU23');
        await this.slt_destination.selectOption('JAPAN');
        await this.slt_scanPoint.selectOption('Single for price tag');
        await this.slt_weightUom.selectOption('KGS');
        await this.btn_save.click();
        
    }
    async fillTagEditScreen()
    {
        await this.btn_view.click();
        await this.txt_weight.fill('1');
        await this.txt_priceTag.fill('23498761');

    }
}
module.exports=barcodeSpecPage;