Glass.controller("libraryCtrl", function($scope, notasModel){
 $scope.notas = notasModel.getNotas();
 console.log('This is a recently change....');
})
