import React, { useCallback } from 'react'
import { Card, Input, Button, Form } from 'antd'
import api from '../modules/todos/api'
import { TODO } from '../model/todo'

interface Props {
	todos: TODO[]
	setTodos: React.Dispatch<React.SetStateAction<TODO[]>>
}

const CreateForm: React.VFC<Props> = ({ todos, setTodos }) => {
	const [form] = Form.useForm()

	const createHandler = useCallback(async (e: any) => {
		console.log(e)
		const todo = await api.createTODO(e.subject, '')
		setTodos([todo, ...todos])
		form.resetFields()
	}, [])

	return (
		<Card
			title="新規作成"
			headStyle={styles.CardHead}
			bodyStyle={styles.CardBody}
		>
			<Form form={form} onFinish={createHandler} style={styles.Form}>
				<Form.Item name="subject" style={styles.FormInput}>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						追加
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}

const styles: { [key: string]: React.CSSProperties } = {
	CardHead: {
		background: '#ececec',
	},
	CardBody: {
		background: '#ffffff',
		padding: '10px',
		// display: 'flex',
	},
	Form: {
		display: 'flex',
	},
	FormInput: {
		flexBasis: '90%',
		marginRight: '10px',
	},
}

export default CreateForm
