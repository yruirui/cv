console.log('hi');
let html=document.querySelector('#html');
let style=document.querySelector('#style');
let n=0;
let string1='';
let string=`
/*你好，我是一名前端新人
*接下里我要演示一下我的前端功底；
*首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*
接下里要讲它变成八卦图
*现在要变成圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
太极是黑白的
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*画八卦的里面*/
#div1::before{
    width:100px;
    height:100px;
    border-radius: 50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border:none;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    border-radius: 50%;
    bottom: 0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);
}
`;


let step=()=>{
    setTimeout(()=>{  
        if(string[n]==='\n'){
            string1+='<br>';
        } else if(string[n]===' ') {
            string1+='&nbsp';
        } else{
            string1+=string[n];
        }   
        
        html.innerHTML=string1;
        style.innerHTML=string.substring(0,n);
        
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n+1<string.length){
            n+=1;
            step();
        }
        else{}
    },10)
    
}
step();


