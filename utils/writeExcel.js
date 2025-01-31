const exceljs=require('exceljs');

async function WriteExcelData(rowNo,cellNo,result)
{
    const workBook=new exceljs.Workbook();
    await workBook.xlsx.readFile('./resource/testData.xlsx');
    const workSheet= workBook.getWorksheet('results');
    workSheet.eachRow((Row,RowNo)=>
    {
        if(RowNo==rowNo)
        {
         Row.eachCell((Cell,CellNo)=>
         {
            if(CellNo==cellNo)
            {
                Cell.value=result;
            }

         })
        }
    })
    await workBook.xlsx.writeFile('./resource/testData.xlsx');


}
module.exports= {WriteExcelData};