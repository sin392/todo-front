import { NextApiRequest, NextApiResponse } from 'next'

// export const readTODO = async (id: number) => {
export const readTODOs = async (req: NextApiRequest, res: NextApiResponse) => {
	const url = 'http://localhost:3001/todo'

	let data = await fetch(url, { method: 'GET' })
	data = await data.json()
	return res.status(200).json(data)
}

export default readTODOs
