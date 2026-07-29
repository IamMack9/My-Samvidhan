*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#F8F9FB;
color:#222;
line-height:1.7;
}

header{
background:#0A2342;
padding:15px 40px;
position:sticky;
top:0;
z-index:999;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
}

.navbar h2{
color:white;
}

.navbar ul{
display:flex;
list-style:none;
gap:25px;
}

.navbar a{
color:white;
text-decoration:none;
font-weight:500;
}

.hero{
background:linear-gradient(135deg,#0A2342,#163A63);
padding:90px 20px;
text-align:center;
color:white;
}

.hero h1{
font-size:50px;
margin-bottom:20px;
}

.hero p{
max-width:800px;
margin:auto;
font-size:18px;
}

.btn{
display:inline-block;
margin-top:30px;
padding:15px 35px;
background:#D4AF37;
color:black;
text-decoration:none;
border-radius:8px;
font-weight:600;
transition:.3s;
}

.btn:hover{
transform:translateY(-3px);
}

section{
padding:70px 10%;
}

section h2{
margin-bottom:20px;
color:#0A2342;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
margin-top:30px;
}

.card{
background:white;
padding:25px;
border-radius:12px;
box-shadow:0 5px 20px rgba(0,0,0,.08);
transition:.3s;
}

.card:hover{
transform:translateY(-6px);
}

footer{
background:#0A2342;
color:white;
text-align:center;
padding:25px;
margin-top:50px;
}

@media(max-width:768px){

.navbar{
flex-direction:column;
gap:15px;
}

.navbar ul{
flex-wrap:wrap;
justify-content:center;
}

.hero h1{
font-size:34px;
}

.hero p{
font-size:16px;
}

}