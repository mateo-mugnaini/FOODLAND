//IMPORT STYLE:
import "./MyCart.css"

const MyCart = () =>{

    return(
    <div name="MyCart" class="MyCart">
<buton class="butonBack"><a href="/">Back to home</a></buton>
        <div class="page">
	<div id="store_cart">
		<ul class="cart_head">
			<li class="cart_head_title">
            <img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="Mycart" class="logoCart"/>
			</li>
			<li class="cart_head_product">
				Product
			</li>
			<li class="cart_head_options">
				Edit
			</li>
			<li class="cart_head_price">
				Price
			</li>
		</ul>

		<ul class="cart_item">

			<li class="cart_img_col">
				<img src="https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true"/>
			</li>

			<li class="cart_product_col">
				<p>Kiwi x Kg</p>
				<span>Kiwi</span>
			</li>
			 
      		<li class="cart_options_col">
				<span>Quantity: </span>
        <input type="number" min="1" value="1"/>
			</li>

			<li class="cart_price_col">
				<h2>$799</h2>
			</li>
			<li class="cart_del_col">
        <img src="https://i.imgur.com/bI4oD5C.png"/>
			</li>
		</ul>

		<ul class="cart_item">

			<li class="cart_img_col">
				<img src="https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7a2287-3dc5-438d-b555-a94951d0c9be___2cea52dd3f65e4b81c8a464b4143400d.png"/>
			</li>

			<li class="cart_product_col">
				<p>Carne Picada Esp x Kilo</p>
				<span>Carne Picada Especial</span>
			</li>
			 
      		<li class="cart_options_col">
				<span>Quantity: </span>
				<input type="number" min="1" value="1"/>
			</li>

			<li class="cart_price_col">
				<h2>$1.455</h2>
			</li>
			<li class="cart_del_col">
        <img src="https://i.imgur.com/bI4oD5C.png"/>
			</li>
		</ul>
        <ul class="cart_foot">
            <li class="cart_head_title">
                Total
            </li>
            <li>$</li>
        </ul>

	</div>
</div> 
    <div name="ContainerPaiment">
        <h2>Payment: </h2>
        <h2>Tarjet</h2>
        </div>
    </div>
    )

}

export default MyCart

//  {/* ----------------- title--------- */}
//  <label name="productslist" class="productList">
//  <img></img> 
//  <h3>Detail products</h3>
//  <h3>Unit</h3>
//  <h3>Price</h3>   
//  <h3>SubTotal</h3>   
// </label>
//           {/* --------------- ProductsList--------- */}
// <label name="productslist" class="productList">
//  <img src="https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true" alt="kiwi" class="detail"></img> 
//  <h4>Kiwi x Kg</h4>
//  <h4>4</h4>
//  <h4>$300</h4>
//  <h4>$1.200</h4>
// </label>
