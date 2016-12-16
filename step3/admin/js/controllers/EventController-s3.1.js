angular.module('adminApp').controller('eventCtrl', eventCtrlFnt);

eventCtrlFnt.$inject = ['$scope', '$log', 'factory'];

function eventCtrlFnt($scope, $log, factory) {
    $scope.currentPresentation = factory.presentationCreation("template_pres","description of the template presentation");

    $scope.newSlide = function () {
        var slid = factory.slidCreation("slide-Title","slide-text");
        var imgNum = Math.floor(Math.random() * 11) + 1;
        var content = factory.contentCreation('contentTitle', 'contentType', '../img/' + imgNum + '.jpg');

        slid.contentMap['id'] = content.id;
        slid.contentMap['title'] = content.title;
        slid.contentMap['src'] = content.src;
        slid.contentMap['type'] = content.type;

        $scope.currentPresentation.slidArray.push(slid);
    };

    $scope.selectCurrentSlid = function (slide) {
        $scope.currentSlide = slide;
    }

    $scope.isSlidContentEmpty = function (slid) {
        if (slid.contentMap[1] == undefined) {
            return true;
        }
        return false;
    }
}