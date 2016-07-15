/**
 * Created by Marcelo Barros (marcelobjr@gmail.com).
 */

angular.module("<%= appName %>")
    .provider('appConfig',['$httpParamSerializerProvider', function($httpParamSerializerProvider){
        var config = {
        baseUrl: 'http://localhost:8000',
        nomeEmpresa: 'Projeto',
        organizacao:{
            categorias: [
                {value:1, label: 'Oportunidade'},
                {value:2, label: 'Cliente'},
                {value:3, label: 'Fornecedor'},
                {value:4, label: 'Transportadora'}
            ]
        }
        
    };

    return {
        config: config,
        $get: function() {
            return config;
        }
    }
}])
    .factory('focus', function($timeout, $window) {
    return function(id) {
      // timeout makes sure that is invoked after any other event has been triggered.
      // e.g. click events that need to run before the focus or
      // inputs elements that are in a disabled state but are enabled when those events
      // are triggered.
      $timeout(function() {
        var element = $window.document.getElementById(id);
        if(element)
          element.focus();
      });
    };
  })

  .directive('eventFocus', function(focus) {
    return function(scope, elem, attr) {
      elem.on(attr.eventFocus, function() {
        focus(attr.eventFocusId);
      });
      
      // Removes bound events in the element itself
      // when the scope is destroyed
      scope.$on('$destroy', function() {
        element.off(attr.eventFocus);
      });
    };
  });