angular.module('webfuel.controllers', [])


//TODO: AJUSTAR ACESSO AO SQLITE
// .controller("DbController", function($scope, $cordovaSQLite) {
 
    // $scope.insert = function(vlr_alcool, vlr_gasolina) {
    //     var query = "INSERT INTO calculo (vlr_alcool, vlr_gasolina) VALUES (?,?)";
    //     $cordovaSQLite.execute(db, query, [vlr_alcool, vlr_gasolina]).then(function(res) {
    //         console.log("INSERT ID -> " + res.insertId);
    //     }, function (err) {
    //         console.error(err);
    //     });
    // }
 
    // $scope.select = function() {
    //     var query = "SELECT vlr_alcool, vlr_gasolina, created_at FROM calculo ORDER BY created_at DESC";
    //     $cordovaSQLite.execute(db, query, []).then(function(res) {
    //         if(res.rows.length > 0) {
    //             console.log("SELECTED -> " + res.rows.item(0).vlr_alcool + " " + res.rows.item(0).vlr_gasolina + " " + res.rows.item(0).created_at);
    //         } else {
    //             console.log("No results found");
    //         }
    //     }, function (err) {
    //         console.error(err);
    //     });
    // }
 
// })

.controller('CalculoCtrl', function($scope) {

    $scope.app = '..:: WebFuel2';

    //TESTES
    $scope.date = new Date();

     $scope.shouldShowDelete = false;
     $scope.shouldShowReorder = false;
     $scope.listCanSwipe = true

    //model para lista de calculos
    $scope.ultimosCalculos = [
      {
        vlrAlcool:2.69,
        vlrGasolina:3.70,
        vlrResultado : '',
        data : new Date()
      },
            {
        vlrAlcool:2.67,
        vlrGasolina:3.69,
        vlrResultado : '',
        data : new Date()
      },
            {
        vlrAlcool:2.54,
        vlrGasolina:3.49,
        vlrResultado : '',
        data : new Date()
      }
    ]; 

    //model para calculo
    $scope.calculo = [
      {
        vlrAlcool:0.00,
        vlrGasolina:0.00,
        exibir : false,
        vlrResultado : ''
      }

    ]; 

    //função para calculo
    $scope.calcular = function(calculo){

        var resultado = $scope.calculo.vlrGasolina * 0.7;

          if($scope.calculo.vlrAlcool > resultado){

            $scope.calculo.vlrResultado = "GASOLINA";
            console.log("calulo GASOLINA");           

          }else{

                $scope.calculo.vlrResultado = "ÁLCOOL";           
                console.log("calulo GASOLINA");                

          }

          $scope.calculo.exibir = true;
    };


    $scope.limpar = function(){

        $scope.calculo = [
          {
            vlrAlcool:0.00,
            vlrGasolina:0.00,
            exibir : false,
            vlrResultado : ''
          }

        ]; 


    };

})