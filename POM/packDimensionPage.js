class packDimensionPage
{
    constructor(page)
    {
        this.page=page;
        this.mnu_packDimension= this.page.locator('[data-testid="Mnu_Pack Dimension"]');
        this.btn_addPack=this.page.locator('[data-testid="add-packdimension"]');
        this.slt_unit=this.page.locator('[data-testid="add_packdimension-unitCode"]');
        this.slt_buyerDiv=this.page.locator('[data-testid="add_packdimension-buyerDiv"]');
        this.slt_orderNo=this.page.locator('[data-testid="add_packdimension-orderNo"]');
        this.slt_type=this.page.locator('[data-testid="add_packdimension-type"]');
        this.slt_weightUom=this.page.locator('[data-testid="add_packdimension-weightUom"]');
        this.slt_dimensionUom=this.page.locator('[data-testid="add_packdimension-dimensionUom"]');
        this.txt_length=this.page.locator('[data-testid="add_packdimension-length"]');
        this.txt_width=this.page.locator('[data-testid="add_packdimension-width"]');
        this.txt_height=this.page.locator('[data-testid="add_packdimension-height"]');
        this.txt_thickness=this.page.locator('[data-testid="add_packdimension-thickness"]');
        this.txt_weight=this.page.locator('[data-testid="add_packdimension-weight"]');
        this.txt_maxWeightPerPack=this.page.locator('[data-testid="add_packdimension-maxWeight"]');
        this.btn_add=this.page.locator('[data-testid="add_packdimension-add-btn"]');
        this.btn_save=this.page.locator('[]');
        this.btn_edit=this.page.locator('[data-testid="packdimension-edit-btn 1"]');
        this.btn_view=this.page.locator('[data-testid="edit_po_priority-view-btn 1"]');
        this.btn_addSizeDetails= this.page.locator('[data-testid="edit_po_priority-size-add-btn 1"]');
        this.txt_optionName= this.page.locator('[data-testid="edit_po_priority-optName 1"]');
        this.slt_garSize= this.page.locator('[data-testid="edit_po_priority-garSize 1"]');
        this.txt_ratioPcs=this.page.locator('[data-testid="edit_po_priority-maxPcs 1"]');
        this.btn_split= this.page.locator('[id="edit_po_priority-split-btn 1"]');
        this.slt_garSize2= this.page.locator('[data-testid="edit_po_priority-garSize 2"]');
        this.btn_sizeDetailsSave= this.page.locator('[data-testid="edit_po_priority-size-save-btn 1"]');
        this.btn_update= this.page.locator('data-testid="edit_packdimension-update-btn"');
        this.btn_finalConfirm= this.page.locator('[data-testid="confirm-button-testid"]');

    }
    async navPackDimension()
    {
        await this.mnu_packDimension.click();
    }

    async addPackDimension()
    {
        await this.btn_addPack.click();
        await this.slt_unit.selectOption('D15-2');
        await this.slt_buyerDiv.selectOption('GAPMT');
        await this.slt_orderNo.selectOption('39360 / 543204-D18282 HO24');
        await this.slt_type.selectOption('Carton');
        await this.slt_weightUom.selectOption('KGS');
        await this.slt_dimensionUom.selectOption('CM');
        await this.txt_length.fill('12');
        await this.txt_width.fill('13');
        await this.txt_height.fill('14');
        await this.txt_thickness.fill('15');
        await this.txt_weight.fill('16');
        await this.txt_maxWeightPerPack.fill('17');
        await this.btn_add.click();
        await this.btn_save.click();
        await this.btn_finalConfirm.click();
    }
    async updatePackDimension()
    {
        await this.btn_edit.click();
        await this.btn_view.click();
        await this.btn_addSizeDetails.click();
        await this.txt_optionName.fill('test');
        await this.slt_garSize.selectOption('M');
        await this.txt_ratioPcs.fill('2');
        await this.btn_split.click();
        await this.slt_garSize2.selectOption('S');
        await this.btn_sizeDetailsSave.click();
        await this.btn_update.click();
        await this.btn_finalConfirm.click();
    }
}
module.exports=packDimensionPage;