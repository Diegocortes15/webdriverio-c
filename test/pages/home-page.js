import navComponent from './components/nav-comp';

class HomePage {
	open() {
		return browser.url('/');
	}

	get navComponent() {
		return navComponent;
	}

	get btnGetStarted() {
		return $('#get-started');
	}

	get linkAbout() {
		return $('#menu-item-491');
	}

	get imageLogo() {
		return $('//img[@alt="Practice E-Commerce Site"]');
	}

	get headingElement() {
		return $('.elementor-widget-container h1');
	}
}

export default new HomePage();
