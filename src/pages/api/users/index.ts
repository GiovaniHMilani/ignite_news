import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Giovani' },
    { id: 2, name: 'Henrique' },
    { id: 3, name: 'Milani' },
  ]

  return response.json(users);
}
