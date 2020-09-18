angular.module('app.routes', [])

        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider


                    .state('menu.inicio', {
                        url: '/inicio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/inicio.html',
                                controller: 'inicioCtrl'
                            }
                        }
                    })

                    .state('menu', {
                        url: '/side-menu21',
                        templateUrl: 'templates/menu.html',
                        controller: 'menuCtrl'
                    })

                    .state('menu.configuracion', {
                        url: '/configuracion',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/configuracion.html',
                                controller: 'configuracionCtrl'
                            }
                        }
                    })

                    .state('menu.camara', {
                        url: '/camara',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/camara.html',
                                controller: 'camaraCtrl'
                            }
                        }
                    });

            $urlRouterProvider.otherwise('/side-menu21/inicio');


        });