angular.module('app.controllers', [])

        .controller('inicioCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('menuCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('configuracionCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('camaraCtrl', ['$scope', '$stateParams', '$ionicLoading', '$ionicPopup', 'camaraService', 'camaraFactory', '$window',
            function ($scope, $stateParams, $ionicLoading, $ionicPopup, camaraService, camaraFactory, $window) {
                
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
                
                $scope.verCamara = function() {
                    cordova.InAppBrowser.open($scope.var.stream, "_system"); 
                };


            }]);
 