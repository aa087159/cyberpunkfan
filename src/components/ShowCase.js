import React, { Component } from 'react';
import logo from '../img/page1/logo.jpg';
import characters from '../img/page1/ch2.jpg';
import Preorder2nd from './Preorder2nd';
import xbox from '../img/page1/xbox.jpg';
import ps4 from '../img/page1/ps4.jpg';
import pc from '../img/page1/pc.jpg';
import man from '../img/page1/ch1.jpg';

export class ShowCase extends Component {
	state = {
		clicked: false,
		platform: '',
		country: '',
		regionInfo: [],
		placeSingle: false,
		imageIsReady: false,
	};

	componentDidMount() {
		if (window.innerWidth < 767) {
			this.setState({ placeSingle: true });
		}
		let imageList = [characters, logo, xbox, ps4, pc, man];
		imageList.forEach((image) => {
			new Image().src = image;
		});
	}

	clickHandler = (e) => {
		this.setState({
			clicked: !this.state.clicked,
			platform: e.target.name,
		});
	};

	render() {
		const { clicked, platform, placeSingle } = this.state;
		const { forwardedRef, regionInfo, ...rest } = this.props;
		return (
			<div className='showcase' ref={forwardedRef} {...rest}>
				<nav>
					<button src='http://localhost:3000/'>
						<img src={logo} alt='' />
					</button>
				</nav>

				<div className='main'>
					<div className='showcase-characters'>
						<img src={placeSingle ? man : characters} alt='' />
					</div>
					<div className='dynamics'>
						<div className='dyn left-dyn'></div>
						<div className='dyn middle-dyn'></div>
						<div className='dyn right-dyn'></div>
					</div>

					{clicked ? (
						<div className='preorder-2nd'>
							{Object.keys(
								regionInfo.platform[platform]
							).includes('digital') &&
							Object.keys(regionInfo.platform[platform]).includes(
								'retail'
							) ? (
								<p className='title'>VERSION UND SHOP WÄHLEN</p>
							) : Object.keys(
									regionInfo.platform[platform]
							  ).includes('digital') ? (
								<p className='title'>
									{`IN DER AUSGEWÄHLTEN REGION IST NUR DIE DIGITALVERSION FÜR ${platform} ERHÄLTLICH.`}
								</p>
							) : (
								<p className='title'>
									{`IN DER AUSGEWÄHLTEN REGION IST NUR DIE EinzelhandelVERSION FÜR ${platform} ERHÄLTLICH.`}
								</p>
							)}

							<Preorder2nd
								info={regionInfo.platform[platform]}
								clicked={this.clickHandler}
							/>
						</div>
					) : (
						<div
							className={`preorder ${
								Object.keys(regionInfo.platform).length > 2
									? 'platform-3'
									: Object.keys(regionInfo.platform)
											.length === 2
									? 'platform-2'
									: 'platform-1'
							}`}
						>
							<p className='title'>PLATTFORM WÄHLEN</p>
							{Object.keys(regionInfo.platform).map(
								(platform, i) => (
									<button
										onClick={(e) => this.clickHandler(e)}
										key={i}
										name={platform}
										style={{
											backgroundImage: `url(${
												platform === 'xbox'
													? xbox
													: platform === 'ps4'
													? ps4
													: pc
											})`,
										}}
									></button>
								)
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default ShowCase;
