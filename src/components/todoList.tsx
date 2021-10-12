import React from 'react'
import { List, Card, Checkbox } from 'antd'
// import InfiniteScroll from 'react-infinite-scroller'
import { TODO } from '../model/todo'
import TODOItem from './todoItem'

interface Props {
	todos: TODO[]
}

const TODOList: React.VFC<Props> = ({ todos }) => {
	return (
		<Card
			title={`未完了 ${todos.length}件`}
			style={styles.ListCard}
			headStyle={styles.ListCardHead}
			bodyStyle={styles.ListCardBody}
		>
			{/* <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}> */}
			<List
				style={styles.List}
				bordered
				dataSource={todos}
				renderItem={(todo) => (
					<List.Item key={todo.id} style={styles.ListItem}>
						<TODOItem todo={todo} />
					</List.Item>
				)}
			/>
			{/* </InfiniteScroll> */}
		</Card>
	)
}

const styles: { [key: string]: React.CSSProperties } = {
	List: {
		background: '#ffffff',
	},
	ListCard: {
		marginTop: '30px',
	},
	ListCardHead: {
		background: '#ececec',
	},
	ListCardBody: {
		background: '#ffffff',
		padding: '0px',
		msTransformOrigin: '0px',
	},
	ListItem: {
		paddingTop: '8px',
		paddingBottom: '8px',
	},
}

export default TODOList
