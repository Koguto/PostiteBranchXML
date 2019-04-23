var app = angular.module('postiteApp', []);
app.controller('postiteCtrl', function ($scope, $http) {
    $http.get("/api/Branchs/")
        .then(function (response) {
            $scope.Branchs = response.data;
        });

    $scope.Desenvolvedores = getDesenvolvedores();
    $scope.AmbienteSituacoes = getAmbientes();

    $scope.submit = function () {
        $http.post("/api/Branchs/", createBranchModel($scope)).then(function () { successCallback($scope, $http) }, errorCallback);
    };

    $scope.Deletar = function () {
        $http.delete("/api/Branchs/" + $scope.id).then(function () { successCallback($scope, $http) }, errorCallback);
    };

});



///<summary>
//      callbacks.js
///</summary>
function successCallback($scope, $http) {
    $http.get("/api/Branchs/")
        .then(function (response) {
            console.log(response.data);
            $scope.Branchs = response.data;
        });
}
function errorCallback(data) {
    alert('Falha');
}

///<summary>
//      model.js
///</summary>
function createBranchModel($scope) {
    return { "Id": $scope.id, "Desenvolvedor": $scope.Desenvolvedor, "AmbienteSituacao": $scope.AmbienteSituacao };
}

///<summary>
//      combos.js
///</summary>
function getDesenvolvedores() {
    return [
        { Nome: "Antonio", Valor: "100" },
        { Nome: "Danilo", Valor: "200" },
        { Nome: "Diego", Valor: "300" }
    ];
}

function getAmbientes() {
    return [
        { Nome: "Desenvolvimento", Valor: "100" },
        { Nome: "Homologação", Valor: "200" },
        { Nome: "Produção", Valor: "300" }
    ];
}