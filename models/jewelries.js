
       

 function getAllJewelries() //allowing the rest of the project to access the jewleries json 
 {
    return jewelries
 }

 function getJewelry(id) //allowing the rest of the project to access the jewleries json 
 {
    return jewelries.filter(Jewelry => Jewelry.id == id)[0];
 }

 function deleteJewelry(id)
 {
   const indexToDelete= jewelries.findIndex(Jewelry => Jewelry.id ==id)
   jewelries.splice(indexToDelete, 1)
 }

 
 module.exports = 
 {
   getAllJewelries,
    getJewelry
 }
