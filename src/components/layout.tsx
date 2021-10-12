import React, { useCallback } from 'react'
import Header from './header'
// import Navbar from './navbar'
// import Footer from './footer'
import { Affix, Button, Layout as AntdLayout } from 'antd'
import { UpOutlined } from '@ant-design/icons'

const { Content } = AntdLayout

const Layout: React.FC = ({ children }) => {
	const scrollTopHandler = useCallback((e: React.MouseEvent) => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<div style={Style}>
			<Header />
			{/* <Navbar /> */}
			<Content>{children}</Content>
			{/* <Footer /> */}
			<Affix offsetBottom={0} style={AffixStyle}>
				<Button
					type="primary"
					icon={<UpOutlined />}
					onClick={scrollTopHandler}
				/>
			</Affix>
		</div>
	)
}

const Style: React.CSSProperties = {
	background: 'rgb(255, 255, 255)',
	// background: '#ececec',
}

const AffixStyle: React.CSSProperties = {
	position: 'fixed',
	bottom: '10px',
	right: '10px',
}

export default Layout
