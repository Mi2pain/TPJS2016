angular.module('authService', []).service('auth',authFnc);

function authFnc() {

	var userMap = {}; 

	userMap['jdoe'] = 'jdoepwd';
	userMap['psmith'] = 'psmithpwd';
	userMap['tp'] = 'tp';

	var fncContainer = {
		checkUser: checkUser,
		userList: userList
	};

	function checkUser(userlogin,userpwd) {

	};

	function userList() {
		return userMap;
	};

	return fncContainer;
}