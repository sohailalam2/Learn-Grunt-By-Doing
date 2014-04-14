(function() {

    var app = angular.module('app', []);

    app.controller('MainController', ['$scope',
        function($scope) {

            $scope.images = [{
                src: './image/me.jpg',
                alt: 'Me'
            }, {
                src: './image/me.jpg',
                alt: 'Me Again'
            }];

        }
    ]);

})();