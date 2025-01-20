class CommonMethods
{

    constructor()
    {

    }
  async randomName()
   {
    const d= new Date().toISOString().replace(/[-:.]/g, "");
    return d;

   }
}
// const j=new CommonMethods();
// console.log(j.randomName());
module.exports= CommonMethods;