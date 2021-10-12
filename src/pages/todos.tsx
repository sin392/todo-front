import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'
import { Typography, PageHeader } from 'antd'
// import InfiniteScroll from 'react-infinite-scroller'
import { TODO } from '../model/todo'
import CreateForm from '../components/createForm'
import TODOList from '../components/todoList'
import api from '../modules/todos/api'

interface Props {
	// todos: TODO[]
}

const TODOPage: NextPage<Props> = ({}) => {
	const [todos, setTodos] = useState<TODO[]>([])
	// const [selected, setSelected] = useState<number[]>([])

	useEffect(() => {
		const f = async () => {
			const todos = await api.readTODOs()
			setTodos(todos)
		}
		f()
	}, [])

	return (
		<Layout>
			<PageHeader
				title={<Typography.Title level={2}>TODO List</Typography.Title>}
				onBack={() => window.history.back()}
			>
				<CreateForm todos={todos} setTodos={setTodos} />
				<TODOList todos={todos} />
			</PageHeader>
		</Layout>
	)
}

// TODOPage.getInitialProps = async () => {
// 	const url = 'http://localhost:3001/todo'
// 	const res = await fetch(url, { method: 'GET' })
// 	const json: ResponseTODOSchema[] = await res.json()
// 	return { todos: json.map((x) => new TODO(x)) }
// }

const styles: { [key: string]: React.CSSProperties } = {}

export default TODOPage
