import React from 'react';
import creative from '../../assets/portfolio/Screenshot 2020-10-30 102542.png';
import volunteer from '../../assets/portfolio/Screenshot 2020-10-30 104814.png';
import Travel from '../../assets/portfolio/Screenshot 2020-10-30 105334.png';
import Dev from '../../assets/portfolio/Screenshot 2020-10-30 105515.png';

const Projects = () => {
	const portfolios = [
		{
			name: 'Creative Agency',
			img: creative,
			live: 'https://creative-agency-d3172.firebaseapp.com/',
			github: 'https://github.com/saniyad-hussain/creative-agency',
		},
		{
			name: 'Volunteer Network',
			img: volunteer,
			live: 'https://nervous-agnesi-d2b1cd.netlify.app/',
			github: 'https://github.com/saniyad-hussain/volunteer-network-client',
		},
		{
			name: 'Travel Guru',
			img: Travel,
			live: 'https://tour-guide-ccd0b.web.app/',
			github: 'github.com',
		},
		{
			name: 'Dev Connector',
			img: Dev,
			live: 'https://dsnfs.herokuapp.com/',
			github: 'github.com',
		},
	];
	return (
		<section class="resume-section" id="projects">
			<div class="resume-section-content ">
				<h2 class="mb-5">Recent Projects</h2>
				<div className="row">
					{portfolios.map((pf) => {
						return (
							<div className="col-md-4">
								<div class="card mt-2">
									<img class="card-img-top" src={pf.img} alt="Card image cap" style={{ height: '150px' }} />
									<div class="card-body">
										<h5 class="card-title">{pf.name}</h5>
									</div>
									<div class="card-body">
										<a href={pf.live} class="card-link">
											See Project
										</a>
										<a href={pf.github} class="card-link">
											Github{' '}
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
