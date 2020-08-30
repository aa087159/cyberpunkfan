import React, { Component } from 'react';
import './stye.css';
import ShowCase from './components/ShowCase';
import About from './components/About';
import Characters from './components/Characters';
import Medien from './components/Medien';
import Footer from './components/Footer';

export default class App extends Component {
	state = {
		side: ['Home', 'Über Uns', 'Charakters', 'Medien'],
		placeFixedNav: true,
		spinner: true,
	};

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);

		if (window.innerWidth < 1440) {
			this.setState({ placeFixedNav: false });
		}
	}
	handleLoad = () => {
		this.setState({ spinner: false });
	};

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
		const { placeFixedNav, spinner } = this.state;
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

		return (
			<div>
				{spinner ? (
					<h1>SPINNER</h1>
				) : (
					<div className='parallax'>
						{placeFixedNav ? (
							<div className='fixed-nav'>
								<button onClick={() => this.scrollToShowcase()}>
									{'- Home -'}
								</button>
								<button onClick={() => this.scrollToAbout()}>
									{'- Über Uns -'}
								</button>
								<button
									onClick={() => this.scrollToCharacter()}
								>
									{'- Charakters -'}
								</button>
								<button onClick={() => this.scrollToMedien()}>
									{'- Medien -'}
								</button>
							</div>
						) : null}

						<ShowCaseRef />
						<AboutRef />
						<CharacterRef />
						<MedienRef />
						<Footer />
					</div>
				)}
			</div>
		);
	}
}
