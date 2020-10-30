import React from 'react';
import SkillBar from 'react-skillbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLightbulb, faMobile, faRocket, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	const skills = [
		{ type: 'Html', level: 90 },
		{ type: 'Css', level: 90 },
		{ type: 'Javascript', level: 80 },
		{ type: 'React', level: 80 },
		{ type: 'Node Js', level: 50 },
		{ type: 'Wordpress', level: 90 },
		{ type: 'Django', level: 50 },
		{ type: 'MongoDB', level: 55 },
		{ type: 'Mysql', level: 70 },
	];
	const colors = {
		bar: '#01A1A7',
		title: {
			text: '#fff',
			background: '#05C2C9',
		},
	};
	const workFLow = [
		{
			title: 'Fast',
			desc: 'Fast load times and lag free interaction, my highest priority',
			icon: faTachometerAlt,
		},
		{
			title: 'Dynamic',
			desc: "Websites don't have to be static, I love making pages come to life.",
			icon: faRocket,
		},
		{
			title: 'Responsive',
			desc: 'My layouts will work on any device, big or small',
			icon: faMobile,
		},
		{
			title: 'Intuitive',
			desc: 'Strong preference for easy to use, intuitive UX/UI.',
			icon: faLightbulb,
		},
	];
	return (
		<section class="resume-section" id="skills">
			<div class="resume-section-content ">
				<h2 class="mb-5">Skills</h2>
				<div className="row">
					<div className="col-md-6">
						<div class="subheading mb-3">Programming Languages & Tools</div>
						<SkillBar colors={colors} skills={skills} />
					</div>

					<div className="col-md-6">
						<div class="subheading mb-3">Workflow</div>
						<div className="row">
							{workFLow.map((work) => {
								return (
									<div className="col-md-6">
										<div class="card workflow text-center m-2 p-2">
											<div className="hexagon">
												<FontAwesomeIcon style={{ fontSize: '65px', margin: '0 auto', color: '#05C2C9' }} icon={work.icon} />
											</div>
											<h3>{work.title}</h3>
											<div class="card-body">
												<p class="card-text">{work.desc}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
