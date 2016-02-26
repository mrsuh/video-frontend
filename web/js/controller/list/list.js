var ListController = function ($rootScope) {
    $rootScope.collapsed = true;
};
app.controller("ListController", ListController);
ListController.$inject = ['$rootScope'];