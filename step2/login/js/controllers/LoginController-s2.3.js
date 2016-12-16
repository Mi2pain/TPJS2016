angular.module('loginApp').controller('loginCtrl', loginCrtFnt);

loginCrtFnt.$inject = ['$scope', '$log', 'auth', '$window'];

function loginCrtFnt($scope, $log, auth, $window) {

	$scope.logAuthObject = function (user) {
		var authUser = auth.authAsk(user.login, user.pwd);
		authUser.then(function (greeting) {
			if (authUser.validAuth) {
				if (authUser.role == "admin") {
					$window.location.href = './admin.html';
				} else {
					$window.location.href = './watch.html';
				}
			}
		}, function (reason) {
			alert('Failed: ' + reason);
		});

	};
}