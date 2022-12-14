import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import { colors } from '../constants/Colors'
import Personas from './Personas'
import BrushIcon from '@mui/icons-material/Brush';
import Responsive from './Responsive'

const drawerWidth = 240

function Home(props) {
	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const projects = [
		// {
		// 	title: 'Personas',
		// 	icon: <PersonSearchIcon style={{ color: colors.text }} />
		// },
		{
			title: 'Responsive Redesign',
			icon: <BrushIcon style={{ color: colors.text }} />
		}
	]

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{projects.map((item, index) => (
					<ListItem key={item.title} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.title} style={{ color: colors.text }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	)

	const container = window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex', backgroundColor: colors.background }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					backgroundColor: colors.main
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Personas & Storyboarding
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: colors.secondary },
						backgroundColor: colors.background
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: colors.secondary },
						backgroundColor: colors.background
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					// flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					backgroundColor: colors.background,
					height: 'auto',
					paddingBottom: '100px'
				}}
			>
				<Toolbar />
				{/* <Personas /> */}
				<Responsive />
			</Box>
		</Box>
	)
}

Home.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func
}

export default Home
