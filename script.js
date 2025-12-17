let g=document.getElementById('greeting');let d=document.getElementById('date');
if(g){let h=new Date().getHours();g.innerHTML=h<12?'Good morning from Mayian Bakery':h<18?'Good afternoon from Mayian Bakery':'Good evening from Mayian Bakery';}
if(d){d.innerHTML=new Date().toDateString();}
let t=document.getElementById('themeBtn');if(t){t.onclick=()=>document.body.classList.toggle('dark');}
let cart=0;document.querySelectorAll('.cartBtn').forEach(btn=>{btn.onclick=()=>{cart++;document.getElementById('cartCount').innerHTML=cart;};});
let f=document.getElementById('contactForm');
if(f){f.onsubmit=e=>{let email=document.getElementById('email').value;let name=document.getElementById('name').value;
if(!email.includes('@')||name==''){alert('Please enter correct details.');e.preventDefault();}};}