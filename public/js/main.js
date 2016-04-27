// public/js/main.js

angular.module('artebalaoweb', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        
        $routeProvider.when('/portfolio', {
           templateUrl: 'pages/portfolio/index.html',
           Controller: 'PortfolioController.js' 
        });
        
    });