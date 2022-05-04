import { NextApiRequest, NextApiResponse } from 'next';
import categories from './categories/data';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(categories);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
