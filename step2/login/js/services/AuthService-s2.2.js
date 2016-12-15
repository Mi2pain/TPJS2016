angular.module('authService', []).service('auth', authFnc);

authFnc.$inject = ['$http', '$q'];

function authFnc($http, $q) {
	var userMap = {};
	userMap['jdoe'] = 'jdoepwd';
	userMap['psmith'] = 'psmithpwd';
	userMap['tp'] = 'tp';

	var fncContainer = {
		localAuthAsk: localAuthAsk,
		authAsk : authAsk
	};

	function localAuthAsk(login, pwd) {
		var deferred = $q.defer();
		var validAuth = false;

		setInterval(function (login, pwd) {
			if (userMap[login] == pwd) {
				validAuth = true;
			} else {

			}
			clearInterval(this);
		}, 3000, login, pwd);

		return { "login": login, "validAuth": validAuth, "role": "admin" };

	}

	function authAsk(login, pwd) {
		var deferred = $q.defer();
		$http.post('/fakeauthwatcher', { 'login': login, 'pwd': pwd })
		.success(function (data, status, headers, config) {
			deferred.resolve("Success"); 
		})
		.error(function (data, status, headers, config) {
			deferred.reject("Error");
			// or server returns response with an error status. 
		});
		return deferred.promise; 
	};

	return fncContainer;
}

