// const MyTraining = () => {
//   var ul =  document.querySelector("ul");
//   let but =  document.querySelector(".button");

  // let array = ul.childNodes;
  // array.forEach((cell)=>{  
  //   cell.addEventListener('click', function(event){
  //     console.log(event.target.innerHTML); 
  //   });
  //   })

//     ul.addEventListener('click', function(event){
//     let et =   event.target
// if (et.tagName == 'LI') {
//   console.log(et.innerHTML); 
//   et.style.backgroundColor = "red"
// }
//     }); 

//     const foo = function(){
//      let LiNew = document.createElement('li');
//      LiNew.innerHTML = " новый"
//       ul.append(LiNew)
//       }

//     but.addEventListener('click',   foo);


// };MyTraining();

// ------------------------------------------------------
// const MyDragg = () => {

// const elem = document.querySelector('.elem');

// let OffsetX;
// let OffsetY;


//   const dragstart = function (event) {
//     OffsetX =  event.offsetX;
//     OffsetY = event.offsetY;
//     console.log(OffsetX, OffsetY)
//   }

//   const dragend = function (event) {
//     console.log(event.pageX, event.pageY)
//     elem.style.left =  event.pageX - OffsetX + "px";
//     elem.style.top =  event.pageY - OffsetY  + "px";
//   }

  
//   elem.addEventListener('dragstart',dragstart);
//   elem.addEventListener('dragend',dragend);

// };MyDragg();



// ------------------------------------------------------
const MyStretchblock = () => {

const card1 = document.querySelector('.stretch__block-1');
const stretchInputtop = document.getElementById("margin-top-1");
const stretchInputbottom = document.getElementById("margin-bottom-1");

  var cardMarginTop;
  var cardMarginBottom;


  stretchInputtop.oninput = function() { 
    cardMarginTop =  Number(stretchInputtop.value);
    card1.setAttribute('style', 'margin-top:'+ cardMarginTop +'px' +';'   + 'margin-bottom:'+ cardMarginBottom +'px' +';'    )
    console.log(cardMarginTop, cardMarginBottom)
   }
 
   stretchInputbottom.oninput = function() { 
    cardMarginBottom =  Number(stretchInputbottom.value);
    card1.setAttribute('style',  'margin-top:'+ cardMarginTop +'px' +';' + 'margin-bottom:'+ cardMarginBottom +'px' +';')
    console.log(cardMarginTop, cardMarginBottom)
   }




};MyStretchblock();











