import { NextApiRequest, NextApiResponse } from 'next';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://maintainer_philix:qwertyuiop@carbonpi.hiozz58.mongodb.net/?appName=CarbonPi";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    const database = client.db('CrowdFund');
    const collection = database.collection('campaigns');
    console.log("Connected to MongoDB, fetching campaigns...");
    const campaigns = await collection.find({}).toArray();
    console.log("Fetched campaigns:", campaigns);
    res.status(200).json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  } finally {
    await client.close();
    console.log("Closed MongoDB connection.");
  }
}
