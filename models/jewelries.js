const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Jewleries = new Schema({

      _id:{},
      JewelryType:{ type: String, required: true },
      JewelryColor:{ type: String, required: true },
      JewelryName:{ type: String, required: true },
      JewelryPhoto:{ type: String, required: true },
      JewelryPrice:{ type: Number, required: true },
      JewelryDescription:{ type: String, required: true },
      JewelryAddDate:{ type: Date, required: true, default: Date.now },
      JewelryAvaliableStock:{ type: Number, required: true },
      JewelryAmountOfOrders:{ type: Number, required: true },
      JewelryPhoto:{ type: String, required: true} ,
      JewelryID:{ type: String, required: true, unique: true }
})






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
    const jewelries = await client.db('NTLC').collection('Jewleries').findOne({id:new (id)});
    return await jewelries.toArray()

 }

 function deleteJewelry(id)
 {
   const indexToDelete= jewelries.findIndex(Jewelry => Jewelry.id == id)
   jewelries.splice(indexToDelete, 1)
 }

 
 module.exports = 
 {
   getAllJewelries,
   getJewelry,
   deleteJewelry
 }
