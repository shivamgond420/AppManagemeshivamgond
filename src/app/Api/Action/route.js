import { NextResponse } from "next/server";
const { MongoClient, ServerApiVersion } = require("mongodb");

export async function POST(request) {
  let { Action, Name, initalQuantity } = await request.json();
  const uri =
    "mongodb+srv://mayibak991:sH1pB3o7U9ur82aI@cluster0.s18dmg2.mongodb.net/?retryWrites=true&w=majority";

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    const database = client.db("test");
    const Product = database.collection("eyes");

    //Filterr
    const Filter = { Name: Name };
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    let newQuantity =
      Action == "plus"
        ? parseInt(initalQuantity) + 1
        : parseInt(initalQuantity) - 1;

    const updateDoc = {
      $set: {
        Description: newQuantity,
      },
    };

    const result = await Product.updateOne(Filter, updateDoc);
    return NextResponse.json({ success: true, message: "ok" });
  } finally {
    await client.close();
  }
}
