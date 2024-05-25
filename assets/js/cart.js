console.log('ok')

let product_list=[
  {
    id:1,
    name:'Running Sneaker Shoes',
    img:'./assets/images/product-1.jpg',
    price:499,

  },
  {
    id:2,
    name:'Leather Mens Slipper',
    img:'./assets/images/product-2.jpg',
    price:1499

  },
  {
    id:3,
    name:'Simple Fabric Shoe',
    img:'./assets/images/product-3.jpg',
    price:299

  },
  {
    id:4,
    name:'Air Jordan 7 Retro ',
    img:'./assets/images/product-4.jpg',
    price:2100

  },
  {
    id:5,
    name:'Nike Air Max 270 SE',
    img:'./assets/images/product-5.jpg',
    price:2800

  },
  {
    id:6,
    name:'Adidas Sneakers Shoes',
    img:'./assets/images/product-6.jpg',
    price:743

  },
  {
    id:7,
    name:'Nike Basketball shoes',
    img:'./assets/images/product-7.jpg',
    price:938

  },
  {
    id:8,
    name:'simple Fabric shoe',
    img:'./assets/images/product-8.jpg',
    price:844

  },
  {
    id:9,
    name:'Running Sneaker Shoes',
    img:'./assets/images/product-5.jpg',
    price:298

  },
  {
    id:10,
    name:'Running Sneaker Shoes',
    img:'./assets/images/product-1.jpg',
    price:298

  },
  {
    id:11,
    name:'faltu shoes',
    img:'./assets/images/product-4.jpg',
    price:24498

  }
];




function renderItems(){
product_list.forEach((items)=>{
let templetclone=`<li class="product-item">
<div class="product-card" tabindex="0">
  <figure class="card-banner">
    <img src="${items.img}" width="312" height="350" loading="lazy"
      alt="Running Sneaker Shoes" class="image-contain">
    <div class="card-badge">New</div>
    <ul class="card-action-list">
      <li class="card-action-item">
        <button class="card-action-btn" aria-labelledby="card-label-1">
          <ion-icon name="cart-outline" onclick="productadd_cart(${items.id})" class="card-items1"></ion-icon>
        </button>
        <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
      </li>
    </ul>
  </figure>
  <div class="card-content">
    <div class="card-cat">
      <a href="#" class="card-cat-link">Men</a> /
      <a href="#" class="card-cat-link">Women</a>
    </div>
    <h3 class="h3 card-title">
      <a href="#">${items.name}</a>
    </h3>
    <data class="card-price">₹${items.price}</data>
  </div>
</div>
</li>`


document.querySelector('.product-list').innerHTML+=  templetclone;

})

}



let basketamount=0;
let basket_items_total=0;
let cartitems=[];
// localStorage.setItem('basketamount',basketamount);
// localStorage.setItem('basket_items_total',basket_items_total);
// localStorage.setItem('cartitems', JSON.stringify(cartitems));
function productadd_cart(id){
product_list.forEach((itmscart)=>{

  if(itmscart.id==id){
    cartitems.push(itmscart);
     setTimeout(()=>{
      document.querySelector('.popup-message').style.display='flex';
      
     },1);

     setTimeout(()=>{
     document.querySelector('.popup-message').style.display='none';
      
    },1000);
  }


})

cart_updatea();
}


function cart_updatea(){



  basketamount=0;
  basket_items_total=0;
  document.querySelector(".items-list").innerHTML='';

  localStorage.setItem('basketamount',basketamount);
  localStorage.setItem('cartitems', JSON.stringify(cartitems));
  localStorage.setItem('basket_items_total',basket_items_total);
  document.querySelector('.basket-value-pay').innerHTML=localStorage.getItem('basketamount');
  document.querySelector('.basket-items').innerHTML=localStorage.getItem('basket_items_total');
 cartitems=JSON.parse( localStorage.getItem('cartitems'));
  cartitems.forEach((items)=>{
    let cloneitems=`<div class="itemcart">
    <img src="${items.img}" alt="">
    <p class="name-product">${items.name}</p>
    <strong class="product-price">₹${items.price}</strong>
    <button class="cart-items-removed" onclick="removedcartitems(${items.id})">Remove</button>
   </div>`;

   basket_items_total+=1;
   basketamount+=(items.price);


   localStorage.setItem('basketamount',basketamount);
   localStorage.setItem('basket_items_total',basket_items_total);
   localStorage.setItem('cartitems', JSON.stringify(cartitems));

  document.querySelector('.basket-items').innerHTML=localStorage.getItem('basket_items_total');
   document.querySelector(".items-list").innerHTML+=cloneitems;
   document.querySelector('.basket-value-pay').innerHTML=localStorage.getItem('basketamount');
  })

}


function removedcartitems(id){

  cartitems=cartitems.filter((items)=>items.id!=id);


  cart_updatea();
}



function auto(){
let cartI= JSON.parse(localStorage.getItem('cartitems'));

cartI.forEach((items)=>{
   
    let cloneitems=`<div class="itemcart">
    <img src="${items.img}" alt="">
    <p class="name-product">${items.name}</p>
    <strong class="product-price">₹${items.price}</strong>
    <button class="cart-items-removed" onclick="removedcartitems(${items.id})">Remove</button>
   </div>`;

   document.querySelector(".items-list").innerHTML+=cloneitems;
})

document.querySelector('.basket-value-pay').innerHTML=localStorage.getItem('basketamount');
document.querySelector('.basket-items').innerHTML=localStorage.getItem('basket_items_total');
}

if(!(localStorage.getItem('cartitems'))){
console.log('empty');
}else{
  auto();
}

renderItems();

// -------------------payment page required details----------------

let payment=document.querySelector('.pay-payment');

payment.addEventListener('click',()=>{
  console.log('click')
  if(localStorage.getItem('basketamount')!=0){
    window.location.href='order_submit.html';
  }
})





// -----------touggle button--------------------


let busketicon=document.querySelector('.cartTouggle');
let basketContent=document.querySelector('.allitems-list');
let closedbasket=document.querySelector('.closed');

busketicon.addEventListener('click', () =>{
  basketContent.style.display='flex';
 
})

closedbasket.addEventListener('click', ()=>{
  basketContent.style.display='none';
})



function diplYOFPOPUP(){
  document.querySelector('.popup-message').style.display='none';
}

//

let mobilecart=document.querySelector(".cartTouggl");

mobilecart.addEventListener("click", ()=>{
  basketContent.style.display='flex';
})