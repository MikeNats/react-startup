/**
 * Open the given URL
 * @param  {String}   type Type of navigation 
 * @param  {String}   page The URL to navigate to
 * @param  {Function} done Function to execute when finished
 */

const router = (pageType) => {
    switch (pageType) {
        default:
            return '/';
    }
};

module.exports = (pageName, page, done) => {
	/**
	 * The URL to navigate to
	 * @type {String}
	 */
    console.log(`${browser.options.baseUrl}${router(pageName)}`)

	const url = `${browser.options.baseUrl}${router(pageName)}`

    browser.url(url);
}
