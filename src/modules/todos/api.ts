import axios from 'axios'
import { TODO } from '../../model/todo'

export const api = {
	readTODO: async (id: number) => {
		const url = `http://localhost:3001/todo?id=${id}`
		const res = (await (await axios.get(url)).data) as any
		return new TODO(res)
	},
	readTODOs: async () => {
		const url = 'http://localhost:3001/todo'
		const res: TODO[] = (await (await axios.get(url)).data) as any
		return res.map((x) => new TODO(x))
	},
	createTODO: async (subject: string, description: string) => {
		const url = 'http://localhost:3001/todo'
		const params = {
			subject: subject,
			description: description,
		}
		const res = (await (await axios.post(url, params)).data) as any
		return new TODO(res)
	},
}

export default api
