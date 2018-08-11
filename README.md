# Feed Reader Testing Project

This project tests the Udacity Feed Reader app using Javascript testing framework Jasmine.

## How to run the test

1. Open index.html on your preferred browser
2. There should be several test results at the bottom of the screen that says "~ specs, ~ failures".

## List of defined test cases

1. A test to make sure that the allFeeds variable has been defined and that it is not empty.

2. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. A test that ensures the menu element is hidden by default.
5. A test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
6. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.