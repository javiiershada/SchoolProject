import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Insert code here to handle the form submission

    return res.status(201).json({ message: "User created successfully" });
  } else {
    return res.status(405).end();
  }
}