import React, { Component } from 'react';

export class Footer extends Component {
	state = {
		icons: {
			youtube: 'https://www.youtube.com/user/CyberPunkGame',
			facebook: 'https://www.facebook.com/CyberpunkGame',
			twitter: 'http://twitter.com/cyberpunkgame',
			forum:
				'https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/',
			discord: 'https://discord.gg/cyberpunkgame',
			ig: 'https://www.instagram.com/cyberpunkgame/',
			tumblr: 'https://cyberpunkgame.tumblr.com/',
			twitch: 'https://www.twitch.tv/cdprojektred',
		},
	};

	render() {
		const { icons } = this.state;
		const { forwardedRef, ...rest } = this.props;
		return (
			<div className='footer' ref={forwardedRef} {...rest}>
				<div className='icons'>
					<p>
						Finde uns auf
						<i className='fas fa-long-arrow-alt-right'></i>
					</p>

					{Object.keys(icons).map((each, i) => {
						return (
							<a
								href={icons[each]}
								target='_blank'
								rel='noopener noreferrer'
								key={i}
							>
								<img
									src={`/images/footer/${each}.svg`}
									alt=''
								/>
							</a>
						);
					})}
				</div>
				<hr />
				<p className='copyright'>
					Dies ist nur eine Fanseite. Alle Urheberrechte und Marken
					gehören zum Eigentum ihrer jeweiligen Eigentümer (CD
					PROJEKT®, Cyberpunk®, Cyberpunk 2077® usw. This is just a
					fan-page. All copyrights and trademarks belong to the
					property of their respective owners (CD PROJEKT®,
					Cyberpunk®, Cyberpunk 2077®, etc.).
				</p>
			</div>
		);
	}
}

export default Footer;
