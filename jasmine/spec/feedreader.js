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
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loop through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('should each contain a url property', function(){
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
           });
         })

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('should have a name defined and the name should not be empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(' ');
           });
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function(){
      var menu,
          menuClass;

      beforeEach(function(){
        menu = document.getElementsByTagName('body')[0];
        // menuLink = document.getElementsByClassName('menu-icon-link');
        menuClass = menu.className;
        menuIcon = document.getElementsByClassName('icon-list');
      });

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('should have a class of menu-hidden', function(){
         expect(menuClass).toBe('menu-hidden');
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('should toggle a menu when clicked', function(){

          $('.menu-icon-link').click();
          expect(document.body.className).not.toContain('menu-hidden');
          $('.menu-icon-link').click();
          expect(document.body.className).toContain('menu-hidden');

        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       beforeEach(function(done){
         loadFeed(0, done);
       });

        it('should contain at least one entry in feed', function(done){
          expect(allFeeds.length).not.toBeLessThan(0);
          done();
        });
       });

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function(){
      var initialFeed;

      beforeEach(function(done){
        initialFeed =
        loadFeed(0, done);
      });

      var feed = $('h1').html();
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      it('should change the content when loadFeed() is called', function(done){
        loadFeed(0,done);
        expect(feed).not.toBe('Feeds');

      })





  });

}());
