
// Accessing the Sections 
const initialpage=document.querySelector(".first");
const middlepage=document.querySelector(".second");
const lastpage=document.querySelector(".third");

// Accessing the all anchor tags to be clicked

const initialButton=document.querySelector('.initial');
const middleButton=document.querySelector('.middle');
const lastButton=document.querySelector('.last');

initialButton.addEventListener("click",(e)=>{
  e.preventDefault();
  initialpage.scrollIntoView({behavior:"smooth"});
})
middleButton.addEventListener("click",(e)=>{
  e.preventDefault();
  middlepage.scrollIntoView({behavior:"smooth"});
})
lastButton.addEventListener("click",(e)=>{
  e.preventDefault();
  lastpage.scrollIntoView({behavior:"smooth"});
})



