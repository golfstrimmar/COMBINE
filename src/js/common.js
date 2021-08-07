//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// import Plyr from "plyr";
// ------------------------------------------------



// $(window).on("load", function() {
//     $(".cssload").delay(200).fadeOut("slow");
// });

// // $(document).ready(function (e) {

// //     $("input").on("blur", function () {
// //         $(this).next("i").css("opacity", "0")

// //     }); 
// //     })
// [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
//     img.setAttribute('src', img.getAttribute('data-src'));
//     img.onload = function () {
//         img.removeAttribute('data-src');
//     };
//   });
  
  
// const DragAndDrop = () => {
//     const card =document.querySelector('.js-card'); 
//     const cells =document.querySelectorAll('.js-cell'); 
//     const dragStart = function () {
//         setTimeout(()=>{
//             this.classList.add( 'hide');
//             }, 0)
//     };
//     const dragEnd = function () {
//         setTimeout(()=>{
//             this.classList.remove( 'hide');
//             }, 0)
//     };
//     const dragOver = function(e){
//     e.preventDefault()
//     }
//     const dragEnter = function(){
//         this.classList.add('hovered');
//     }
//     const dragLeave = function(){
//         this.classList.remove('hovered');
//     }
//     const dragDrop = function(){
//        this.append(card)
//     }


//     cells.forEach((cell)=>{
//         cell.addEventListener('dragover', dragOver);
//         cell.addEventListener('dragenter', dragEnter);
//         cell.addEventListener('dragleave', dragLeave);
//         cell.addEventListener('drop', dragDrop);
//     })


//     card.addEventListener('dragstart', dragStart );
//     card.addEventListener('dragend', dragEnd);
// };

// DragAndDrop();



const DragAndDropMy = () => {
    const card =document.querySelector('.js-card'); 
    const cells =document.querySelectorAll('.js-cell'); 
    const cards =document.querySelectorAll('.js-card'); 
    var cart =document.querySelector('.js-cart'); 

   var cardAct =[];

    const dragStart = function () {
        setTimeout(()=>{
            this.classList.add( 'act');
             cardAct = this;
            }, 0)
    };

    const dragEnd = function () {
        setTimeout(()=>{
            this.classList.remove( 'act');
            }, 0)
    };

    const dragOver = function(e){
    e.preventDefault()
    }

    // const dragEnter = function(){
    //     this.classList.add('hovered');
    // }
    // const dragLeave = function(){
    //     this.classList.remove('hovered');
    // }


    const dragDrop = function(){
    // из глобальной переменной достаем содержимое. то есть drop карточку
    var cardHTML = cardAct.innerHTML;

    let p = document.createElement('div');
    p.classList.add("list__card", "js-card", "js-card-used");
    p.setAttribute("draggable", "true");
    p.innerHTML = cardHTML;

    // -----------------------------------
    // находит корзину
    var destroy = p.querySelector(".js-cart");
    // проявляет корзину
    destroy.style.opacity = "1";

    // ожидание клика по корзине
      destroy.addEventListener('click', function (){
        p.remove();
      });


    // ---------------------------------------

    var info = p.querySelector(".card__info");
    info.style.cssText="font-size: 10px;color: lime;"

    // добавление новой карточки в нужную область
    this.append(p);

    
    }


    cells.forEach((cell)=>{
        cell.addEventListener('dragover', dragOver);
        // cell.addEventListener('dragenter', dragEnter);
        // cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    })

    cards.forEach((c)=>{
        c.addEventListener('dragstart', dragStart );
        c.addEventListener('dragend', dragEnd);
    })


    card.addEventListener('dragstart', dragStart );
    card.addEventListener('dragend', dragEnd);



 

};

DragAndDropMy();


// --------------------------------------------
const CloseMy = () => {
let items = document.querySelectorAll('.canvas__item'); 
items.forEach((item)=>{
    var rem = item.querySelector('.close');

    const Close =  function () {
        item.remove();
        //    console.log(rem)
            } 

    rem.addEventListener('click', Close );
        
})

}
CloseMy();

// ----------------------------------------------------------------------
// const CloseMyCanvas = () => {
// let items = document.querySelectorAll('.list__cell'); 
// items.forEach((item)=>{
//     var rem = item.querySelector('.close-sell');
//     const Close =  function () {
//         item.remove();
//             } 
//     rem.addEventListener('click', Close );
// })
// }
// CloseMyCanvas();


// -----------------------------------------------------------------------

const CloseMyProduct= () => {
let product = document.querySelector('.product'); 
var rem = document.querySelector('.close-product');
const Close =  function () {
    product.innerHTML = '';
} 
rem.addEventListener('click', Close );
}
CloseMyProduct();


// ----------------------------------------------------------------------

const AddMyCol1 = () => {

    let items = document.querySelectorAll('.canvas__item-1'); 
    let productCol1 = document.querySelector (".product")
    items.forEach((item)=>{
        var infoAll = item.querySelectorAll('.card__info ');
        infoAll.forEach((infoA)=>{

         let pro = document.createElement('br');

         productCol1.append(infoA.innerHTML);
         productCol1.append(pro);
         
        })
    }
    )}
    // const AddMyCol2 = () => {
    // let item = document.querySelector('.canvas__item-2'); 
    // let productCol1 = document.querySelector (".product")
    //     var infoAll = item.querySelectorAll('.card__info ');
    //     infoAll.forEach((infoA)=>{
    //      let pro = document.createElement('div');
    //      productCol1.append(infoA.innerHTML);
    // }
    // )}

    var addCol1 = document.querySelector('.addCol-1 ');
    // var addCol2 = document.querySelector('.addCol-2 ');

    addCol1.addEventListener('click', function(){
        AddMyCol1();
    } );

    // addCol2.addEventListener('click', function(){
    //     AddMyCol2();
    // } );

// ------------------------------------------------------------
// -------------------------img--------------------------------

const imgChange = () => {

    let card = document.querySelector('.js-card-img'); 
    let inputCard = document.querySelector('.js-input-img-class'); 
    let val =  inputCard.value
    let img = card.querySelector('.js-img');
    // let outcome = img.getAttribute("class");

    inputCard.onchange = function() {
    val = inputCard.value;
    img.setAttribute("class", val);
    card.querySelector('span').innerHTML = val; 
  }

 }
imgChange();


// -------------------------title---------------------------------

const titleChange = () => {

    let card = document.querySelector('.js-card-title'); 
    let inputCard = document.querySelector('.js-input-title'); 
    let val =  inputCard.value
    let h2 = card.querySelector('h2');

    inputCard.onchange = function() {
    val = inputCard.value;
    h2.innerHTML = val;
  }

 }
titleChange();
// -------


const titleChangeClass = () => {

    let card = document.querySelector('.js-card-title'); 
    let inputCard = document.querySelector('.js-input-title-class'); 
    
    let div = card.querySelector('.title');

    inputCard.onchange = function() {
        let val =  inputCard.value
        div.setAttribute("class", val);
        card.querySelector('.monitor-class ').innerHTML = val; 
  }

 }
titleChangeClass();


// ------------------------text---------------------------------
const textChange = () => {

    let card = document.querySelector('.js-card-text'); 
    let inputCard = document.querySelector('.js-input-text'); 
    let val =  inputCard.value
    let p = card.querySelector('p');

    inputCard.onchange = function() {
    val = inputCard.value;
    p.innerHTML = val;
  }

 }
 textChange();
// -------


const textChangeClass = () => {

    let card = document.querySelector('.js-card-text'); 
    let inputCard = document.querySelector('.js-input-text-class'); 
    
    let div = card.querySelector('.text');

    inputCard.onchange = function() {
        let val =  inputCard.value
        div.setAttribute("class", val);
        card.querySelector('.monitor-class ').innerHTML = val; 
  }

 }
 textChangeClass();


// -------------------------button--------------------------------
const buttonChange = () => {

    let card = document.querySelector('.js-card-button'); 
    let inputCard = document.querySelector('.js-input-button'); 
    let a = card.querySelector('a');

    inputCard.onchange = function() {
        let val = inputCard.value;
    a.innerHTML = val;
  }

 }
 buttonChange();
// // -------


const buttonChangeClass = () => {

    let card = document.querySelector('.js-card-button'); 
    let inputCardclass = document.querySelector('.js-input-button-class'); 
    
    let div = card.querySelector('a');

    inputCardclass.onchange = function() {
        let val =  inputCardclass.value
        div.setAttribute("class", val);
        card.querySelector('.monitor-class ').innerHTML = val; 
  }

 }
 buttonChangeClass();

