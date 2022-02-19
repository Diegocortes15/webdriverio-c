describe('IFrame', () => {
	it('Working with iframe', async () => {
		// 1) Open URL
		await browser.url('https://practice.automationbro.com/iframe-sample/');

		// 2) Acces the iframe
		const iframe = await $('#advanced_iframe');

		await browser.switchToFrame(iframe);

		// 3) Verify logo exists
		await expect($('#site-logo')).toExist();

		// 4) Swicht to parent frame
		await browser.switchToParentFrame();

		// 5) Verify page title
		await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
	});
});
