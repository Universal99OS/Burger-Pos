

function addQuantity(index){
    let count=document.querySelectorAll(".qtyCount");
    count[index].innerHTML=parseInt(count[index].innerHTML,10)+1;
}

function minusQuantity(index){
    let count=document.querySelectorAll(".qtyCount");
    let value=parseInt(count[index].innerHTML,10);
    if(value>1){
        count[index].innerHTML=value-1;
    }else{
        alert(`Minimum qty should be ${value}`);
    }
}

const plusBtns= document.querySelectorAll(".itemBox .options .qty .plus");
for(let i=0;i<plusBtns.length;i++){
    plusBtns[i].onclick=function(){
        addQuantity(i);
    }
}
const minusBtn=document.querySelectorAll(".itemBox .options .qty .minus");
for(let i=0;i<minusBtn.length;i++){
    minusBtn[i].onclick=function(){
        minusQuantity(i);
    }
}
function displayOrder(title){
    const orderList= document.querySelector(".orderDetail .orders #orderLi");
    const itemTitle=document.querySelector(`.${title} .itemTitile`).innerHTML;
    const itemName=document.createElement('li');
    itemName.innerHTML=itemTitle;

    orderList.appendChild(itemName);
}

document.querySelectorAll(".itemBox .addBtn button").forEach(function(button){
    button.onclick=function(){
        displayOrder(this.dataset.item);
    }
})