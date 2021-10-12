import React from 'react'
import { Menu, Layout } from 'antd'

const Header: React.FC = ({ children }) => {
	return (
		<Layout.Header>
			<div style={LogoStyle} />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				{new Array(15).fill(null).map((_, index) => {
					const key = index + 1
					return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
				})}
			</Menu>
		</Layout.Header>
	)
}

const LogoStyle: React.CSSProperties = {
	float: 'left',
	width: '120px',
	height: '31px',
	margin: '16px 24px 16px 0',
	background: 'rgb(255, 255, 255)',
}

export default Header
