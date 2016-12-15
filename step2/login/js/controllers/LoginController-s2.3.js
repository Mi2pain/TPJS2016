angular.module('loginApp').controller('loginCtrl', loginCrtFnt);

loginCrtFnt.$inject=['$scope','$log','auth'];

function loginCrtFnt($scope, $log, auth) {

	$scope.logAuthObject = function(user) {
		var authUser = auth.authAsk(user.login, user.pwd);
		if(authUser.validAuth){
			if(authUser.role =="admin"){
				$window.location.href = './admin.html';
			}else{
				$window.location.href = './watch.html';
			}
		}
	};
}