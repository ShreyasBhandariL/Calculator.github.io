"use strict";
let num1=[""],op=[],index=0,numIndex=0,temp="";
let res="";
function opStorer(oper)
{
  let checkDisplay=document.querySelector('.demo').innerHTML;
  if(checkDisplay==temp)
  {
  for(let i=0;i<op.length;i++)
  {
    op[i]="";
    num1[i]="";
  }
  }
  op[index]=document.querySelector(`.${oper}`).innerHTML;
  document.querySelector('.demo').textContent+=op[index];
  index++;
  numIndex++;
  num1[numIndex]="";
}
function addnum(arg){
document.querySelector('.demo').textContent+=document.querySelector(`.${arg}`).innerHTML;
num1[numIndex]+=document.querySelector(`.${arg}`).innerHTML;
console.log(num1);
}

function answer()
{
for(let i=0;i<op.length;i++)
{

  if(temp=="")
  {
  switch(op[i])
  {
    case '+':
      temp=Number(num1[i])+Number(num1[i+1]);
      break;
    case '-':
      temp=Number(num1[i])-Number(num1[i+1]);
      break;
    case '*':
      temp=Number(num1[i])*Number(num1[i+1]);
      break;
    case '/':
      temp=Number(num1[i])/Number(num1[i+1]);
  }
  }
  else {
    switch(op[i])
    {
      case '+':
        temp=Number(temp)+Number(num1[i+1]);
        break;
      case '-':
        temp=Number(temp)-Number(num1[i+1]);
        break;
      case '*':
        temp=Number(temp)*Number(num1[i+1]);
        break;
      case '/':
        temp=Number(temp)/Number(num1[i+1]);
        break;
    }
  }

}
document.querySelector('.demo').innerHTML=temp;

}



document.querySelector('.o').addEventListener('click',function(){
    for(let i=0;i<op.length;i++)
    {
      op[i]="";
    }
    for(let i=0;i<num1.length;i++)
    {
      num1[i]="";
    }
  temp="";
 document.querySelector('.demo').innerHTML="";
})




// document.querySelector('.a').addEventListener('click',function(){
//   const n=Number(document.querySelector('.a').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.b').addEventListener('click',function(){
//   const n=Number(document.querySelector('.b').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.c').addEventListener('click',function(){
//   const n=Number(document.querySelector('.c').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.e').addEventListener('click',function(){
//   const n=Number(document.querySelector('.e').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.f').addEventListener('click',function(){
//   const n=Number(document.querySelector('.f').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.g').addEventListener('click',function(){
//   const n=Number(document.querySelector('.g').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.i').addEventListener('click',function(){
//   const n=Number(document.querySelector('.i').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.j').addEventListener('click',function(){
//   const n=Number(document.querySelector('.j').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.k').addEventListener('click',function(){
//   const n=Number(document.querySelector('.k').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });
// document.querySelector('.n').addEventListener('click',function(){
//   const n=Number(document.querySelector('.n').innerHTML);  
//   document.querySelector('.demo').textContent+= n;
// });


// document.querySelector('.d').addEventListener('click',function(){
//   const n=document.querySelector('.d').innerHTML;  
//   document.querySelector('.demo').textContent = n;
// });
// document.querySelector('.h').addEventListener('click',function(){
//   const n=Number(document.querySelector('.h').innerHTML);  
//   document.querySelector('.demo').textContent = n;
// });
// document.querySelector('.l').addEventListener('click',function(){
//   const n=Number(document.querySelector('.l').innerHTML);  
//   document.querySelector('.demo').textContent = n;
// });
// document.querySelector('.m').addEventListener('click',function(){
//   const n=Number(document.querySelector('.m').innerHTML);  
//   document.querySelector('.demo').textContent = n;
// });










//   let num1=Number(document.querySelector('.demo').textContent);
// let ch=document.querySelector()
//     var res;
// switch(ch)
// {
//     case '+':res=Number(num1)+Number(n2);
//     break;
//     case '-':res=num1-n2;
//     break;
//     case '*':res=num1*n2;
//     break;
//     case '/':res=num1/n2;
//     break;
//     case '%':res=num1%n2;
//     break;
//     default:exit(0);
// }

// res=operation(num1,n2,ch);
