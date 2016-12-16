angular.module('commServices', []).factory('comm', commFnc);
commFnc.$inject = ['$http', '$q'];

function commFnc($http, $q) {
    var comm = {
        loadImages: loadImages,
        loadPres: loadPres,
        savePres: savePres

    };

    function loadImages(presName, presID) {
        var deferred = $q.defer();

        setTimeout(function () {
            resolve();
        }, 3000);
		// setInterval(function (presName, presID) {
		// 	if (userMap[login] == pwd) {
		// 		userTest['validAuth'] = true;
		// 		deferred.resolve(userTest);
		// 	} else {
		// 		deferred.resolve(userTest);
		// 	}
		// 	clearInterval(this);
		// }, 3000, login, pwd);

		// return deferred.promise;
    };

    function loadPres(presName, presID) {
        // TODO
    };

    function savePres(presName, presID) {
        // TODO
    };

};
