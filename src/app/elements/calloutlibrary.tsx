import { Callout } from "@brianwhaley/pixelated-components";

export function customSunglasses() {
	return (
		<Callout
			url='/customsunglasses' 
			img='/images/customs/blue-splatter-3.jpg'
			title='Customized Sunglasses'
			content='PixelVivid sunglasses offer a wide variety of 
                activewear sunglasses with color splashed, marbled, splattered, 
                dripped and pixeled! Oakley frames are our favorite glasses 
                to paint but we can paint on almost any brand. '
			layout='vertical' />
	);
}

export function photography() {
	return (
		<Callout
			url='/photography' 
			img='https://farm6.staticflickr.com/5682/21652998256_7c5d0ce495_b.jpg'
			title='Stock Photography'
			content='I have converted my passion of Landscape, Macro, and Travel Photography 
            into a budding Stock Photography Portfolio.  Check out my work on 
            iStockPhoto or ShutterStock, or see my books on Blurb or Shutterfly. '
			layout='vertical' />
	);
}

export function homeDesign() {
	return (
		<Callout
			url='/homedesign' 
			img='https://farm66.static.flickr.com/65535/54513221006_5d2117cdf3_b.jpg'
			title='Home Design & Remodeling'
			content='We design a holistic plan for interior and exterior design 
                of homes, including kitchens, bathrooms, bedrooms, 
                color schemes, artwork, garages, patios, decks, and more.'
			layout='vertical' />
	);
}

export function sunglassStore(){
	return (
		<Callout
			url='/store'
			img='/images/customs/neon-splatter.jpg'
			title='Custom Sunglasses Store'
			content='View some cutomized Oakley sunglasses available for purchase.'
			layout='vertical' />
	);
}

export function subscribe() {
	return (
		<Callout
			url='/subscribe'
			img='/images/icons/email-icon.png'
			title='Subscribe'
			content='Subscribe for updates and announcements about new products, 
				launches, events, and upcoming drops.'
			layout='vertical'
			shape="round" />
	);
}

export function specialOrder() {
	return (
		<Callout
			url='/request'
			img='/images/icons/request-icon.jpg'
			title='Special Sunglass Orders'
			content='Pixelvivid can co-create a personalized pair of 
                really cool sunglasses with you! The artistic design of 
                your sunglasses can include one color, or a combination of 
                complimentary colors. Paint designs can be smaller or larger, 
                thin or thick, dense or sparse. Your special order sunglasses 
                are personal and vivid!'
			layout='vertical' />
	);
}

export function sustainabilityMessage() {
	return (
		<Callout
			url={undefined}
			img='/images/icons/globe-icon.png'
			title='Sustainability Message'
			content='By purchasing PixelVivid custom painted 
                sunglasses, you are supporting “creative upcycling”, 
				a form of waste reduction that focuses on extending 
				the life of materials by giving them a new purpose through 
				artistic and innovative means.  
                PixelVivid encourages a culture that reconnects and reuses 
                a quality product with a new and artistic aesthetic applied. 
				We are happy to creative-upcycle quality sunglass frames from 
				Oakley, Ray Ban, Costa del Mar, and more. Many of the frames 
				are vintage and are no longer manufactured but bring back 
				great times and great memories! Now, they are reborn at PixelVivid for you.  
                Thank you for choosing a better product for our planet!'
			layout='horizontal' />
	);
}