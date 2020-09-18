angular.module('app.services', [])

        .factory('camaraFactory', [function () {
                return {
                    url: 'http://192.168.4.1',
                    stream: 'http://192.168.4.1:81',
                    anchoPantalla: 640,
                    altoPantalla: 280
                };
            }])

        .service('camaraService', ['$http', '$q', 'camaraFactory', function ($http, $q, camaraFactory) {
                //Para prender el flash: http://192.168.4.1/?var=flash&val=1
                //Para apagar el flash: http://192.168.4.1/?var=flash&val=0
                this.activarFlash = function (activar) {
                    return $http.get(camaraFactory.url + '?var=flash&val=' + (activar?'1':'0'))
                            .then(function (response) {
                                return response.data;
                            }, function (response) {
                                //Todo mal
                                throw "Hubo un error al intentar activar el flash";
                            });
                };
            }]);