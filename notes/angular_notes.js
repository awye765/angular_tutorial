// WHAT IS ANGULAR?
//
// Angular is a CLIENT-SIDE JAVASCRIPT FRAMEWORK for adding INTERACTIVITY to HTML.
// Client-side means referring to operations that are performed by the CLIENT (on
// the CLIENT'S COMPUTER) in a CLIENT-SERVER relationship in a computer network.
//
// HOW DO WE TELL HTML TO TRIGGER THE JAVASCRIPT?
//
// In Angular we add behaviour to HTML by using a DIRECTIVE, e.g. ng-controller
// links the below HTML:
//
// index.html
//
<html>
  <body ng-controller="StoreController">
    ...
  </body>
</html>
//
// ... with the controller, which is a JS function in app.js:
//
function StoreController() {
  alert('Welcome, Gregg!');
}
// Directives BIND the behaviour.
//
// WHAT ARE MODULES?
//
// Modules are where we write pieces of Angular app and how we keep code
// encapsulated.  Makes code more readable and testable.  It's also where we
// contain our dependencies.  It's where the application's components live.
//
// WHAT ARE CONTROLLERS?
//
// Controllers help get data onto our webpage.  Controlers are where we define
// our app's BEHAVIOUR by defining functions and values.
//
// WHAT ARE EXPRESSIONS?
//
// How values get displayed within the page.
//
