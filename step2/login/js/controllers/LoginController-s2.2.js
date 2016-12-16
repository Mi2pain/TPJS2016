angular.module('loginApp').controller('loginCtrl', loginCrtFnt);

loginCrtFnt.$inject = ['$scope', '$log', 'auth', '$window'];

function loginCrtFnt($scope, $log, auth, $window) {

	$scope.logAuthObject = function (user) {
		var authUser = auth.localAuthAsk(user.login, user.pwd);
		authUser.then(function (authSuccess) {
			if (authSuccess.validAuth) {
				if (authSuccess.role == 'ADMIN') {
					$window.location.href = './admin.html';
				} else {
					$window.location.href = './watch.html';
				}
			}else {
				alert("Not Valid user");
			}
		});
	};
}