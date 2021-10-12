import React from 'react'
import { Card, Checkbox, Button, Typography } from 'antd'
// import InfiniteScroll from 'react-infinite-scroller'
import { TODO } from '../model/todo'

const { Text } = Typography

interface Props {
	todo: TODO
}

const TODOItem: React.VFC<Props> = ({ todo }) => {
	return (
		<div style={styles.Container}>
			<div style={styles.CheckBoxContainer}>
				<Checkbox style={styles.CheckBox} />
			</div>
			<Card
				title={
					<div style={styles.CardTitleContainer}>
						<div>
							<Text style={styles.Subject}>{todo.subject}</Text>
							<Text type="secondary" style={styles.Date}>
								{todo.updatedAt}
							</Text>
						</div>
						<div style={styles.ButtonContainer}>
							<Button>修正</Button>
							<Button>削除</Button>
						</div>
					</div>
				}
				style={styles.Card}
				headStyle={styles.CardHead}
				bodyStyle={todo.description ? styles.CardBody : styles.CardBodyEmpty}
			>
				{`${todo.description}`}
			</Card>
		</div>
	)
}

const styles: { [key: string]: React.CSSProperties } = {
	Container: {
		width: '100%',
		borderWidth: '2px',
		display: 'flex',
	},
	CheckBoxContainer: {
		flexBasis: '5%',
		background: '#ececec',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	CheckBox: {},
	Card: {
		flexBasis: '95%',
		borderWidth: '2px',
	},
	CardHead: {
		// padding: '0px 24px',
	},
	CardTitleContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	Subject: {
		fontSize: '20px',
	},
	Date: {
		marginLeft: '30px',
		fontSize: '12px',
	},
	ButtonContainer: {
		display: 'flex',
		gap: '8px',
	},
	CardBody: {
		padding: '12px 24px',
	},
	CardBodyEmpty: {
		padding: '0px',
	},
}

export default TODOItem
