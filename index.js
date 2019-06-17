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
  var lis4= document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis4.length; i++) {
    console.log(lis4[i].innerHTML)
  lis4[i].innerHTML = (i + 1).toString();
  }
}
 