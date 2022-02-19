import homePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {
	it('Get the text of all menu items & assert them', async () => {
		allureReporter.addFeature('Navigation');
		allureReporter.addSeverity('critical');
		await homePage.open();

		const expectedLinks = [
			'Home',
			'About',
			'Shop',
			'Blog',
			'Contact',
			'My account',
		];

		// const actualLinks = [];

		// // const navLinks = await $('#primary-menu').$$('li[id*=menu]');
		const navLinks = await homePage.navComponent.linksNavMenu;

		const actualLinks = await Promise.all(
			navLinks.map(async (link) => await link.getText())
		);

		await expect(expectedLinks).toEqual(actualLinks);
	});

	it('Get the text of all menu items & assert them - using wait commands', async () => {
		// hardcoded timeout
		// browser.pause(5 * 1000);

		await homePage.open();

		const expectedLinks = [
			'Home',
			'About',
			'Shop',
			'Blog',
			'Contact',
			'My account',
		];

		// const actualLinks = [];

		// await $('#primary-menu').waitForClickable();

		// wait until the Home text is displayed on the navigation menu
		await browser.waitUntil(
			async function () {
				const homeText = await homePage.navComponent.firstNavMenuList.getText(); // Home
				return homeText === 'Home'; // true | false
			},
			{
				timeout: 5000,
				timeoutMsg: 'Could not verify the Home text from #primary-menu li',
			}
		);

		// const navLinks = await $('#primary-menu').$$('li[id*=menu]');
		const navLinks = await homePage.navComponent.linksNavMenu;

		const actualLinks = await Promise.all(
			navLinks.map(async (link) => await link.getText())
		);

		await expect(actualLinks).toEqual(expectedLinks);
	});
});
