/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    var allFeedsLength = allFeeds.length,
        entbefore, entafter;
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has url & not empty', function () {
            for (var i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('has name $ not empty', function () {
            for (var i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    
    describe('menu', function () {

        it('elements is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        it('change visibility when the menu icon is clicked', function () {

            $('.menu-icon-link').trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });
  
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('there is at least a single .entry element within the .feed container', function (done) {
            var ent = $('.feed .entry')[0];
            expect(ent).toBeGraterThan('');
            done();
        });
    });
    
    describe('New Feed Selection', function () {
      
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                 entbefore = $('.feed').find('h2').text();
                done();
            });
        });
        it('when a new feed is loaded the content actually changes', function (done) {
            loadFeed(1, function () {
                 entafter = $('.feed').find('h2').text();
                expect(entbefore).not.toEqual(entafter);
                done();
            });
        });
    });
}());
