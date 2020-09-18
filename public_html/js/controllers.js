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

        .controller('camaraCtrl', ['$scope', '$stateParams', '$ionicLoading', '$ionicPopup', 'camaraService',
            function ($scope, $stateParams, $ionicLoading, $ionicPopup, camaraService) {
                
                $scope.var = {
                    flash: false,
                    stream: 'http://192.168.4.1:81'
                };

                $scope.activarFlash = function () {
                    $scope.var.flash = !$scope.var.flash;
                    $ionicLoading.show({
                        template: '<ion-spinner icon=\"android\" class=\"spinner-energized\"></ion-spinner>'
                    });

                    camaraService.activarFlash($scope.var)
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


            }]);
 