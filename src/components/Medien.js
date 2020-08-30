import React, { Component } from 'react';
import Videos from './Videos';
import MediaModule from './MediaModule';

export class Medien extends Component {
	state = {
		options: ['videos', 'screenshots', 'wallpapers', 'concept art'],
		video: true,
		screenshots: false,
		wallpapers: false,
		conceptArt: false,
		optionState: {
			video: true,
			screenshots: false,
			wallpapers: false,
			conceptArt: false,
		},
	};

	moduleOpen = (e) => {
		let options = ['video', 'screenshots', 'wallpapers', 'conceptArt'];
		let tempOptionState = { ...this.state.optionState };
		Object.keys(tempOptionState).forEach(
			(each) => (tempOptionState[each] = false)
		);
		tempOptionState[e.target.name] = true;
		this.setState({
			[e.target.name]: true,
			optionState: tempOptionState,
		});

		let index = options.indexOf(e.target.name);
		options.splice(index, 1);
		options.map((each) => {
			return this.setState({ [each]: false });
		});
	};

	render() {
		const {
			options,
			video,
			screenshots,
			wallpapers,
			conceptArt,
			optionState,
		} = this.state;
		const ca = [
			{
				src: '/images/ca/ca1.jpg',
				thumbnail: '/images/ca/ca1.jpg',
				thumbnailWidth: 400,
				thumbnailHeight: 200,
			},
		];
		for (let i = 0; i < 3; i++) {
			ca.push({
				src: `/images/ca/ca${i + 2}.jpg`,
				thumbnail: `/images/ca/ca${i + 2}.jpg`,
				thumbnailWidth: 320,
				thumbnailHeight: 212,
			});
		}
		const scr = [
			{
				src: '/images/scr/scr1.jpg',
				thumbnail: '/images/scr/scr1.jpg',
				thumbnailWidth: 400,
				thumbnailHeight: 200,
			},
		];
		for (let i = 0; i < 11; i++) {
			scr.push({
				src: `/images/scr/scr${i + 2}.jpg`,
				thumbnail: `/images/scr/scr${i + 2}.jpg`,
				thumbnailWidth: 320,
				thumbnailHeight: 212,
			});
		}
		const wp = [
			{
				src: '/images/scr/scr1.jpg',
				thumbnail: '/images/scr/scr1.jpg',
				thumbnailWidth: 400,
				thumbnailHeight: 200,
			},
		];
		for (let i = 0; i < 11; i++) {
			wp.push({
				src: `/images/wp/wp${i + 2}.jpg`,
				thumbnail: `/images/wp/wp${i + 2}.jpg`,
				thumbnailWidth: 320,
				thumbnailHeight: 212,
			});
		}
		const { forwardedRef, ...rest } = this.props;

		return (
			<div className='medien' ref={forwardedRef} {...rest}>
				<div className='options'>
					{Object.keys(optionState).map((each, i) => {
						// console.log(each);
						// console.log(optionState[each]);
						return (
							<button
								key={i}
								className='medien-button'
								onClick={(e) => this.moduleOpen(e)}
								name={each}
								style={{
									backgroundColor:
										optionState[each] === true
											? 'yellow'
											: 'transparent',
									color:
										optionState[each] === true
											? 'black'
											: 'yellow',
								}}
							>
								{options[i]}
							</button>
						);
					})}
				</div>

				{video ? <Videos /> : null}
				{screenshots ? <MediaModule pics={scr} /> : null}
				{wallpapers ? <MediaModule pics={wp} /> : null}
				{conceptArt ? <MediaModule pics={ca} /> : null}
			</div>
		);
	}
}

export default Medien;
