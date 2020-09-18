angular.module('app.controllers', [])

        .controller('inicioCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                
                $scope.load = function(){
                    cordova.screen.orientation.lock('portrait');
                };
                
                load();
            }])

        .controller('menuCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('configuracionCtrl', ['$scope', '$stateParams', '$ionicPopup', 'camaraFactory',
            function ($scope, $stateParams, $ionicPopup, camaraFactory) {
                
                $scope.load = function(){
                    cordova.screen.orientation.lock('portrait');
                };
                
                load();

                $scope.var = {
                    url: camaraFactory.url
                };
                
                $scope.guardarUrl = function(){
                    camaraFactory.url = $scope.var.url;
                    $ionicPopup.alert({
                        title: 'Info',
                        template: 'URL actualizada con exito'
                    });
                };

            }])

        .controller('camaraCtrl', ['$scope', '$state', '$stateParams', '$ionicLoading', '$ionicPopup', 'camaraService', 'camaraFactory', '$window',
            function ($scope, $state, $stateParams, $ionicLoading, $ionicPopup, camaraService, camaraFactory, $window) {
                
                $scope.var = {
                    flash: false,
                    stream: camaraFactory.stream,
                    widthPantalla: $window.innerWidth + 'px',
                    heightPantalla: ($window.innerHeight-130) + 'px'
                };

                $scope.activarFlash = function () {
                    $scope.var.flash = !$scope.var.flash;
                    $ionicLoading.show({
                        template: '<ion-spinner icon=\"android\" class=\"spinner-energized\"></ion-spinner>'
                    });

                    camaraService.activarFlash($scope.var.flash)
                            .then(function (response) {
                                $ionicLoading.hide();
                            })
                            .catch(function (data) {
                                $ionicLoading.hide();
                                $ionicPopup.alert({
                                    title: 'Info',
                                    template: data
                                });
                            });
                };
                
                $scope.gotoCamara = function() {
                    cordova.screen.orientation.lock('landscape');
                    $state.go('menu.camara', {}, {location: "replace"});
                };


            }]);
 