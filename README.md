<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ShopKart</title>

<style>
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#f5f5f5;
}

header{
    background:#1565c0;
    color:white;
    padding:15px;
    display:flex;
    align-items:center;
    gap:10px;
}

header input{
    flex:1;
    padding:8px;
}

.cart{
    font-weight:bold;
}

.products{
    padding:20px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:15px;
}

.card{
    background:white;
    padding:15px;
    border-radius:8px;
    text-align:center;
    box-shadow:0 1px 4px rgba(0,0,0,.1);
}

.emoji{
    font-size:50px;
}

button{
    padding:8px 12px;
    cursor:pointer;
    border:none;
    border-radius:4px;
}

.addBtn{
    background:#ff6f00;
    color:white;
}

.qty{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
}

.qty button{
    background:#1565c0;
    color:white;
}
</style>
</head>

<body>

<header>
    <h2>ShopKart</h2>

    <input
        type="text"
        id="search"
        placeholder="Search products..."
    >

    <div class="cart">
        🛒 <span id="cartCount">0</span>
    </div>
</header>

<div class="products" id="products"></div>

<script>
const products = [
    {id:1,name:"Wireless Headphones",price:1999,img:"🎧"},
    {id:2,name:"Smart Watch",price:2499,img:"⌚"},
    {id:3,name:"Running Shoes",price:1299,img:"👟"},
    {id:4,name:"Backpack",price:899,img:"🎒"},
    {id:5,name:"Coffee Maker",price:1799,img:"☕"},
    {id:6,name:"Desk Lamp",price:499,img:"💡"},
    {id:7,name:"Bluetooth Speaker",price:1199,img:"🔊"},
    {id:8,name:"Sunglasses",price:699,img:"🕶️"}
];

const cart = {};

function totalItems(){
    return Object.values(cart)
        .reduce((sum,val)=>sum+val,0);
}

function addToCart(id){
    cart[id] = (cart[id] || 0) + 1;
    render();
}

function removeFromCart(id){
    if(cart[id] > 1){
        cart[id]--;
    }else{
        delete cart[id];
    }
    render();
}

function render(){
    const container =
        document.getElementById("products");

    const search =
        document.getElementById("search")
        .value
        .toLowerCase();

    document.getElementById("cartCount")
        .textContent = totalItems();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search)
    );

    container.innerHTML = "";

    filtered.forEach(product => {

        const qty = cart[product.id] || 0;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="emoji">${product.img}</div>
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
        `;

        if(qty === 0){

            const btn =
                document.createElement("button");

            btn.className = "addBtn";
            btn.textContent = "Add To Cart";

            btn.onclick = () =>
                addToCart(product.id);

            card.appendChild(btn);

        }else{

            const qtyBox =
                document.createElement("div");

            qtyBox.className = "qty";

            qtyBox.innerHTML = `
                <button>-</button>
                <span>${qty}</span>
                <button>+</button>
            `;

            qtyBox.children[0].onclick =
                () => removeFromCart(product.id);

            qtyBox.children[2].onclick =
                () => addToCart(product.id);

            card.appendChild(qtyBox);
        }

        container.appendChild(card);
    });
}

document
.getElementById("search")
.addEventListener("input", render);

render();
</script>

</body>
</html>
```
