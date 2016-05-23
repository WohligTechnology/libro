var adminURL = "http://192.168.2.11:3000/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [
    {
    name: "pre plan your next holiday",
    classis: "active",
    anchor: "home"
  },
    {
    name: "destinations & itineraries",
    classis: "active",
    anchor: "home"
  },
    {
    name: "My Travel Diary",
    classis: "active",
    anchor: "home"
  },
    {
    name: "Bookings",
    classis: "active",
    anchor: "home"
  },
    {
    name: "travel agents",
    classis: "active",
    anchor: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  },
    {
    name: "travel blogs",
    classis: "active",
    anchor: "home"
  }
];

  return {
    getHotels: function(city,callback) {
      $http.get(adminURL+"bookings/hotels.json?destination="+city).success(callback);
    },
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
