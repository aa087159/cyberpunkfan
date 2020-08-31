import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Gallery from 'react-grid-gallery';

const getConfigurable = () => ({
	showArrows: true,
	showStatus: true,
	showIndicators: false,
	showThumbs: false,
	autoPlay: false,
	infiniteLoop: true,
	swipeable: false,
	dynamicHeight: false,
	emulateTouch: true,
});

export class MediaModule extends Component {
	render() {
		const { pics } = this.props;

		let slide;
		let slideArr = [];
		if (pics.length <= 6) {
			slide = 1;
		} else {
			slide = Math.ceil(pics.length / 6);
		}
		for (let i = 0; i < slide; i++) {
			slideArr.push(1);
		}
		return (
			<div className='screenshots'>
				<Carousel
					{...getConfigurable()}
					statusFormatter={(current, total) => (
						<>
							<span className='red-status'>{` 0${current} / 0${total} `}</span>{' '}
						</>
					)}
				>
					{slideArr.map((each, i) => {
						return (
							<Gallery
								key={i}
								images={this.props.pics.slice(
									i * 6,
									(i + 1) * 6
								)}
							/>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

export default MediaModule;
