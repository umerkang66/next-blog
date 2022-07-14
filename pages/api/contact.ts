import { NextApiRequest, NextApiResponse } from 'next';
import { Document, InsertOneResult, MongoClient, ObjectId } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    interface Body {
      email: string;
      name: string;
      message: string;
    }

    const { email, name, message } = req.body as Body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid input' });
    }

    // TODO store it in database
    const newMessage = {
      email,
      name,
      message,
    };

    let client: MongoClient;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.7ddsqam.mongodb.net/next-blog?retryWrites=true&w=majority`
      );
    } catch (err) {
      return res.status(500).json({ message: "Couldn't connect to db" });
    }

    const db = client.db();

    try {
      interface DocumentWithId extends InsertOneResult<Document> {
        id?: ObjectId;
      }

      const result: DocumentWithId = await db
        .collection('messages')
        .insertOne(newMessage);

      result.id = result.insertedId;
    } catch (err) {
      client.close();
      return res.status(500).json({ message: 'Storing message failed' });
    }

    client.close();
    return res.status(201).json({
      message: 'Successfully stored message!',
      data: newMessage,
    });
  }

  res.status(422).json({ message: 'Invalid request' });
}

export default handler;
