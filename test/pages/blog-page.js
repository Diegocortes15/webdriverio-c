import navComponent from './components/nav-comp';

class BlogPage {
	open() {
		return browser.url('/blog');
	}

	get navComponent() {
		return navComponent;
	}

	get listRecentPost() {
		return $$('#recent-posts-3 ul li');
	}

	async elementsToBeGreaterThan(number) {
		const recentPost = await this.listRecentPost;

		for (const post of recentPost) {
			const textPost = await post.getText();
			const postLength = await textPost.length;
			await expect(postLength).toBeGreaterThan(number);
		}
	}
}

export default new BlogPage();
