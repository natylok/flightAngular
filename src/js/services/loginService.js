angular.module('ngSeedApp').service("loginService",loginService);
loginService.$inject = ['AUTH_CONSTANTS']
function loginService(AUTH_CONSTANTS){
    return {
        verifyLogin: function(userName,password){
            return userName === AUTH_CONSTANTS.USER_NAME && password === AUTH_CONSTANTS.PASSWORD;
        }
    }
}