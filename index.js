function getFirstSelector(selector){
  const lis= document.querySelector(selector)
  return lis
}
function nestedTarget(){
  var lis2=document.querySelector('#nested .target')
  return lis2
}
function deepestChild(){
   var lis3= document.querySelectorAll('div #grand-node div')
   for (let i = 0; i < lis3.length; i++) {
  lis3[i].innerHTML = (i + 1).toString();}
   return lis3
}
function increaseRankBy(n){
  
}
 