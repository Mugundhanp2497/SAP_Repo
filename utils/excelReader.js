const ExcelJS = require("exceljs");

async function readExcelData(rowNumber,cellNumber) 
{
    const workbook= new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./resource/testData.xlsx');
    const worksheet= workbook.getWorksheet('test');
    let testData= null;
    worksheet.eachRow((row,rownumber)=>
    {
        if(rowNumber==rownumber)
        {
            row.eachCell((cell,cellnumber)=>
            {
                if(cellNumber==cellnumber)
                {
                    testData= cell.value;
                }
            })
        }

    })
    return testData;
    
}
module.exports = {readExcelData};