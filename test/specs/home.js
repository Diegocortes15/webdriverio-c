import homePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {
	/* before(async () => {
		console.log('This could be used for test setup');
	}); */

	beforeEach(async () => {
		console.log('This runs before each test');
		// 1) Open URL
		await homePage.open();
	});

	/* after(async () => {
		console.log('This could be used for test cleanup');
	}); */

	/* afterEach(async () => {
		console.log('This runs after each test');
	}); */

	it('Open URL & assert title', async () => {
		allureReporter.addSeverity('minor');

		// 2) Assert title
		await expect(browser).toHaveTitle(
			'Practice E-Commerce Site – Automation Bro'
		);
	});

	//

	it('Open About Page & assert URL', async () => {
		// 2) Click on the link about
		await homePage.linkAbout.click();

		// 3) Assert URL is https://practice.automationbro.com/about/
		await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
	});

	it('Click on get started button & assert the URL contains "get-started" text', async () => {
		// 2) Click on get started button
		await homePage.btnGetStarted.click();

		// 3) Assert the URL contains "get-started"
		await expect(browser).toHaveUrlContaining('get-started');
	});

	it('Click on logo & assert the URL doesn\'t contains "get-started" text', async () => {
		allureReporter.addFeature('Logo Verification');

		// 2) Click on logo
		await homePage.imageLogo.click();

		// 3) Assert the URL DOES NOT contains "get-started"
		await expect(browser).not.toHaveUrlContaining('get-started');
	});

	it('Find heading element and assert the text', async () => {
		// 1) Open home page
		await homePage.open();

		// 2) Assert the text
		// await expect(headingText).toEqual('Think different. Make different.');
		await expect(homePage.headingElement).toHaveText(
			'Think different. Make different.'
		);
	});
});
