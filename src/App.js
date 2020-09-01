import React, { Component } from 'react';
import './stye.css';
import ShowCase from './components/ShowCase';
import About from './components/About';
import Characters from './components/Characters';
import Medien from './components/Medien';
import Footer from './components/Footer';
import axios from 'axios';
import regions from './regions.json';

export default class App extends Component {
	state = {
		side: ['Home', 'Über Uns', 'Charakters', 'Medien'],
		placeFixedNav: true,
		country: '',
	};

	componentDidMount() {
		axios
			.get(`https://ipinfo.io?token=${process.env.REACT_APP_TOKEN}`)
			.then((res) => this.setState({ country: res.data.country }))
			.catch((err) => console.log(err));

		if (window.innerWidth < 1440) {
			this.setState({ placeFixedNav: false });
		}
	}

	showcaseRef = React.createRef();
	aboutRef = React.createRef();
	characterRef = React.createRef();
	medienRef = React.createRef();
	footerRef = React.createRef();

	scrollToShowcase = () => {
		window.scrollTo({
			left: 0,
			top: this.showcaseRef.current.offsetTop,
			behavior: 'smooth',
		});
	};
	scrollToAbout = () => {
		window.scrollTo({
			left: 0,
			top: this.aboutRef.current.offsetTop,
			behavior: 'smooth',
		});
	};
	scrollToCharacter = () => {
		window.scrollTo({
			left: 0,
			top: this.characterRef.current.offsetTop + 100,
			behavior: 'smooth',
		});
	};
	scrollToMedien = () => {
		window.scrollTo({
			left: 0,
			top: this.medienRef.current.offsetTop + 100,
			behavior: 'smooth',
		});
	};

	render() {
		const { placeFixedNav } = this.state;
		const ShowCaseRef = React.forwardRef((props, ref) => (
			<ShowCase {...props} forwardedRef={this.showcaseRef}>
				{props.children}
			</ShowCase>
		));
		const AboutRef = React.forwardRef((props, ref) => (
			<About {...props} forwardedRef={this.aboutRef}>
				{props.children}
			</About>
		));
		const CharacterRef = React.forwardRef((props, ref) => (
			<Characters {...props} forwardedRef={this.characterRef}>
				{props.children}
			</Characters>
		));
		const MedienRef = React.forwardRef((props, ref) => (
			<Medien {...props} forwardedRef={this.medienRef}>
				{props.children}
			</Medien>
		));

		let regionInfo;
		for (const key in regions) {
			if (regions[key].abbre === this.state.country) {
				regionInfo = regions[key];
			}
		}

		if (!regionInfo) {
			return null;
		}

		return (
			<div>
				<div className='parallax'>
					{placeFixedNav ? (
						<div className='fixed-nav'>
							<button onClick={() => this.scrollToShowcase()}>
								{'- Home -'}
							</button>
							<button onClick={() => this.scrollToAbout()}>
								{'- Über Uns -'}
							</button>
							<button onClick={() => this.scrollToCharacter()}>
								{'- Charakters -'}
							</button>
							<button onClick={() => this.scrollToMedien()}>
								{'- Medien -'}
							</button>
						</div>
					) : null}

					<ShowCaseRef regionInfo={regionInfo} />
					<AboutRef />
					<CharacterRef />
					<MedienRef />
					<Footer />
				</div>
			</div>
		);
	}
}
