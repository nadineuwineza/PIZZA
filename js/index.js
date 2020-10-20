

  // var sumTotal = 0;
  // var toppingsArray= [];
  // var toppingsNbr;
  // var pizzaSize;
  // var pizzaCrust;
  // var pizzaNbr;
  // function Order(number,size,crust,toppings,price){
  //   this.number = number;
  //   this.size=size;
  //   this.crust=crust;
  //   this.toppings=toppings;
  //   this.price=price;
  // }
  // $(document).ready(function(){
  //   $("#check-deliver").click(function () {
  //     if ($(this).is(":checked")) {
  //         $("#deliver-hide").show();
  //         sumTotal= sumTotal+5;
  //     } else {
  //         $("#deliver-hide").hide();
  //         sumTotal=sumTotal-5;
  //     }
  // });
  //   $('#order-form').submit(function(event){
  //     event.preventDefault();
  //     pizzaSize= $('#pizza-size').val();
  //     pizzaNbr= $("#pizza-number").val();
  //     pizzaCrust= $("#crust").val();
  //     var address= $('#street').val();
  //     var pizzaToppings= [];
     
  //     $('div#toppings:checkbox:checked').each(function(i){
  //       pizzaToppings[i] = $(this).val();
  //       toppingsArray[i] = $(this).attr('name')
  //     });
  //     toppingsList = toppingsArray.join(',');
  //     toppingsNbr= toppingsArray.length;
  //     var orderPrice= priceCalc();
  //     sumTotal = sumTotal + orderPrice;
  //     if($('#check-deliver').is(":checked")){
  //       alert("order will be delivered at " + Street);
  //     }
  //     var newOrder= new Order(pizzaNbr,pizzaSize,pizzaCrust,orderPrice)
  //     $("ul#orders").append('<li><span>'+ newOrder.theOrder() +'</span></li>');
  //     $("#total").text("total:" + sumTotal)
  //     $("#deli-hide").hide();
  //   });
   
  // });
  // function priceCalc(){
  //   var crustPrice,toppingsPrice;
  //   var sizeChange;
  //   var totalPrice;
  //   if(pizzaSize=='Small'){
  //     sizeChange=$2;
  //   }else if(pizzaSize=='Medium'){
  //     sizeChange=$4;
  //   }else if(pizzaSize=='Large'){
  //     sizeChange=6;
  //   }
  //   if (pizzaCrust=='Crispy'){
  //     crustPrice=sizeChange*1.5;
  //   }else if(pizzaCrust=='Stuffed'){
  //     crustPrice=sizeChange * 2;
  //   }else if(pizzaCrust=='Gluten-free'){
  //     crustPrice=sizeChange*3;
  //   }
  //   toppingsPrice= toppingsNbr * sizeChange;
  //   totalPrice= (crustPrice+toppingsPrice)*pizzaNbr;
  //   return totalPrice;
  // }
  // order.prototype.theOrder = function (){
  //   return this.number + " " + this.size + "pizzas, " +  this.crust + ",with " + this.toppings + " toppings.<br> Cost:"+this.price+"$";
  // }
  // function reload(){
  //   location.reload();
  // }
  $(document).ready(function(){
    $("#check-deliver").click(function(){
if ($(this).is(":checked")){
$("#deliver-hide").show()
}
else{
  $("#deliver-hide").hide()
}

    }); 
  });
  $("#order-form").submit(function(){
var pizzaSize=$("#pizza-size").val();
var pizzCrust=$("#pizza-crust").val();
var pizzaToppings=[];
var pizzaNbr=$("#pizza-number").val();
$("div#toppings:checkbox:checked").each(function(i){
pizzaToppings[i]=$(this).attr("name");

});
  });
  function myFunction(number,size,crust,toppings) {
    if (pizzaCrust=='Crispy'){
          crustPrice=2;
        }else if(pizzaCrust=='Stuffed'){
          crustPrice=3;
        }else if(pizzaCrust=='Gluten-free'){
          crustPrice=5;
        }
        if(pizzaSize=='Small'){
              sizePrice=2;
            }else if(pizzaSize=='Medium'){
              sizePrice=4;
            }else if(pizzaSize=='Large'){
              sizePrice=6;
            }
        priceToppings=2*pizzaNbr
        totalPrice=(pizzaCrust+pizzaToppings)*pizzaSize*pizzaNbr
        return totalPrice;
      }
 
      