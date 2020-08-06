angular.module('app', []);

angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [
        {
            country: 'India',
            active: 140000,
            death: 5000
        },
        {
            country: 'Europe',
            active: 140000,
            death: 5000
        },
        {
            country: 'USA',
            active: 140000,
            death: 5000
        },
        {
            country: 'Mexico',
            active: 140000,
            death: 5000
        },
        {
            country: 'China',
            active: 140000,
            death: 5000
        }
    ];
});