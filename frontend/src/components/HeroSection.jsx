import React from 'react'

const HeroSection = () => {
	const heroBackgroundImage =
		'linear-gradient(rgba(16, 34, 22, 0.35) 0%, rgba(16, 34, 22, 0.54) 100%), url("https://t3.ftcdn.net/jpg/01/94/82/86/360_F_194828624_llDpKzFNYmi6cfHVF8GOOoAe5KTJlc9N.jpg")'

	return (
		<div
			className='hero-section'
			style={{ backgroundImage: heroBackgroundImage }}
		>
			<div className='hero-content'>
				<h1 className='hero-title'>Craft Coffee, Delivered Fresh</h1>
				<h2 className='hero-subtitle'>
					Ethically sourced, small-batch roasted beans for the perfect morning
					ritual. Start your day with the finest artisanal blends.
				</h2>
			</div>
			<div className='hero-actions'>
				<button className='btn-primary' type='button'>
					Shop All Roasts
				</button>
				<button className='btn-secondary' type='button'>
					Our Story
				</button>
			</div>
		</div>
	)
}

export default HeroSection
