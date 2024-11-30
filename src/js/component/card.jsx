import React from "react";

const Card = () => {
    return(<>
    <div>
		<h3 className="pageCardTitle"><strong>FEATURED COLLECTIONS</strong></h3>
	</div>
		<div className="card">
			<div className="cardOne">
				<img src="https://snugglebugz.ca/cdn/shop/files/HU-First-Classic-Boots-Hunter-Classic-Black-1-WEB_282_29.jpg?crop=center&height=800&v=1689008341&width=800" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title"><strong>The originals</strong></h5>
				</div>
				<div className="card-body">
					<a href="https://hunterboots.co.uk/collections/the-originals" className="card-link">Pinche aquí</a>
				</div>
			</div>
			<div className="cardTwo">
				<img src="https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/09/1024x1024/square-1456847458-hunter-boots.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title"><strong>The apparel</strong></h5>
				</div>
				<div className="card-body">
					<a href="https://hunterboots.co.uk/collections/apparel" className="card-link">Pinche aquí</a>
				</div>
			</div>
			<div className="cardThree">
				<img src="https://myhomefarm.co.uk/wp-content/uploads/2019/10/IMG_2229-scaled.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title"><strong>Kids</strong></h5>
				</div>
				<div className="card-body">
					<a href="https://hunterboots.co.uk/collections/kids" className="card-link">Pinche aquí</a>
				</div>
			</div>
			<div className="cardFour">
				<img src="https://assets.olapic-cdn.com/media/9/y/i/9yidob5/normal.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title"><strong>Accesories</strong></h5>
				</div>
				<div className="card-body">
					<a href="https://hunterboots.co.uk/collections/accessories" className="card-link">Pinche aquí</a>
				</div>
			</div>
			<div className="cardFive">
				<img src="https://www.stellamccartney.com/dw/image/v2/BCWD_PRD/on/demandware.static/-/Library-Sites-StellaMcCartneySharedLibrary/default/dwb9cb6d10/images/SW/DiscoverStellaxHunterBoots/SW_Hunter_Mobile_1586x1586.jpg?sw=1040&sh=1040" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title"><strong>Women</strong></h5>
				</div>
				<div className="card-body">
					<a href="https://hunterboots.co.uk/collections/womens" className="card-link">Pinche aquí</a>
				</div>
			</div>
		</div>
    </>)
}

export default Card;