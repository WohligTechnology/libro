angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ui-rangeSlider' , 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.slider = [
    'img/slider1.jpg',
    'img/slider2.jpg',
    'img/slider3.jpg'
  ];
  $scope.openSelect = function(){
    $scope.childroom=false;
    $scope.adultroom=false;

    if($scope.showRooms === true){
      $scope.showRooms=false;
    }else{
      $scope.showRooms=true;
    }
  };
  $scope.openAdultsel = function(){
    $scope.childroom=false;
    $scope.showRooms=false;

    if($scope.adultroom === true){
      $scope.adultroom=false;
    }else{
      $scope.adultroom=true;
    }
  };
  $scope.openChildsel = function(){
    $scope.adultroom=false;
    $scope.showRooms=false;

    if($scope.childroom === true){
      $scope.childroom=false;
    }else{
      $scope.childroom=true;
    }
  };
  $scope.showRooms = false;
  $scope.today = function() {
  $scope.dt = new Date();
};
$scope.today();

$scope.clear = function() {
  $scope.dt = null;
};

$scope.inlineOptions = {
  customClass: getDayClass,
  minDate: new Date(),
  showWeeks: true
};

$scope.dateOptions = {
  dateDisabled: disabled,
  formatYear: 'yy',
  maxDate: new Date(2020, 5, 22),
  minDate: new Date(),
  startingDay: 1
};

// Disable weekend selection
function disabled(data) {
  var date = data.date,
    mode = data.mode;
  return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}

$scope.toggleMin = function() {
  $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
  $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
};

$scope.toggleMin();

$scope.open1 = function() {
  $scope.popup1.opened = true;
};

$scope.open2 = function() {
  $scope.popup2.opened = true;
};

$scope.setDate = function(year, month, day) {
  $scope.dt = new Date(year, month, day);
};

$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
$scope.format = $scope.formats[0];
$scope.altInputFormats = ['M!/d!/yyyy'];

$scope.popup1 = {
  opened: false
};

$scope.popup2 = {
  opened: false
};

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var afterTomorrow = new Date();
afterTomorrow.setDate(tomorrow.getDate() + 1);
$scope.events = [
  {
    date: tomorrow,
    status: 'full'
  },
  {
    date: afterTomorrow,
    status: 'partially'
  }
];

function getDayClass(data) {
  var date = data.date,
    mode = data.mode;
  if (mode === 'day') {
    var dayToCheck = new Date(date).setHours(0,0,0,0);

    for (var i = 0; i < $scope.events.length; i++) {
      var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

      if (dayToCheck === currentDay) {
        return $scope.events[i].status;
      }
    }
  }

  return '';
}
})
.controller('HotelCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("hotel");
  $scope.menutitle = NavigationService.makeactive("Hotel");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.tab2 = 'popular';
  $scope.classa = 'tab-active';
  $scope.classb = '';
  $scope.classc = '';

  $scope.tabchange = function(tab, a) {
      $scope.tab2 = tab;
      if (a == 1) {
          $scope.classa = "tab-active";
          $scope.classb = '';
          $scope.classc = '';
          $scope.classd = '';
      } else if (a == 2) {
          $scope.classa = '';
          $scope.classb = "tab-active";
          $scope.classc = '';
          $scope.classd = '';
      } else if (a == 3) {
          $scope.classa = '';
          $scope.classb = '';
          $scope.classc = "tab-active";
          $scope.classd = '';
      }
  };

  $scope.demo2 = {
      range: {
          min: 100,
          max: 10000,
      },
      minPrice: 1000,
      maxPrice: 4000
  };
  // set available range
  $scope.minPrice = 100;
  $scope.maxPrice = 999;

  // default the user's values to the available range
  $scope.userMinPrice = $scope.minPrice;
  $scope.userMaxPrice = $scope.maxPrice;

  $scope.rate = 0;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
   $scope.overStar = value;
   $scope.percent = 100 * (value / $scope.max);
 };

 $scope.ratingStates = [
   {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
   {stateOn: 'fa-star', stateOff: 'fa-star-o'},
   {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
   {stateOn: 'glyphicon-heart'},
   {stateOff: 'glyphicon-off'}
 ];
})
.controller('HoteldetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("hoteldetail");
  $scope.menutitle = NavigationService.makeactive("Hotel Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.hotel = [
    'img/hotelslider.jpg',
    'img/hotelslider.jpg',
    'img/hotelslider.jpg',
    'img/hotelslider.jpg',
    'img/hotelslider.jpg'
  ];
  $scope.rate = 0;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
   $scope.overStar = value;
   $scope.percent = 100 * (value / $scope.max);
 };

 $scope.ratingStates = [
   {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
   {stateOn: 'fa-star', stateOff: 'fa-star-o'},
   {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
   {stateOn: 'glyphicon-heart'},
   {stateOff: 'glyphicon-off'}
 ];
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

.controller('languageCtrl', function($scope, TemplateService,$translate,$rootScope) {

    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if(!$.jStorage.get("language")){
        $translate.use("hi");
        $.jStorage.set("language","hi");
      }
      else {
        if($.jStorage.get("language") == "en")
        {
          $translate.use("hi");
          $.jStorage.set("language","hi");
        }
        else {
          $translate.use("en");
          $.jStorage.set("language","en");
        }
      }
    //  $rootScope.$apply();
    };


})

;
