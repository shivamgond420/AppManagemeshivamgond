import { NextResponse } from "next/server";
const { MongoClient, ServerApiVersion } = require("mongodb");
export async function GET(request) {
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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("test");
    const Product = database.collection("eyes");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    const query = {};

    const AllProduct = await Product.find(query).toArray();
    return NextResponse.json({ success: true, AllProduct });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// post method
export async function POST(request) {
  let body = await request.json();

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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("test");
    const Product = database.collection("eyes");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const query = {};
    const AllProduct = await Product.insertOne(body);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
