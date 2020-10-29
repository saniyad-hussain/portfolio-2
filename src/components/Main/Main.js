import React from 'react';
import About from '../About/About';
import Educations from '../Educations/Educations';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';

const Main = () => {
	return (
		<div>
			<Header />
			<div class="container-fluid p-0">
				<About />
				<hr class="m-0" />
				<Experience />
				<hr class="m-0" />
				<Educations />
				<hr class="m-0" />
				<Skills />
				<hr class="m-0" />
			</div>
		</div>
	);
};

export default Main;
