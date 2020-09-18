angular.module('app.controllers', [])

        .controller('inicioCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                
                $scope.load = function(){
                    screen.orientation.lock('portrait'); 
                };
                
                $scope.load();
            }])

        .controller('menuCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('configuracionCtrl', ['$scope', '$state', '$stateParams', '$ionicPopup', 'camaraFactory',
            function ($scope, $state, $stateParams, $ionicPopup, camaraFactory) {
                
                $scope.var = {
                    widthPantalla: camaraFactory.anchoPantalla,
                    heightPantalla: camaraFactory.altoPantalla
                };
                
                $scope.load = function(){
                    screen.orientation.lock('portrait');
                };
                
                $scope.load();

                $scope.var = {
                    url: camaraFactory.url
                };
                
                $scope.guardar = function(){
                    camaraFactory.url = $scope.var.url;
                    camaraFactory.anchoPantalla = $scope.var.widthPantalla;
                    camaraFactory.altoPantalla = $scope.var.heightPantalla;
                    
                    $ionicPopup.alert({
                        title: 'Info',
                        template: 'URL actualizada con exito'
                    });
                };
                
                $scope.gotoConfiguracion = function() {
                    screen.orientation.lock('landscape');
                    $state.go('menu.configuracion', {}, {location: "replace"});
                };
                
                $scope.gotoInicio = function() {
                    screen.orientation.lock('portrait');
                    $state.go('menu.inicio', {}, {location: "replace"});
                };

            }])

        .controller('camaraCtrl', ['$scope', '$state', '$stateParams', '$ionicLoading', '$ionicPopup', 'camaraService', 'camaraFactory', '$window',
            function ($scope, $state, $stateParams, $ionicLoading, $ionicPopup, camaraService, camaraFactory, $window) {
                
                $scope.var = {
                    flash: false,
                    stream: camaraFactory.stream,
                    widthPantalla: camaraFactory.anchoPantalla + 'px',//$window.innerWidth + 'px',
                    heightPantalla: camaraFactory.altoPantalla + 'px'//($window.innerHeight-120) + 'px'
                };
                
                $scope.load = function() {
                    $scope.var.widthPantalla = camaraFactory.anchoPantalla + 'px';//$window.innerWidth + 'px';
                    $scope.var.heightPantalla = camaraFactory.altoPantalla + 'px';//($window.innerHeight-130) + 'px';
                };
                
                $scope.load();
                
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
                    screen.orientation.lock('landscape');
                    $state.go('menu.camara', {}, {location: "replace"});
                };
                
                $scope.gotoInicio = function() {
                    screen.orientation.lock('portrait');
                    $state.go('menu.inicio', {}, {location: "replace"});
                };


            }]);
 