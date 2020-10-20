var sumPrice = 0;
function Order(number,size,crust,toppings,price){
  this.number = number;
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.price=price;
}
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
  $("#order-form").submit(function(event){
    event.preventDefault();
var pizzaSize=$("#pizza-size").val();
var pizzaCrust=$("#pizza-crust").val();
var pizzaToppings=[];
var pizzaNbr=$("#pizza-number").val();
$("div#toppings:checkbox:checked").each(function(i){
pizzaToppings[i]=$(this).attr("name");
});
var price= myFunction(pizzaNbr,pizzaSize,pizzaCrust,pizzaToppings.length)
sumPrice= sumPrice + price;
var order = new Order(pizzaNbr,pizzaSize,pizzaCrust,pizzaToppings.length,price)
$("ul#orders").append("<li>"+order.number +" "+order.size+" "+order.crust+ " pizzas "+order.price+"$</li>")
$("#total").text(sumPrice);
$("#order-form")[0].reset();
alert("your order will be delivered to your location");

});
  function myFunction(number,size,crust,toppings) {
    var crustPrice,sizePrice,totalPrice,priceToppings,numberPrice;
    if (crust=='Crispy'){
          crustPrice=2;
        }else if(crust=='Stuffed'){
          crustPrice=3;
        }else if(crust=='Gluten-free'){
          crustPrice=5;
        }
        if(size=='Small'){
              sizePrice=2;
            }else if(size=='Medium'){
              sizePrice=4;
            }else if(size=='Large'){
              sizePrice=6;
            }
        priceToppings=2*toppings;
        totalPrice=(crustPrice+priceToppings)*sizePrice*number;
        return totalPrice;
      }