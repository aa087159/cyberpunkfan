import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class Videos extends Component {
	state = {
		links: [
			'cj5CboGivGs',
			'L58a8qgG8U0',
			'8X2kIfS6fb8',
			'vjF9GgrY9c0',
			'P99qJGrPNLs',
			'ILiN5JV6_yA',
			'4mHtqaiG_4o',
		],
	};
	render() {
		const settings = {
			customPaging: function (i) {
				return (
					<img
						src={`/images/thumb${i + 1}.jpg`}
						alt=''
						className='thumb'
					/>
				);
			},
			dots: true,
			dotsClass: 'slick-dots slick-thumb',
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		};
		const { links } = this.state;
		return (
			<div className='video'>
				<Slider {...settings}>
					{links.map((each, i) => {
						return (
							<iframe
								key={i}
								title='video'
								width='560'
								height='560'
								src={`https://www.youtube.com/embed/${each}`}
								frameBorder='0'
								allowFullScreen
								name='iframe_video1'
							></iframe>
						);
					})}
				</Slider>
			</div>
		);
	}
}

export default Videos;
