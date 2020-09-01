import React, { Component } from 'react';
import character from '../img/page3/C2.jpg';
import slogan1 from '../img/page3/slogan1.jpg';
import slogan2 from '../img/page3/slogan2.jpg';
import slogan3 from '../img/page3/slogan3.jpg';

export class About extends Component {
	state = {
		slogans: [
			{
				title: 'SPIELE ALS GESETZLOSER SÖLDNER',
				detail:
					'Steige als Cyberpunk, einem Großstadt-Söldner ausgestattet mit kybernetischen Verbesserungen, in den Straßen von Night City zur Legende auf.',
				pic: slogan1,
			},
			{
				title: 'LEBE IN DER STADT DER ZUKUNFT',
				detail:
					'Betritt die riesige offene Welt von Night City, einem Ort, der in Sachen Grafik, Komplexität und Spieltiefe neue Standards setzt.',
				pic: slogan2,
			},
			{
				title: 'KLAUE DAS IMPLANTAT, DAS EWIGES LEBEN VERSPRICHT',
				detail:
					'Übernimm den riskantesten Job deines Lebens und begib dich auf die Jagd nach dem Schlüssel zur Unsterblichkeit.',
				pic: slogan3,
			},
		],
	};

	render() {
		const { slogans } = this.state;
		const { forwardedRef, ...rest } = this.props;
		return (
			<div className='about' ref={forwardedRef} {...rest}>
				<div className='right-side'>
					<img src={character} alt='' />
					<div className='text'>
						<h1>
							DEIN WAHRES ICH <br /> IST NICHT GENUG
						</h1>
						<p>
							Cyberpunk 2077 ist ein Open-World-Action-Adventure,
							das in Night City spielt – einer Megalopolis, deren
							Bewohner von Macht, Glamour und Körpermodifikationen
							besessen sind. Du schlüpfst in die Rolle von V,
							einem gesetzlosen Söldner auf der Suche nach einem
							einzigartigen Implantat – dem Schlüssel zur
							Unsterblichkeit. Cyberware, Skillset und Spielstil
							deines Charakters können dabei nach Belieben
							angepasst werden. Entdecke eine riesige Stadt, in
							der deine Entscheidungen alles verändern werden.
						</p>
					</div>
				</div>
				<div className='left-side'>
					{slogans.map((each, i) => (
						<div className='slogan' key={i}>
							<div className='frame'>
								<img src={each.pic} alt='' />
								<svg
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 1247 800'
								>
									<defs>
										<clipPath
											id='path'
											clipPathUnits='objectBoundingBox'
										>
											<path
												d='M4 113.5L22 128L26 135L42.5 664C46.3333 661 48.2 660.4 25 682C17.4 723.2 44.5 739.833 59 743L172 740L198 726L1080 688L1109.5 700C1138.17 699 1201.6 698 1224 694C1246.4 690 1254.67 672.333 1256 665V637L1240 622L1233 610L1215 83C1212 84 1215 83 1235.5 59C1238.7 10.2 1209.5 1 1191.5 1L1084 4L1058 20L174 59L147.5 46C103.5 48.5 61.5 49 35 51.5C22.0575 52.721 8.5 66 4 81L1 95L4 113.5Z'
												stroke='black'
											/>
										</clipPath>
									</defs>
								</svg>
							</div>

							<div className='text'>
								<h1>{each.title}</h1>
								<p>{each.detail}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default About;
