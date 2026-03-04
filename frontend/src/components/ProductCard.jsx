import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

	//make a link to the product screen
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/product/${product._id}`)
	}

	const { title, tag, notes, price, image } = product

	return (
		<div className='product-card' onClick={handleClick}>
			<div className='product-image-wrapper'>
				<div
					className='product-image'
					style={{ backgroundImage: `url("${image}")` }}
				/>
				<div className='roast-tag'>{tag}</div>
			</div>
			<div className='product-info'>
				<h3 className='product-title'>{title}</h3>
				<p className='product-notes'>{notes}</p>
				<div className='product-footer'>
					<span className='product-price'>{price}</span>
					<button className='add-to-cart' type='button'>
						<span
							className='material-symbols-outlined'
							style={{ fontSize: 20 }}
						>
							add_shopping_cart
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
