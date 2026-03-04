import React from 'react'

const SiteFooter = () => {
	return (
		<footer className='footer'>
			<div className='footer-grid'>
				<div className='footer-brand'>
					<div className='footer-logo'>
						<span
							className='material-symbols-outlined'
							style={{ fontSize: 24 }}
						>
							coffee_maker
						</span>
						<span className='footer-title'>Artisanal Coffee</span>
					</div>
					<p className='footer-desc'>
						Bringing you the finest ethically sourced beans from around the
						world. Roasted with care, brewed with love.
					</p>
				</div>
				<div className='footer-nav-col'>
					<h3 className='footer-col-title'>Shop</h3>
					<ul className='footer-links'>
						<li>
							<a href='#'>All Roasts</a>
						</li>
						<li>
							<a href='#'>Subscriptions</a>
						</li>
						<li>
							<a href='#'>Equipment</a>
						</li>
						<li>
							<a href='#'>Gift Cards</a>
						</li>
					</ul>
				</div>
				<div className='footer-nav-col'>
					<h3 className='footer-col-title'>Company</h3>
					<ul className='footer-links'>
						<li>
							<a href='#'>Our Story</a>
						</li>
						<li>
							<a href='#'>Sustainability</a>
						</li>
						<li>
							<a href='#'>Careers</a>
						</li>
						<li>
							<a href='#'>Wholesale</a>
						</li>
					</ul>
				</div>
				<div className='footer-nav-col'>
					<h3 className='footer-col-title'>Stay in the know</h3>
					<p className='footer-desc'>
						Get 10% off your first order when you sign up.
					</p>
					<div className='newsletter-form'>
						<input
							className='email-input'
							placeholder='Enter your email'
							type='email'
						/>
						<button
							className='btn-primary newsletter-submit'
							type='button'
						>
							Join
						</button>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p className='copyright'>
					© 2023 Artisanal Coffee. All rights reserved.
				</p>
				<div className='social-links'>
					<a className='social-link' href='#'>
						<svg
							aria-hidden='true'
							fill='currentColor'
							height='20'
							viewBox='0 0 24 24'
							width='20'
						>
							<path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
						</svg>
					</a>
					<a className='social-link' href='#'>
						<svg
							aria-hidden='true'
							fill='currentColor'
							height='20'
							viewBox='0 0 24 24'
							width='20'
						>
							<path d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378c-.845 0-1.54.695-1.54 1.543 0 .845.695 1.54 1.54 1.54.845 0 1.54-.695 1.54-1.54 0-.848-.695-1.543-1.54-1.543zm-4.69 0c-3.14 0-5.68 2.54-5.68 5.68 0 3.14 2.54 5.68 5.68 5.68 3.14 0 5.68-2.54 5.68-5.68 0-3.14-2.54-5.68-5.68-5.68zm0 1.54c2.29 0 4.14 1.85 4.14 4.14 0 2.29-1.85 4.14-4.14 4.14-2.29 0-4.14-1.85-4.14-4.14 0-2.29 1.85-4.14 4.14-4.14z' />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter

