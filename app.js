(function(){
  var app = angular.module('gemStore', ['store-directives']);
// Creates new variable.  Assigns it a new Angular module, with application
// name, "store", that takes an empty array, which will be used for dependency
// injection of any other libraries we might need.
  app.controller('StoreController', ['$http', function($http) {
// The above is the controller and is attached to (INSIDE) our app.
    var store = this;
    store.products = [];
    $http.get('store-products.json').success(function(data){
      store.products = data;
      });
    }]);
// The above sets the gem equal to a property of our controller, in this case,
// "products".

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();
