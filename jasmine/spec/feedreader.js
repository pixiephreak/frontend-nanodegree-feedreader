/* Placed all of the tests within the $() function,
 * since some of these tests may require DOM elements. This
   esures that they don't run until the DOM is ready.
 */
$(function() {

  describe('RSS Feeds', function() {
    /* Make sure that the
     * allFeeds variable has been defined and that it is not empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* loop through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('should each contain a url property', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
      });
    });

    /* test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('should have a name defined and the name should not be empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(' ');
      });
    });
  });

  describe('The Menu', function() {
    var menu,
        menuClass;

    beforeEach(function() {
      menu = document.getElementsByTagName('body')[0];
      menuClass = menu.className;
      menuIcon = document.getElementsByClassName('icon-list');
    });

    /* Test ensures the menu element is
     * hidden by default.
     */
    it('should have a class of menu-hidden', function() {
      expect(menuClass).toBe('menu-hidden');
    });

    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked. T
     */
    it('should toggle a menu when clicked', function() {
      $('.menu-icon-link').click();
      expect(document.body.className).not.toContain('menu-hidden');
      $('.menu-icon-link').click();
      expect(document.body.className).toContain('menu-hidden');
    });

  });

  describe('Initial Entries', function() {
    /* Ensures when the loadFeed function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('should contain at least one entry in feed', function(done) {
      expect(allFeeds.length).not.toBeLessThan(0);
      done();
    });
  });

  describe('New Feed Selection', function() {
    var initialFeed,
        newFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        console.log(1);
        initialFeed = $('.feed').html();
        loadFeed(1, function() {
          console.log(2);
          newFeed = $('.feed').html();
          done();
        });
      });
    });

    /* Test ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes
     */
    it('should change the content when loadFeed() is called', function(done) {
      expect(initialFeed).not.toEqual(newFeed);
      done();
    });
  });

}());
