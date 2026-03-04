import React from 'react'
import './HomeScreen.css'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import featuredRoasts from '../data/featuredRoasts.json'
import { useGetProductsQuery } from '../slices/ProductApiSlice'

const HomeScreen = () => {
	const { data: products, isLoading, error } = useGetProductsQuery()

	console.log(products)

	return (
		<div className='site-wrapper'>
			<SiteHeader />

			<HeroSection />

			<div className='main-content'>
				<div className='content-container'>
					<div className='section-header'>
						<h2 className='section-title'>Featured Roasts</h2>
						<p className='section-description'>
							Discover our most popular single-origin beans and signature
							blends, roasted to perfection in small batches.
						</p>
					</div>

					<div className='filter-container'>
						<div className='filter-bar'>
							<button
								className='filter-btn active'
								type='button'
							>
								All Roasts
							</button>
							<button
								className='filter-btn inactive'
								type='button'
							>
								Light
							</button>
							<button
								className='filter-btn inactive'
								type='button'
							>
								Medium
							</button>
							<button
								className='filter-btn inactive'
								type='button'
							>
								Dark
							</button>
							<button
								className='filter-btn inactive'
								type='button'
							>
								Decaf
							</button>
						</div>
					</div>

					<div className='product-grid'>
						{products?.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<div className='promo-banner'>
						<div className='banner-content'>
							<span className='banner-badge'>Subscribe &amp; Save</span>
							<h2 className='banner-title'>Never run out again</h2>
							<p className='banner-text'>
								Join our coffee club and get freshly roasted beans delivered to
								your doorstep. Save 15% on every order and enjoy free shipping.
							</p>
							<div>
								<button className='btn-primary' type='button'>
									Start Subscription
								</button>
							</div>
						</div>
						<div className='banner-image-container'>
							<div
								className='banner-img'
								style={{
									backgroundImage:
										'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJCpQf0w9cYayizKPu-T_OHsasoN-UySC0J9A6s96rHx15DLiuf12PvzJXr6gKCqqZgUtpOZ9EKq0AH3YK8veAwX2ySdX0JYEcUTY-w-L23IUBtnDTUGU4qm9yrD5Wqo7PhN0C6MYDMNgKd8tms785HCJkLkWx1heLzDTlbcjCHk0d8CDCJnKdisQpKlM316hd-CMyMFTVhpYdVj3BbYkLw86Bdby1zRA1kQwkqQhXWlnXQXEgrzURI4yfRksBVS9VpFY7h5VPJgz9")',
								}}
							/>
						</div>
					</div>

					<div className='story-section'>
						<div className='story-image-wrapper'>
							<div
								className='story-image'
								style={{
									backgroundImage:
										'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRcR5LZnA0Z3-neNNVJzZb5yb8XDWqUzgKo-lFMRtGPibDMnO39Qr2YgT8PKPyyPfWpQouAEJpjexfQ90ABN2WUZamogR5roPmnOYn9OYeglHhqepoQqZjYfV2K1p_eE4nrK-YKGepO0_45XEf5sZMXjTZ6cl37l1COPWJJOcMJFpskJjNqRagM7R0mY7yWdIjrRuzp-7uul9Stx92WYR-Fpm9GCuFfm7LYYwo-AKQXXYoTY0ok_LRRDNy-qtqlTPY2ciZST7sZu_9")',
								}}
							/>
						</div>
						<div className='story-content'>
							<h2 className='story-title'>Rooted in Good</h2>
							<div className='accent-bar' />
							<p className='story-p'>
								We believe great coffee starts at the source. That&apos;s why we
								partner directly with farmers who share our commitment to
								sustainable agriculture and fair labor practices.
							</p>
							<p className='story-p'>
								Every bean is hand-selected and roasted in small batches to bring
								out its unique character. When you drink our coffee, you&apos;re
								supporting a global community of growers.
							</p>
							<div>
								<a className='story-link' href='#'>
									Read our full story
									<span
										className='material-symbols-outlined'
										style={{ fontSize: 14 }}
									>
										arrow_forward
									</span>
								</a>
							</div>
						</div>
					</div>

					<div className='testimonials-section'>
						<h2
							style={{
								textAlign: 'center',
								fontSize: '1.5rem',
								fontWeight: 700,
								marginBottom: '2rem',
							}}
						>
							What Our Community Says
						</h2>
						<div className='testimonials-grid'>
							<div className='testimonial-card'>
								<div className='star-rating'>
									{Array.from({ length: 5 }).map((_, index) => (
										<span
											key={index}
											className='material-symbols-outlined'
											style={{ fontSize: 20 }}
										>
											star
										</span>
									))}
								</div>
								<p className='testimonial-text'>
									The best coffee I&apos;ve ever had. The Ethiopian roast is
									incredibly smooth with distinct blueberry notes. My morning
									ritual is forever changed.
								</p>
								<div className='author-info'>
									<div
										className='author-avatar'
										style={{
											backgroundImage:
												'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMWQcMQKwXiwLa6SzPGM24LdW_ZzJZh4j-AhjMUcKlyJI08X_09eCcZtDHg1iRvLz6S6FpD0fCqOdu-KXPGXSLcpTbwA94ZDmc5NXf6ISiGwWPVqGw7sgQEiaSwPe7u_PF8uhjF-Swm1__lbV_TiXSYFG9MVew9j66L3p8BOEuRmyL_NRn9G7Qu5D1iQN0sXAd6W3Lknz_n47aWxvlctiSy5HsS_014RZta1OwYLARafAzfe-qxzTwhBPCHxOu2ZEx1vaTvaH11Vvl")',
										}}
									/>
									<div>
										<p className='author-name'>Sarah M.</p>
										<p className='author-role'>Verified Buyer</p>
									</div>
								</div>
							</div>

							<div className='testimonial-card'>
								<div className='star-rating'>
									{Array.from({ length: 5 }).map((_, index) => (
										<span
											key={index}
											className='material-symbols-outlined'
											style={{ fontSize: 20 }}
										>
											star
										</span>
									))}
								</div>
								<p className='testimonial-text'>
									Subscription service is a lifesaver. Fresh beans arrive right
									when I need them, and the packaging keeps them perfectly fresh.
								</p>
								<div className='author-info'>
									<div
										className='author-avatar'
										style={{
											backgroundImage:
												'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp21rz_XkYzEJYzofm_FlsyMOJ7pJngBdDDUGkXCRgbyCw7vDH4snn7ykIPeIi2PYpdafMzhk4jc1K23SJ7HWxbpLBoLgH76I-K3bjmzMaHbqTjqYBw_oeNX7-sqd0YJ3o-w4MqPXANdAxvJfEcNnv7-URY1lLqVXuvvRMxwpHYk1_CqLFskGvQEEvizDtMRsKQC9VuA0-XR6IJu7Opm7bei_V9HjFPcQ6qHAUDgX5nZHJ8cBZRwt1Wm6KF9uSrB-2B_y6d8yvahZ3")',
										}}
									/>
									<div>
										<p className='author-name'>James L.</p>
										<p className='author-role'>Subscriber since 2021</p>
									</div>
								</div>
							</div>

							<div className='testimonial-card'>
								<div className='star-rating'>
									{[0, 1, 2, 3, 4].map((index) => (
										<span
											key={index}
											className='material-symbols-outlined'
											style={{ fontSize: 20 }}
										>
											{index < 4 ? 'star' : 'star_half'}
										</span>
									))}
								</div>
								<p className='testimonial-text'>
									I love the transparency about where the beans come from. It
									feels good to support a brand that cares about sustainability.
								</p>
								<div className='author-info'>
									<div
										className='author-avatar'
										style={{
											backgroundImage:
												'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCW9Ui_JlEvDHZJqyVxJotbYsDl27ZmokPrQBeaScR8zeiLk9WzX8dnjpaBsjek3gdM6atEoTBJysS9ZAJ6hYwahFLxeodwO7829eoFAYsuATRZYvmG53bYhUZ6Lqayfqko2rBQsz_YFVUUCOIpbi95v_IJZzOHgOZsSZwwcG8Q0tzT4b_AoL5_I_7VjStzxvbFWBj6X2df7JfTdPoLVAIXl1n1_Ao8Nykhf-6dVTgJ4zKAjhfTx7jwlCX5Bo2jLHfc-o5yPZvmAaz7")',
										}}
									/>
									<div>
										<p className='author-name'>Elena R.</p>
										<p className='author-role'>Verified Buyer</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SiteFooter />
		</div>
	)
}

export default HomeScreen







//  @components/ui/button.tsx
// /Generate Cursor Rules
// I want to generate a cursor rule for this React component. Please analyze it carefully and outline all of the conventions found. Output as one rule file only.
