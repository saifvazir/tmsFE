

    
        var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

    	$scope.register= function(data){
    			var payload={
    				'Username':data.Username || "",
    				'Email_id':data.Email_id || "",
    				'Password':data.Password || "",
                    'is_google':data.google || 0,
                    'is_facebook':data.fb || 0
    			};   
            var request=$http({  
                        method: 'POST',  
                        url: "http://192.168.0.106:5000/api/v1.0/register",
                        headers: { 'Content-Type': 'application/json' },   
                        data: {payload} 

                    });
                    return request.then(handleSuccess, handleFailure);

    	}
    	function handleSuccess(response){
            console.log(response);
            console.log(response.data);
            return (response.data);
            };

    function handleFailure(response){
            return (response.data);
            }

    });






    
