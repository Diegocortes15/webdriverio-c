import contactPage from '../pages/contact-page';
import * as casual from 'casual';

describe('Contact Form', () => {
	before(async () => {
		await browser.maximizeWindow();
	});

	it('Fill all the input fields and submit form', async () => {
		// 1) Go to Website
		await contactPage.open();

		/* // 3) Fill all input fields
		await contactPage.submitForm(
			'Diego',
			'diego@mail.com',
			'123456',
			'This is just a test message'
		); */

		// 3) Fill all input fields
		await contactPage.submitForm(
			casual._name(),
			casual._email(),
			casual._phone(),
			casual._text() + '\n\n' + casual._text()
		);

		// 5) Assert the success message
		const messageElement = await contactPage.messageElement;
		await expect(messageElement).toHaveText(
			'Thanks for contacting us! We will be in touch with you shortly'
		);
	});
});
