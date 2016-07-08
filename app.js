(function(){
  var app = angular.module('gemStore', []);
// Creates new variable.  Assigns it a new Angular module, with application
// name, "store", that takes an empty array, which will be used for dependency
// injection of any other libraries we might need.
  app.controller('StoreController', function() {
// The above is the controller and is attached to (INSIDE) our app.
    this.products = gems;
// The above sets the gem equal to a property of our controller, in this case,
// "products".
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: "The most equisite gem you will ever see.",
      canPurchase: true,
      soldOut: true,
    }
  ];
// The above stores the gem variable and its data INSIDE the app.
})();
