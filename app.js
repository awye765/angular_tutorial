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

  app.controller('TabController', function() {
    this.tab = 1;
    this.setTab = function(selectedTab) {
      this.tab = selectedTab;
    };
    this.isSet = function(givenTab) {
      return this.tab == givenTab;
    };
});

  var gems = [{
  name: 'Azurite',
  description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
  shine: 8,
  price: 110.50,
  rarity: 7,
  color: '#CCC',
  faces: 14,
  images: [
    "images/gem-02.gif",
    "images/gem-05.gif",
    "images/gem-09.gif"
  ]
}, {
  name: 'Bloodstone',
  description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
  shine: 9,
  price: 22.90,
  rarity: 6,
  color: '#EEE',
  faces: 12,
  images: [
    "images/gem-01.gif",
    "images/gem-03.gif",
    "images/gem-04.gif"
  ]
}, {
  name: 'Zircon',
  description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
  shine: 70,
  price: 1100,
  rarity: 2,
  color: '#000',
  faces: 6,
  images: [
    "images/gem-06.gif",
    "images/gem-07.gif",
    "images/gem-10.gif"
  ]
}];
})();
