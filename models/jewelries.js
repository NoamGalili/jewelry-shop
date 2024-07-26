const jewelries =  [
    {id:1,
      jewelryName:"Jewelry 1",
      price:"111111111.1$"},
    {id:2,
      jewelryName:"Jewelry 2",
      price:"222222222.2$"}
 ]
       

 function getAllJewelriess() //allowing the rest of the project to access the jewleries json 
 {
    return jewelries
 }

 function deleteJewelry(id){
   const indexToDelete= jewelries.findIndex(Jewelry => Jewelry.id ==id)
   jewelries.splice(indexToDelete, 1)

   
 }

 function getJewelry(id) //allowing the rest of the project to access the jewleries json 
 {
    return jewelries.filter(Jewelry => Jewelry.id == id)[0];
 }
 module.exports = 
 {
   getAllJewelriess,
    getJewelry
 }
