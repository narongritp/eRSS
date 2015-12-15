'use strict';

angular.module('eRSSApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


