

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

    const sizeOption=document.querySelector(`.${title} .options .sizes .sizelist`);
    const sizeStyle=window.getComputedStyle(sizeOption);

    if(!(sizeStyle.display==='none')){
        document.querySelectorAll(`.${title} .options .sizes .sizelist a`).forEach(function(li){
            li.onclick=function(){
                itemPrice.innerHTML=this.dataset.price;
            }
        })
    }else{
        itemPrice.innerHTML=document.querySelector(`.${title} .itemPrice`).innerHTML;
    }

    itemDis.appendChild(itemPrice);

    // const itemTitle=document.querySelector(`.${title} .itemTitile`).innerHTML;
    const cartItem=document.createElement('li');
    // itemName.innerHTML=itemTitle;
    cartItem.appendChild(imgContainer);
    cartItem.appendChild(itemDis);

    orderList.appendChild(cartItem);

}

document.querySelectorAll(".itemBox .addBtn button").forEach(function(button){
    button.onclick=function(){
        displayOrder(this.dataset.item);
    }
})

// var linkk=document.querySelector(".items img").src;
// console.log(linkk);
// alert(linkk);

// var attLinkk=document.querySelector(".items img").getAttribute("src");
// console.log(attLinkk);