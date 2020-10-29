import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<section class="resume-section" id="about">
			<div class="resume-section-content">
				<h1 class="mb-0">
					Sunyad
					<span class="text-primary">Chowdhury</span>
				</h1>
				<div class="subheading mb-5">
					<FontAwesomeIcon icon={faMapMarker} />
					<p>Paterson, NJ 07502</p> <a href="mailto:chowdhurysaniyad@gmail.com">chowdhurysaniyad@gmail.com</a>
				</div>
				<p class="lead mb-5">
					I am a highly-skilled full-stack developer with a passion for the front-end. I currently use JavaScript, React JS, NodeJS, and MongoDB to
					build applications. I also have strong experience with Python and MySQL as well as data science. Communication is the highest priority for
					me.
				</p>
				<div class="social-icons">
					<a class="social-icon" href="https://www.linkedin.com/in/sunyad-hussain/">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a class="social-icon" href="https://github.com/saniyad-hussain">
						<i class="fab fa-github"></i>
					</a>
					<a class="social-icon" href="facebook.com/chysani">
						<i class="fab fa-facebook-f"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
