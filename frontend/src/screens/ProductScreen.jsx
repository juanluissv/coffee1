import React, { useState, useMemo, useEffect } from 'react'
import './HomeScreen.css'
import './ProductScreen.css'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import { Link, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../slices/ProductApiSlice'

const GRIND_OPTIONS = ['Whole Bean', 'Drip', 'Espresso']
const SIZE_OPTIONS = ['12oz', '2lb', '5lb']

const parsePriceToNumber = (priceStr) => {
	if (!priceStr || typeof priceStr !== 'string') return 0
	const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''), 10)
	return Number.isNaN(num) ? 0 : num
}

const formatPrice = (num) => `$${num.toFixed(2)}`

const getRoastFilledBars = (tag) => {
	if (!tag) return 0
	const t = tag.toLowerCase()
	if (t.includes('light') && !t.includes('medium')) return 1
	if (t.includes('light') && t.includes('medium')) return 2
	if (t.includes('medium') && !t.includes('dark') && !t.includes('light')) return 3
	if (t.includes('medium') && t.includes('dark')) return 4
	if (t.includes('dark')) return 5
	return 2
}

const ProductScreen = () => {
	const { id } = useParams()
	const { data: product, isLoading, error } = useGetProductByIdQuery(id)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [id])

	const [selectedImageIndex, setSelectedImageIndex] = useState(0)
	const [selectedGrind, setSelectedGrind] = useState(null)
	const [selectedSize, setSelectedSize] = useState(null)
	const [purchaseType, setPurchaseType] = useState('subscribe')
	const [quantity, setQuantity] = useState(1)

	const productImages = useMemo(() => {
		if (!product?.image) return []
		return [product.image]
	}, [product?.image])

	const flavorNotes = useMemo(() => {
		if (!product?.notes) return []
		return product.notes
			.split(/[&,]/)
			.map((s) => s.trim())
			.filter(Boolean)
	}, [product?.notes])

	const priceNum = useMemo(
		() => parsePriceToNumber(product?.price),
		[product?.price]
	)
	const subscribePriceNum = priceNum * 0.85
	const roastFilledBars = useMemo(
		() => getRoastFilledBars(product?.tag),
		[product?.tag]
	)

	const handleQtyDecrement = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
	}

	const handleQtyIncrement = () => {
		setQuantity((prev) => prev + 1)
	}

	if (isLoading) {
		return (
			<div className='site-wrapper'>
				<SiteHeader />
				<main className='product-detail-page is-loading'>
					<div className='product-detail-loading'>
						<div className='loading-skeleton loading-breadcrumbs' />
						<div className='product-grid'>
							<div className='loading-skeleton loading-gallery' />
							<div className='product-info'>
								<div className='loading-skeleton loading-title' />
								<div className='loading-skeleton loading-price' />
								<div className='loading-skeleton loading-roast' />
								<div className='loading-skeleton loading-options' />
							</div>
						</div>
					</div>
				</main>
				<SiteFooter />
			</div>
		)
	}

	if (error || !product) {
		return (
			<div className='site-wrapper'>
				<SiteHeader />
				<main className='product-detail-page'>
					<div className='product-detail-error'>
						<p>
							{error?.data?.message || error?.message || 'Product not found.'}
						</p>
						<Link to='/'>Back to Shop</Link>
					</div>
				</main>
				<SiteFooter />
			</div>
		)
	}

	return (
		<div className='site-wrapper'>
			<SiteHeader />

			<main className='product-detail-page'>
				<nav className='breadcrumbs'>
					<Link to='/'>Home</Link>
					<span> / </span>
					<Link to='/'>Shop</Link>
					<span> / </span>
					<span>{product.title}</span>
				</nav>

				<div className='product-grid'>
					<div className='gallery-container'>
						<div className='main-image-container'>
							<img
								src={productImages[selectedImageIndex] || product.image}
								alt={`${product.title} - product view`}
							/>
						</div>
						{productImages.length > 1 && (
							<div className='thumbnail-grid'>
								{productImages.map((src, index) => (
									<button
										key={index}
										type='button'
										className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
										onClick={() => setSelectedImageIndex(index)}
									>
										<img src={src} alt={`Thumbnail ${index + 1}`} />
									</button>
								))}
							</div>
						)}
					</div>

					<div className='product-info'>
						<div>
							<span className='badge'>{product.tag}</span>
							<h1 className='product-title'>{product.title}</h1>
							<p className='product-price'>{product.price}</p>
						</div>

						<div className='roast-section'>
							<h3>
								Roast Level: <span>{product.tag}</span>
							</h3>
							<div className='roast-indicator'>
								{[0, 1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className={`roast-bar ${i < roastFilledBars ? 'filled' : ''}`}
									/>
								))}
							</div>
						</div>

						{flavorNotes.length > 0 && (
							<div className='flavor-notes'>
								{flavorNotes.map((note, index) => (
									<div key={index} className='flavor-item'>
										<div className='flavor-icon'>
											<span
												className='material-symbols-outlined'
												style={{ color: '#11d452' }}
											>
												eco
											</span>
										</div>
										<span className='flavor-text'>{note}</span>
									</div>
								))}
							</div>
						)}

						<div className='options-divider'>
							<div>
								<label className='option-label'>Grind Type</label>
								<div className='btn-group'>
									{GRIND_OPTIONS.map((opt) => (
										<button
											key={opt}
											type='button'
											className={`btn-option ${selectedGrind === opt ? 'selected' : ''}`}
											onClick={() => setSelectedGrind(opt)}
										>
											{opt}
										</button>
									))}
								</div>
							</div>
							<div>
								<label className='option-label'>Bag Size</label>
								<div className='btn-group'>
									{SIZE_OPTIONS.map((opt) => (
										<button
											key={opt}
											type='button'
											className={`btn-option ${selectedSize === opt ? 'selected' : ''}`}
											onClick={() => setSelectedSize(opt)}
										>
											{opt}
										</button>
									))}
								</div>
							</div>
						</div>

						<div className='purchase-options'>
							<button
								type='button'
								className={`purchase-card ${purchaseType === 'one-time' ? 'active' : ''}`}
								onClick={() => setPurchaseType('one-time')}
							>
								<div className='card-content'>
									<div className='radio-circle'>
										{purchaseType === 'one-time' && <div className='radio-dot' />}
									</div>
									<div>
										<p className='purchase-title'>One-time purchase</p>
										<p className='purchase-subtitle'>
											{product.price} per bag
										</p>
									</div>
								</div>
							</button>
							<button
								type='button'
								className={`purchase-card ${purchaseType === 'subscribe' ? 'active' : ''}`}
								onClick={() => setPurchaseType('subscribe')}
							>
								<div className='card-content'>
									<div className='radio-circle'>
										{purchaseType === 'subscribe' && <div className='radio-dot' />}
									</div>
									<div>
										<p className='purchase-title'>Subscribe &amp; Save (15%)</p>
										<p className='purchase-subtitle'>Delivered every 4 weeks</p>
									</div>
								</div>
								<span className='purchase-price'>
									{formatPrice(subscribePriceNum)}
								</span>
							</button>
						</div>

						<div className='cart-section'>
							<div className='quantity-picker'>
								<button
									className='qty-btn'
									type='button'
									onClick={handleQtyDecrement}
								>
									−
								</button>
								<span className='qty-value'>{quantity}</span>
								<button
									className='qty-btn'
									type='button'
									onClick={handleQtyIncrement}
								>
									+
								</button>
							</div>
							<button className='add-to-cart-btn' type='button'>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</main> <br /> <br /> <br /><br />

			<SiteFooter />
		</div>
	)
}

export default ProductScreen
