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
    "use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have Urls', function() {
            //for loop through the allFeeds obj and test each have a url and it isn't just an empty string or something
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                // FIX: changed toBeGreaterThan instead as suggested by reviewer
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function() {
            //for loop through the allFeeds obj and test each have a name and it isn't just an empty string or something
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                // FIX: changed toBeGreaterThan instead as suggested by reviewer
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //make sure body class menu-hidden is already on when the doc loads
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        //do two click function and test that the menu-hidden class is off then on again
        it('toggles when clicked', function() { 
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            //load feed function called first using done to test async
            // FIX: called done inside the load feed right away to simplify the code
            // FIX: suggested by the reviewer
            loadFeed(0, done);
        });
        it('have at least one entry element within the feed container', function(){
            // make sure there is at lease one entry in the feed
            //FIX: added to be greater than function as it was a suggestion from reviewer
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            // FIX: removed the done due to it being redundanct- also removed from inside the function above
        });

    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */ 
        //use inital and after variables later but definded here to use them later in the next it
        var initial, after;
        beforeEach(function(done) {
            //empty the feed element if something is already there
            $('.feed').empty();
            loadFeed(0, function() {
                //find the first entry's text and compare it to another feed
                initial = $('.feed').find('.entry:first').text();
                //load the next feed assuming there are two feeds available in the array
                // FIX: nested the second load feed inside the first so that I can call done inside it
                loadFeed(1, function() {
                    after = $('.feed').find('.entry:first').text();
                    //call done so that it can properly test with async
                    done();
                });
            });


        });
        it('loads new content on the next feed', function() {
            //test if after is not equal to intial and if thats true the test passes
            // FIX: changed dto a notEqual function 
            expect(after).not.toEqual(initial);
            // FIX: removed the done due to it being redundanct- also removed from inside the function above
        });
    });    
}());