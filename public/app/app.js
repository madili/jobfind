angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Sales Person',
        description: 'you will fight dragons'
    }, {
        title: 'Accountant',
        description: 'you will fight dragons'
    }, {
        title: 'IT Extreme',
        description: 'you will fight dragons'
    }];
});