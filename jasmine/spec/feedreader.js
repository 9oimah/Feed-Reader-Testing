/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		it('has a URL defined and the URL is not empty', function() {
			allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });
		
        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('has a name and the name is defined and not empty', function() {
			allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });

    /* A test suite named "The menu" */
	describe ('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default.
         */
		let body = document.querySelector('body');
		
		it('is hidden by default', function() {
			expect(body.className).toContain("menu-hidden");
		});

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		it('displays when clicked and hides on second click', function() {
			let menuButton = document.querySelector('.menu-icon-link');
			expect(menuButton).toBeDefined();

			menuButton.click();
			expect(body.className).not.toContain("menu-hidden");

			menuButton.click();
			expect(body.className).toContain("menu-hidden");
		});
	});
	
    /* A test suite named "Initial Entries" */
	describe ('Initial Entries', function() {
		beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
		it('has a single entry element in the feed container', function(done) {
			let entries = document.querySelector(".feed").getElementsByClassName("entry");
			expect(entries).toBeDefined();
            expect(entries.length).toBeGreaterThan(0);
            done();
		});
	});
	
    /* A test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		let initialEntries;
		let finalEntries;
		
		beforeEach(function(done) {
			loadFeed(0, function() {
				initialEntries = document.querySelector(".feed").innerHTML;
				done();
			});
		});

		beforeEach(function(done) {
			loadFeed(1, function() {
				finalEntries = document.querySelector(".feed").innerHTML;
				done();
			});
		});
		/* A test that ensures when a new feed is loaded
         	* by the loadFeed function that the content actually changes.
         	*/
		it('has new content', function(done) {
			expect(initialEntries).not.toBe(finalEntries);
			done();
		});
	});
}());
