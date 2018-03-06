angular.module('ngSeedApp').service("flightService",flightService);
flightService.$inject = []
function flightService(){
    return {
        verifyFlight: function(flightObj){
            isValid = true;
            if(Object.keys(flightObj).length < 5){
                return false;
            }
            for(var key in flightObj){
                if(!flightObj[key]){
                    isValid = false;
                }
            }
            return isValid;
        }
    }
}