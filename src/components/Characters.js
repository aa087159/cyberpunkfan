import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { boolean, number } from '@storybook/addon-knobs';
import v from '../img/page2/V2.jpg';
import Silver from '../img/page2/S2.jpg';
import Jackie from '../img/page2/J2.jpg';

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';

const getConfigurableProps = () => ({
	showArrows: boolean('showArrows', false, tooglesGroupId),
	showStatus: boolean('showStatus', true, tooglesGroupId),
	showIndicators: boolean('showIndicators', false, tooglesGroupId),
	showThumbs: boolean('showThumbs', false, tooglesGroupId),
	autoPlay: boolean('autoPlay', false, tooglesGroupId),
	infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
	swipeable: boolean('swipeable', true, tooglesGroupId),
	dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
	emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
	swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
});

export class Medien extends Component {
	state = {
		characters: ['V', 'Johnny Silverhand', 'Jackie Welles'],
		imgs: [v, Silver, Jackie],
		descriptions: [
			'V ist der vom Spieler kontrollierte Protagonist der bevorstehendes Videospiel Cyberpunk 2077. Vs Geschlecht, Aussehen, Fähigkeiten und Geschichte sind alle anpassbar und wirken sich auf die Geschichte aus.',
			'Johnny Silverhand ist eine zentrale Figur in der gesamten Cyberpunk-Serie sowie ein einflussreicher Rockerboy und der Sänger der Band Samurai. Es wurde bekannt gegeben, dass Johnny im kommenden Cyberpunk 2077 von Keanu Reeves gespielt wird.',
			'Jackie Welles ist eine Figur aus dem kommenden Videospiel Cyberpunk 2077. Er ist einer der ersten Ansprechpartner von V sowie der Partner des Spielers während mehrerer Missionen. Er spricht Spanisch und liebt Aasfresser nicht.',
		],
		more: ['V_(Character)', 'Johnny_Silverhand', 'Jackie_Welles'],
	};

	render() {
		const { characters, descriptions, imgs, more } = this.state;
		const { forwardedRef, ...rest } = this.props;
		return (
			<div className='character' ref={forwardedRef} {...rest}>
				<Carousel
					{...getConfigurableProps()}
					statusFormatter={(current, total) => (
						<>
							<span className='red-status'>{` 0${current} / 0${total} `}</span>{' '}
						</>
					)}
					className='carousel'
				>
					{characters.map((each, i) => {
						return (
							<div className='character-main' key={i}>
								<div className='intro'>
									<h1>{characters[i]}</h1>
									<p>{descriptions[i]}</p>
									<button className='more_link'>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={`https://cyberpunk.fandom.com/wiki/${more[i]}`}
										>
											Mehr
										</a>
									</button>
								</div>
								<div className='pic'>
									<img src={imgs[i]} alt='' />
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

export default Medien;
