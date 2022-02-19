import navComponent from './components/nav-comp';

class ContactPage {
	open() {
		browser.url('/contact');
	}

	get navComponent() {
		return navComponent;
	}

	get nameInput() {
		return $('.contact-name input');
	}
	get emailInput() {
		return $('.contact-email input');
	}
	get phoneInput() {
		return $('.contact-phone input');
	}
	get messageInput() {
		return $('.contact-message textarea');
	}

	get submitButton() {
		return $('#evf-submit-277');
	}

	get messageElement() {
		return $('.everest-forms-notice');
	}

	async submitForm(name, email, phone, message) {
		await this.nameInput.setValue(name);
		await this.emailInput.setValue(email);
		await this.phoneInput.setValue(phone);
		await this.messageInput.setValue(message);

		await this.submitButton.click();
	}
}

export default new ContactPage();
