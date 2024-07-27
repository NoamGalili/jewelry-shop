
       

 function getAllJewelries() //allowing the rest of the project to access the jewleries json 
 {
  const { MongoClient } = require('mongodb');
  const uri  = 'mongodb://127.0.0.1:27017/';
  const client = new MongoClient(uri);
  await client.connect();
  const jewelries = await client.db('collection name').collection('<collection name>').find();
  return await jewelries.toArray()
 }

/*
 function getAllJewelries() //allowing the rest of the project to access the jewleries json 
 {
  const { MongoClient } = require('mongodb');
  const uri  = 'mongodb://127.0.0.1:27017/';
  const client = new MongoClient(uri);
  await client.connect();
  const jewelries = await client.db('collection name').collection('<collection name>').find();
  return await jewelries.toArray()
 }
*/

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
