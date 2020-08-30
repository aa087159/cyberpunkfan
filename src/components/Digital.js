import React, { Component } from 'react';
import logos from '../logos.json';

export class Digital extends Component {
	render() {
		const { clicked, info, version } = this.props;
		return (
			<>
				<button className='single-version'>
					{version === 'digital' ? 'digital' : 'einzelhandel'}
				</button>
				<div className='options'>
					{info[version].map((option, i) => (
						<a
							href={option}
							key={i}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={
									Object.keys(logos).includes(
										option.split(/[/.]+/)[1]
									)
										? logos[option.split(/[/.]+/)[1]]
										: Object.keys(logos).includes(
												option.split(/[/.]+/)[2]
										  )
										? logos[option.split(/[/.]+/)[2]]
										: null
								}
								alt=''
							/>
						</a>
					))}
				</div>
				<button
					onClick={clicked}
					className='back-button'
					style={{ display: 'block', margin: '1rem auto' }}
				>
					<i className='fas fa-arrow-left'></i> ZURÜCK
				</button>
			</>
		);
	}
}

export default Digital;
