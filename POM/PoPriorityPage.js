import {page,expect} from '@playwright/test';

class PoPriorityPage
{
    constructor(page)
    {
      this.page=page;
      this.btn_addPoPriority= this.page.locator('[data-testid="add_po_priority"]');
      this.slt_unit= this.page.locator('[data-testid="add_po_priority-unitCode"]');
      this.slt_buyerDiv= this.page.locator('[data-testid="add_po_priority-buyDivCode"]');
      this.slt_order_style= this.page.locator('[data-testid="add_po_priority-orderNo"]');
      this.btn_savePo= this.page.locator('[data-testid="add_po_priority-save"]');
      this.btn_cancelPo= this.page.locator('[data-testid="edit_po_priority-cancel"]');
      this.btn_edit= this.page.locator('[data-testid="Edit_po_priority 1"]');
      this.txt_editPovalue_01=this.page.locator('[data-testid="edit_po_priority-shipPriority 1"]');
      this.txt_editPovalue_02=this.page.locator('[data-testid="edit_po_priority-shipPriority 2"]');
      this.btn_update= this.page.locator('[data-testid="edit_po_priority-update"]');
      this.btn_finalConfirm= this.page.locator('[data-testid="confirm-button-testid"]');
    }

    async addPo(page,unit,buyerDiv,orderNo)
    {
        await this.btn_addPoPriority.click();
        await this.slt_unit.selectOption(unit);
        await this.slt_buyerDiv.selectOption(buyerDiv);
        await this.slt_order_style.selectOption(orderNo);
        await this.btn_savePo.click();
        await page.screenshot({ path: 'screenshots/poPrioritySave.png'});

    }
    async editPo(page)
    {
      //await this.btn_edit.click();
      await this.txt_editPovalue_01.fill('2');
      await this.txt_editPovalue_02.fill('1');
      await this.btn_update.click();
      await this.btn_finalConfirm.click();
      await page.screenshot({ path: 'screenshots/poPriorityUpdate.png'});
    }
}
module.exports= PoPriorityPage;