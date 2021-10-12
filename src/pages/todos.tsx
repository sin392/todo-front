import React, { useCallback } from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'
import {
	Typography,
	List,
	PageHeader,
	Card,
	Input,
	Button,
	Checkbox,
	Form,
} from 'antd'
// import InfiniteScroll from 'react-infinite-scroller'
import { TODO, ResponseTODOSchema } from '../model/todo'

interface Props {
	todos: TODO[]
}

const TODOPage: NextPage<Props> = ({ todos }) => {
	const [form] = Form.useForm()

	const createHandler = useCallback((e: any) => {
		console.log(e)
		form.resetFields()
	}, [])

	return (
		<Layout>
			<PageHeader
				title={<Typography.Title level={2}>TODO List</Typography.Title>}
				onBack={() => window.history.back()}
			>
				<Card
					title="新規作成"
					headStyle={styles.CreateCardHeadStyle}
					bodyStyle={styles.CreateCardBodyStyle}
				>
					<Form
						form={form}
						onFinish={createHandler}
						style={styles.AntFormStyle}
					>
						<Form.Item name="subject" style={styles.AntFormInputStyle}>
							<Input />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								追加
							</Button>
						</Form.Item>
					</Form>
				</Card>
				<Card
					title={`未完了 ${todos.length}件`}
					style={styles.ListCardStyle}
					headStyle={styles.ListCardHeadStyle}
					bodyStyle={styles.ListCardBodyStyle}
				>
					{/* <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}> */}
					<List
						style={styles.ListStyle}
						bordered
						dataSource={todos}
						renderItem={({ id, subject, description }) => (
							<List.Item key={id} style={styles.AntListItemStyle}>
								<div style={styles.AntListItemInnerStyle}>
									<div style={styles.AntCheckBoxContainerStyle}>
										<Checkbox style={styles.AntCheckBoxStyle} />
									</div>
									<Card title={subject} style={styles.AntListItemCardStyle}>
										{`${id}, ${subject}, ${description}`}
									</Card>
								</div>
							</List.Item>
						)}
					/>
					{/* </InfiniteScroll> */}
				</Card>
			</PageHeader>
		</Layout>
	)
}

TODOPage.getInitialProps = async () => {
	const url = 'http://localhost:3001/todo'
	const res = await fetch(url, { method: 'GET' })
	const json: ResponseTODOSchema[] = await res.json()
	return { todos: json.map((x) => new TODO(x)) }
}

const styles: { [key: string]: React.CSSProperties } = {
	ListStyle: {
		// background: 'rgb(255, 255, 255)',
		background: '#ffffff',
	},
	CreateCardHeadStyle: {
		background: '#ececec',
	},
	CreateCardBodyStyle: {
		background: '#ffffff',
		padding: '10px',
		// display: 'flex',
	},
	ListCardStyle: {
		marginTop: '30px',
	},
	ListCardHeadStyle: {
		background: '#ececec',
	},
	ListCardBodyStyle: {
		background: '#ffffff',
		padding: '0px',
		msTransformOrigin: '0px',
		// display: 'flex',
	},
	AntFormStyle: {
		display: 'flex',
	},
	AntFormInputStyle: {
		flexBasis: '90%',
		marginRight: '10px',
	},
	AntListItemStyle: {
		paddingTop: '8px',
		paddingBottom: '8px',
	},
	AntListItemInnerStyle: {
		width: '100%',
		borderWidth: '2px',
		display: 'flex',
	},
	AntCheckBoxContainerStyle: {
		flexBasis: '5%',
		background: '#ececec',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	AntCheckBoxStyle: {},
	AntListItemCardStyle: {
		flexBasis: '95%',
		borderWidth: '2px',
	},
}

export default TODOPage
