#Project 5: Neighborhood Map

This is the fifth project of Udacity Front-End Web Developer Nanodegree. Click [here](http://junjunruan.github.io/P5-Neighborhood-Map/src) to visit the website.

Here is the [link](https://www.udacity.com/course/viewer#!/c-nd001/l-2711658591/m-2684328537) to the rubric for the class.

Required courses: [Intro to AJAX](https://www.udacity.com/course/intro-to-ajax--ud110) and [JavaScript Design Patterns](https://www.udacity.com/course/javascript-design-patterns--ud989)

Required Technics: Knockout framework, Ajax, JavaScript Design Pattern, Google Map API, Foursquare API, HTML, CSS

Github folders:
- src: source code
- src-min: minified source code

##Main Functionalities:

1.The interface includes three main components: a search bar, a list view, and a map. Notice the map has markers and the list view contains the names of each of the locations on the map.

![image](http://i.imgur.com/Lg0ZFrh.png?1)

2.The search filters both the list view and map markers. Users can search by name or by location depending on which selected options of the dropdow list.

![image](http://i.imgur.com/p9GAIJi.gif)

3.Along with the list and markers filtering based on the search bar, both of them are also clickable. When click a list item it will move towards the marker and open an info window. Clicking on a marker will also open an info window. The content of the info window is from Foursquare API! Notice as well that markers can animate and change color to draw our users attention to that marker.

![image](http://imgur.com/Nyi9yuY.gif)

##How I completed this Project?

1) Reviewed course JavaScript Design Patterns.

2) Downloaded the Knockout framework.

3) Wrote code required to add a full-screen map to the page using the Google Maps API.

4) Wrote code required to display map markers identifying a number of restaurant locations near Duke University. This is the set of locations on which will be searching and filtering in step 5).

5) Implemented the search bar functionality to search and filter map markers displayed in step 4). The search function should filter on markers that already show up. Simply providing a search function through a third-party API and displaying the results is not enough.

6) Implemented a list view of the set of locations defined in step 4), Searching and filtering the locations via the search bar will filter the list view and map marker locations accordingly.

7) Added additional functionality using Foursquare APIs when a map marker, or list view entry is clicked. If you need a refresher on making AJAX requests to third-party servers, check out Intro to AJAX course.

8) Added additional functionality to animate a map marker when either the list item associated with it or the map marker itself is selected.

9) Added additional functionality to open an infoWindow with the information described in step 7) when either a location is selected from the list view or its map marker is selected directly.

10) Interface should be very intuitive to use. For example, search box should be easy to locate. It should be easy to understand what set of locations is being filtered. Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window opens above map marker with additional information.

##References

https://developers.google.com/maps/documentation/javascript/tutorial

https://www.udacity.com/course/viewer#!/c-nd001/l-2711658591/m-2690698537

https://developer.foursquare.com/docs/venues/search

http://knockoutjs.com/documentation/introduction.html
