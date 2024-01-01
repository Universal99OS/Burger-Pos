
let cartId=0;


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

    // get image src link
    const imgSrc=document.querySelector(`.${title} .itemImg img`).getAttribute("src");
    
    // create image container
    const imgContainer=document.createElement('div');
    imgContainer.classList.add('image');

    // add image to the image container
    const imgEle=document.createElement('img');
    imgEle.setAttribute('src',imgSrc);
    imgContainer.appendChild(imgEle);

    // create item discription container
    const itemDis=document.createElement('div');
    itemDis.id='itemDes';

    // create itemtitle container and make it child element of discription container
    const itemTitle=document.createElement('div');
    itemTitle.id='itemTitle';
    itemTitle.innerHTML=document.querySelector(`.${title} .itemTitile`).innerHTML;
    itemDis.appendChild(itemTitle);

    // create itemPrice container and make it an child element of discription container
    const itemPrice=document.createElement('div');
    itemPrice.id='itemPrice';

    // const sizeOption=document.querySelector(`.${title} .options .sizes .sizelist`);
    // const sizeStyle=window.getComputedStyle(sizeOption);

    // if(!(sizeStyle.display==='none')){
    //     document.querySelectorAll(`.${title} .options .sizes .sizelist a`).forEach(function(li){
    //         li.onclick=function(){
    //             itemPrice.innerHTML=this.dataset.price;
    //         }
    //     })
    // }else{
    //     itemPrice.innerHTML=document.querySelector(`.${title} .itemPrice`).innerHTML;
    // }

    const coun=document.querySelector(`.${title} .options .qty .qtyCount`).innerHTML;
    const priz=document.querySelector(`.${title} .itemPrice`).innerHTML.split(' ');
    itemPrice.innerHTML=`Rs ${parseInt(coun)*parseFloat(priz[1])}.00`;

    itemDis.appendChild(itemPrice);


    // create orderOption container

    const orderOption=document.createElement('div');
    orderOption.id='orderOption';

    // create qty count container

    const qtyCount=document.createElement('div');
    qtyCount.id='qtyCount';

    orderOption.appendChild(qtyCount);

    // create minus container

    const minus=document.createElement('div');
    minus.id='minus';

    minus.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>';

    qtyCount.appendChild(minus);

    // create number count container

    const numC=document.createElement('div');
    numC.id='numCount';

    numC.innerHTML=parseInt(coun);

    qtyCount.appendChild(numC);

    // create plus container

    const plusC=document.createElement('div');

    plusC.id='plus';

    plusC.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>';

    qtyCount.appendChild(plusC);


    // create remove container

    const removeC=document.createElement('div');
    removeC.id='remove';

    removeC.innerHTML='Remove';

    orderOption.appendChild(removeC);
    // const itemTitle=document.querySelector(`.${title} .itemTitile`).innerHTML;
    const cartItem=document.createElement('li');
    // cartItem.setAttribute('data-id',`${cartId}`);
    // cartId++;
    // itemName.innerHTML=itemTitle;
    cartItem.appendChild(imgContainer);
    cartItem.appendChild(itemDis);
    cartItem.appendChild(orderOption);

    orderList.appendChild(cartItem);

    removeC.onclick=function(){
        orderList.removeChild(cartItem);
    }

}

document.querySelectorAll(".itemBox .addBtn button").forEach(function(button){
    button.onclick=function(){
        displayOrder(this.dataset.item);
    }
})

// deActiveAll Size options
function deActiveAll(itemParent){
    document.querySelectorAll(`.${itemParent} .sizelist a`).forEach(function(a){
        const sizeOption=window.getComputedStyle(a);
        if(a.classList.contains('active')){
            a.classList.remove('active');
        }
    });
}

// appling the active property to the size option buttons

document.querySelectorAll('.sizelist').forEach(function(sizelist){
    const ulStyle=window.getComputedStyle(sizelist);
    if(!(ulStyle.display==='none')){
        document.querySelectorAll(`.${sizelist.dataset.item} .sizelist a`).forEach(function(a){
            a.onclick=function(){
                deActiveAll(sizelist.dataset.item);
                a.classList.add('active');
                document.querySelector(`.${sizelist.dataset.item} .itemPrice`).innerHTML=`Rs. ${a.dataset.price}.00`;
            }
        })
    }
});

// Apply remove event to the cart

// document.querySelectorAll('.orderDetail .orders #orderLi li #remove')

// var linkk=document.querySelector(".items img").src;
// console.log(linkk);
// alert(linkk);

// var attLinkk=document.querySelector(".items img").getAttribute("src");
// console.log(attLinkk);