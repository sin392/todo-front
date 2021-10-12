import { NextApiRequest, NextApiResponse } from 'next'

const HelloHandler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ name: 'John Doe' })
}

export default HelloHandler
