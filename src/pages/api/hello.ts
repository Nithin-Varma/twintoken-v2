// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  const x = req.body;
  res.statusCode = 200;
  res.json({ name: 'sample api' });
};

export default hello;
