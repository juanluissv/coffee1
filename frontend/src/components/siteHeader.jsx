import React from 'react'
import { useNavigate } from 'react-router-dom'

const SiteHeader = () => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/')
	}
	return (
		<div className='sticky-nav'>
			<div className='nav-container'>
				<header className='header'>
					<div className='logo-area'>
						<div className='logo-icon' onClick={handleClick} style={{ cursor: 'pointer' }}>
							<span
								className='material-symbols-outlined'
								style={{ fontSize: 32 }}
							>
								coffee_maker
							</span>
						</div>
						<h2 className='site-title' onClick={handleClick} style={{ cursor: 'pointer' }}>Artisanal Coffee</h2>
					</div>
					<div className='nav-links-container'>
						<nav className='nav-menu'>
							<a className='nav-link' href='#'>
								Shop
							</a>
							<a className='nav-link' href='#'>
								Subscriptions
							</a>
							<a className='nav-link' href='#'>
								Our Story
							</a>
							<a className='nav-link' href='#'>
								Wholesale
							</a>
						</nav>
						<div className='icon-group'>
							<button className='icon-button' type='button'>
								<span
									className='material-symbols-outlined'
									style={{ fontSize: 20 }}
								>
									search
								</span>
							</button>
							<button className='icon-button' type='button'>
								<span
									className='material-symbols-outlined'
									style={{ fontSize: 20 }}
								>
									shopping_bag
								</span>
							</button>
							<button className='icon-button' type='button'>
								<span
									className='material-symbols-outlined'
									style={{ fontSize: 20 }}
								>
									account_circle
								</span>
							</button>
						</div>
					</div>
				</header>
			</div>
		</div>
	)
}

export default SiteHeader

