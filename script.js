let quantity=1;

function addQuantity(){
    quantity++;
    document.querySelector(".qtyCount").innerHTML=quantity;
}

function minusQuantity(){
    if(quantity>1){
        quantity--;
        document.querySelector(".qtyCount").innerHTML=quantity;
    }else{
        alert(`Minimum quantity should be ${quantity}`);
    }
}

document.querySelector(".itemBox .options .qty .plus").onclick=addQuantity;
document.querySelector(".itemBox .options .qty .minus").onclick=minusQuantity;