# Feed Reader Testing project sixth project of udacity

a number of tests against a pre-existing application with Jasmine

to test the underlying business logic of the application as well as the event handling and DOM manipulation

# How to run

Clone repository and open index.html in any browser or visit my [GitHub Page](https://github.com/7ossam7assan/feedproject/tree/master/feed)

# Tests:

*RSS Feeds: have URL loops through each feed and ensures it has a URL defined and that the URL is not empty
*RSS Feeds: have name loops through each feed and ensures it has a name defined and that the name is not empy.
*The menu: is hidden by default ensures the menu element is hidden by default.
*The menu: changes visibility ensures the menu changes visibility when the menu icon is clicked. The test also excepts the menu to display when clicked and to hide when clicked again.
*Initial Entries: has an .entry element after loading ensures that, when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
*New Feed Selection: changes the content when new feed is loaded ensures that, when a new feed is loaded by the loadFeed function, the content actually changes.

#Resources:

[Jasmine Framework](https://jasmine.github.io/)

#autor:

Hossam Hassan