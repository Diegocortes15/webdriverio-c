import blogPage from '../pages/blog-page';

describe('Blog page', () => {
	it('Assert the text length of each element > 10 characters & assert total of length list will be 4', async () => {
		// const isAboveThreshold = (value) => value < 5;

		// 2) Go to blog page
		await blogPage.open();

		// 3) Select elements
		// await blogPage.elementsToBeGreaterThan(10);
		const recentPost = await blogPage.listRecentPost;

		for (const post of recentPost) {
			const textPost = await post.getText();
			const postLength = await textPost.length;
			await expect(postLength).toBeGreaterThan(10);
		}

		await expect(recentPost).toHaveLength(5);
	});
});
