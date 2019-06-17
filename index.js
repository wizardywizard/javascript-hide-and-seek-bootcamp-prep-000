function getFirstSelector(selector){
  const lis= document.querySelector(selector)
  return lis
}
function nestedTarget(){
  var lis2=document.querySelector('#nested .target')
  return lis2
}
function deepestChild(){
   var lis3= document.querySelector('div#grand-node div div div div ')
   return lis3
}
function increaseRankBy(n){
  var lis4=document.querySelectorAll('ul.ranked-class li li li').parseInt(n)
  
  return lis4
}
 