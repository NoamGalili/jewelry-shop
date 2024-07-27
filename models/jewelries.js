       

 async function getAllJewelries() //allowing the rest of the project to access the jewleries json 
 {
  const { MongoClient } = require('mongodb');
  const uri  = 'mongodb://0.0.0.0:27017/';
  const client = new MongoClient(uri);
  await client.connect();
  const jewelries = await client.db('NTLC').collection('Jewleries').find();
  return await jewelries.toArray()
 }

// JewelryID
/*
-------DB Template-------
 function getAllJewelries() //allowing the rest of the project to access the jewleries json 
 {
  const { MongoClient } = require('mongodb');
  const uri  = 'mongodb://127.0.0.1:27017/';
  const client = new MongoClient(uri);
  await client.connect();
  const jewelries = await client.db('<DB name>').collection('<collection name>').find();
  return await jewelries.toArray()
 }
*/

 async function getJewelry(id) //allowing the rest of the project to access the jewleries json 
 {
    const { MongoClient } = require('mongodb');
    const uri  = 'mongodb://0.0.0.0:27017/';
    const client = new MongoClient(uri);
    await client.connect();
    const jewelries = await client.db('NTLC').collection('Jewleries').find();
    return await jewelries.toArray()

    //return jewelries.filter(Jewelry => Jewelry.id == id)[0];
 }

 async function getJewelryByID(jewelryID) 
 {
    const jewelryItem = await Jewelry.findOne({ jewelryID });
    return jewelryItem;
}
 
 module.exports = getJewelryByID;
 
 function deleteJewelry(id)
 {
   const indexToDelete= jewelries.findIndex(Jewelry => Jewelry.id == id)
   jewelries.splice(indexToDelete, 1)
 }

 
 module.exports = 
 {
   getAllJewelries,
    getJewelry
 }
