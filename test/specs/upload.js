const path = require('path');

describe('Upload test', () => {
	it('Simple upload test', async () => {
		// 1) Open URL
		await browser.url('https://the-internet.herokuapp.com/upload');

		// 2) Store test file path
		const filePath = await path.join(__dirname, '../data/link.png');

		// 3) Upload test file
		const remoteFilePath = await browser.uploadFile(filePath);

		// 4) Set file path value in the input field
		await $('#file-upload').setValue(remoteFilePath);
		await $('#file-submit').click(); // click the submit button

		// 5) Assertion
		await expect($('h3')).toHaveText('File Uploaded!');
	});

	it.only('Simple upload test', async () => {
		// 1) Open URL
		await browser.url('https://practice.automationbro.com/cart/');

		// 2) Store test file path
		const filePath = await path.join(__dirname, '../data/link.png');

		// 3) Upload test file
		const remoteFilePath = await browser.uploadFile(filePath);

		// 4) Remove hidden class
		const fileUpload = await $('#upfile_1');
		await browser.execute((el) => (el.className = ''), fileUpload);

		fileUpload.waitForDisplayed();

		// 5) Set file path value in the input field
		await fileUpload.setValue(remoteFilePath);
		await $('#upload_1').click(); // click the upload button

		// 6) Assertion
		await $('#wfu_messageblock_header_1_label_1').waitForDisplayed({
			timeout: 20000,
			timeoutMsg: 'Could not be displayed #wfu_messageblock_header_1_label_1',
		});

		await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining(
			'uploaded successfully'
		);
	});
});
