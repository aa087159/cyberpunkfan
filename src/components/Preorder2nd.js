import React, { Component } from 'react';
import logos from '../logos.json';
import Digital from './Digital';

export class Preorder2nd extends Component {
	state = {
		activeSwitch: 'di',
	};

	setActive = (e) => {
		this.setState({ activeSwitch: e.target.name });
	};

	back = (e) => {
		this.setState({ activeSwitch: e.target.name });
	};

	render() {
		const { info, clicked } = this.props;
		const { activeSwitch } = this.state;

		return (
			<React.Fragment>
				<div className='store-types'>
					{Object.keys(info).length === 2 ? (
						<>
							<div className='versions'>
								<button
									onClick={(e) => this.setActive(e)}
									className={`${
										activeSwitch === 'di' ? 'active' : ''
									} yellow-button`}
									name='di'
								>
									Digital
								</button>
								<button
									onClick={(e) => this.setActive(e)}
									className={`${
										activeSwitch === 're' ? 'active' : ''
									} yellow-button`}
									name='re'
								>
									Einzelhandel
								</button>
							</div>
							{activeSwitch === 'di' ? (
								<div className='options'>
									{info.digital.map((option, i) => (
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
														? logos[
																option.split(
																	/[/.]+/
																)[1]
														  ]
														: Object.keys(
																logos
														  ).includes(
																option.split(
																	/[/.]+/
																)[2]
														  )
														? logos[
																option.split(
																	/[/.]+/
																)[2]
														  ]
														: null
												}
												alt=''
											/>
										</a>
									))}
								</div>
							) : (
								<div className='options'>
									{info.retail.map((option, i) => (
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
														? logos[
																option.split(
																	/[/.]+/
																)[1]
														  ]
														: Object.keys(
																logos
														  ).includes(
																option.split(
																	/[/.]+/
																)[2]
														  )
														? logos[
																option.split(
																	/[/.]+/
																)[2]
														  ]
														: null
												}
												alt=''
											/>
										</a>
									))}
								</div>
							)}
							<button onClick={clicked} className='back-button'>
								<i className='fas fa-arrow-left'></i> ZURÜCK
							</button>
						</>
					) : Object.keys(info).includes('digital') ? (
						<Digital
							clicked={clicked}
							info={info}
							version='digital'
						/>
					) : (
						<Digital
							clicked={clicked}
							info={info}
							version='retail'
						/>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default Preorder2nd;
