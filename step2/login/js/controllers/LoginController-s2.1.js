angular.module('loginApp').controller('loginCtrl', loginCrtFnt);

loginCrtFnt.$inject=['$scope','$log', '$window','auth'];

function loginCrtFnt($scope, $log, $window, auth) {

	$scope.logAuth = function() {
		$log.info('user login', $scope.user.login);
		$log.info('user pwd', $scope.user.pwd);
	};

	$scope.logAuthObject = function(user) {
		//$log.info('user login', user.login);
		//$log.info('user pwd', user.pwd);
		$log.info(auth.userList());
		if(auth.checkUser(user.login, user.pwd)){
			$window.location.href = './loginSuccess.html';
		}
	};
}