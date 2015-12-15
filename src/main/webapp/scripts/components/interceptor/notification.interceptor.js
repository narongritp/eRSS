 'use strict';

angular.module('eRSSApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-eRSSApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-eRSSApp-params')});
                }
                return response;
            }
        };
    });
