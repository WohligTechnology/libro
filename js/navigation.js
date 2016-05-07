var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
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
