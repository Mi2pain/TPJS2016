angular.module('authService', []).service('auth', authFnc);

authFnc.$inject = ['$http', '$q'];

function authFnc($http, $q) {
	var userMap = {};
	userMap['jdoe'] = 'jdoepwd';
	userMap['psmith'] = 'psmithpwd';
	userMap['tp'] = 'tp';

	var fncContainer = {
		localAuthAsk: localAuthAsk,
		authAsk: authAsk
	};

	function localAuthAsk(login, pwd) {
		var deferred = $q.defer();

		var userTest = {};
		userTest['login'] = login;
		userTest['validAuth'] = false;
		userTest['role'] = 'ADMIN';
		setInterval(function (login, pwd) {
			if (userMap[login] == pwd) {
				userTest['validAuth'] = true;
				deferred.resolve(userTest);
			} else {
				deferred.resolve(userTest);
			}
			clearInterval(this);
		}, 3000, login, pwd);

		return deferred.promise;

	}

	function authAsk(login, pwd) {
		var deferred = $q.defer();
		var userTest = {};
		userTest['login'] = login;
		userTest['validAuth'] = false;
		userTest['role'] = 'ADMIN';
		$http.post('/fakeauthwatcher', { 'login': login, 'pwd': pwd })
			.success(function (data, status, headers, config) {
				userTest['validAuth'] = true;
				deferred.resolve(userTest);
			})
			.error(function (data, status, headers, config) {
				deferred.reject(status);
			});
		return deferred.promise;
	};

	return fncContainer;
}

