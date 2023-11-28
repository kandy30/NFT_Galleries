const header = document.querySelector('.header');
// 
//Sự kiện scroll
window.addEventListener('scroll', () => {

   //Lấy vị trí scroll
    let scrollPos = window.scrollY;

   //Thêm/xóa class scroll
    if (scrollPos > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

const connectWallet = async () => {
    await window.phantom.solana.connect();
    publicKey = window.phantom.solana.publicKey.toBase58();
    console.log(publicKey);
    alert("đã đăng nhập ví");
 }
  const createevent=() =>{
     window.location="createvent.html";
  }

      var app= angular.module("myapp",[])

     app.controller("controller", function ($scope, $http, $rootScope) {
 
     $scope.products = [];
     $http.get('data.json').then(
         function (response) {
             $scope.products = response.data;
            console.log($scope.products);
         },
         function (response) {
             alert("sai ten")
         }
     )
        });  




// ======================= transfer solana ==============>

