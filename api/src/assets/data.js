import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "Admin",
			email: "admin@gmail.com",
			password: bcrypt.hashSync("123"),
			isAdmin: true,
		},
		{
			name: "Customer",
			email: "customerr@gmail.com",
			password: bcrypt.hashSync("123"),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Kiwi x Kg",
			slug: "Kiwi",
			price: 799,
			description: "Kiwi",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			imageCategory: "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 1,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "Huevos blancos x12",
			slug: "Huevos blancos x12 Carton",
			price: 943,
			description: "Cartonde huevos blancos 12 unidades",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/677925-800-auto?v=637734621757330000&width=800&height=auto&aspect=true",
			imageCategory: "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 40,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 3,
			brand: "Doña Lala",
			numReviews: 0,
		},
		{
			name: "Carne Picada Esp x Kilo",
			slug: "Carne Picada Especial",
			price: 1.459,
			description: "Carne picada especial.",
			image:
				"https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7a2287-3dc5-438d-b555-a94951d0c9be___2cea52dd3f65e4b81c8a464b4143400d.png",
			imageCategory:
				"https://w7.pngwing.com/pngs/476/430/png-transparent-red-meat-bresaola-beef-lobster-meat-food-seafood-beef.png",			
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "Milanesa de Carne",
			slug: "Milanesa de Carne",
			price: 2000,
			description: "Milanesa de Nalga Casera.",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/676761-800-auto?v=637728575944500000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://w7.pngwing.com/pngs/476/430/png-transparent-red-meat-bresaola-beef-lobster-meat-food-seafood-beef.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 3.5,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "1/4 Trasero de Pollo - Fresco",
			slug: "1/4 Trasero de Pollo",
			price: 669,
			description: "Cuarto de pollo trasero fresco",
			image:
				"https://angellinares.es/127713-thickbox_default/cuartos-traseros-pollo-congelado-300-400.jpg",
			imageCategory:
				"https://w7.pngwing.com/pngs/476/430/png-transparent-red-meat-bresaola-beef-lobster-meat-food-seafood-beef.png",
				stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "Gaseosa Cola Pepsi 2.25L",
			slug: "Pepsi 2.25L",
			price: 399,
			description: "Botella de Pepsi de 2.25 litros",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/769353-800-auto?v=638120073784130000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/769353-800-auto?v=638120073784130000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 2,
			brand: "Pepsi",
			numReviews: 0,
		},
		{
			name: "Gaseosa Coca-cola Sabor Original 2.25 L",
			slug: "Coca-cola Original 2.25L",
			price: 669,
			description: "Botella de Coca-cola sabor Original de 2.25 litros",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770903-800-auto?v=638128606670570000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/769353-800-auto?v=638120073784130000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Coca-cola",
			numReviews: 0,
		},
		{
			name: "Shampoo Pantene Prov Essentianls Restauración 400ml",
			slug: "Shampoo Pantene Prov Essentianls Restauración",
			price: 1000,
			description:
				"Nutrí tu pelo desde la raíz para que crezca largo y fuerte hasta las puntas con la fórmula multivitaminas de Pantene.El shampoo Restauración de Pantene Pro-V Essentials está formulado con omega 9, óleo de argán, antioxidante y Pro-Vitaminas, ayuda a reducir la pérdida de proteínas** y a reparar las cutículas para prevenir las puntas abiertas. Para mejores resultados usá el sistema de shampoo y acondicionador Pantene Pro-V Essentials. **Pérdida de proteína debido al quiebre usando el sistema Pantene versus shampoo sin ingredientes acondicionadores",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/706107-800-auto?v=637909043246300000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/706107-800-auto?v=637909043246300000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 3,
			brand: "Pantene",
			numReviews: 0,
		},
		{
			name: "Acondicionador Hidra Hialur¢nico Elvive Lïoral Paris 400ml",
			slug: "Acondicionador Hidra Hialur¢nico Elvive Lïoral Paris",
			price: 1092,
			description:
				"Nutrí tu pelo desde la raíz para que crezca largo y fuerte hasta las puntas con la fórmula multivitaminas de Pantene.El shampoo Restauración de Pantene Pro-V Essentials está formulado con omega 9, óleo de argán, antioxidante y Pro-Vitaminas, ayuda a reducir la pérdida de proteínas y a reparar las cutículas para prevenir las puntas abiertas.",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/712670-800-auto?v=637945333124200000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/712670-800-auto?v=637945333124200000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Elvive Lïoral Paris",
			numReviews: 0,
		},
		{
			name: "Prepizza De Tomate 1u",
			slug: "Prepizza",
			price: 285,
			description: "Prepizza con base de salsa de tomate congelada",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423818-800-auto?v=636482196480430000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423818-800-auto?v=636482196480430000&width=800&height=auto&aspect=true",				
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 5,
			brand: "Fresh MP",
			numReviews: 0,
		},
		{
			name: "Baguette Artesanal 1u",
			slug: "Baguette Artesanal",
			price: 139,
			description: "Baguette hecha en casa",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423862-800-auto?v=636482196748900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423818-800-auto?v=636482196480430000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Televisor",
			slug: "TV",
			price: 80000,
			description: "Televisor 40'",
			image:
			"https://w7.pngwing.com/pngs/70/42/png-transparent-led-backlit-lcd-high-definition-television-bravia-smart-tv-television-set-tivi-television-electronics-computer-wallpaper.png",
			imageCategory:
			"https://w7.pngwing.com/pngs/85/798/png-transparent-home-appliance-consumer-electronics-washing-machines-refrigerator-refrigerator-kitchen-electronics-computer.png",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Samsung",
			numReviews: 0,
		},

		{
			name: "Celular",
			slug: "Cel",
			price: 40000,
			description: "Smarth phone",
			image:
			"https://w7.pngwing.com/pngs/462/672/png-transparent-feature-phone-smartphone-cellular-network-phone-gadget-phone-icon-mobile-phone-thumbnail.png",
			imageCategory:
			"https://w7.pngwing.com/pngs/85/798/png-transparent-home-appliance-consumer-electronics-washing-machines-refrigerator-refrigerator-kitchen-electronics-computer.png",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Samsung",
			numReviews: 0,
		},

		{
			name: "Clorox",
			slug: "Clorox",
			price: 2000,
			description: "Clorox pisos",
			image:
			"https://e1.pngegg.com/pngimages/624/178/png-clipart-aesthetic-clorox-plastic-bottle-thumbnail.png",
			imageCategory:
			"https://e7.pngegg.com/pngimages/306/621/png-clipart-computer-icons-data-limpieza-cleaning-data.png",
			stock: 10,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 3,
			brand: "JGB",
			numReviews: 0,
		},

		{
			name: "Sampic",
			slug: "Sampic",
			price: 2500,
			description: "Sampic pisos",
			image:
			"https://www.corbeta.com.co/media/catalog/product/7/7/7702626216782_1.png",
			imageCategory:
			"https://e7.pngegg.com/pngimages/306/621/png-clipart-computer-icons-data-limpieza-cleaning-data.png",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Corveta",
			numReviews: 0,
		},

		{
			name: "Empandas",
			slug: "Empanadas",
			price: 1500,
			description: "Empanadas precocidas",
			image:
			"https://w7.pngwing.com/pngs/540/915/png-transparent-empanada-chilean-cuisine-roast-chicken-calzone-stuffing-empanada-baked-goods-food-recipe-thumbnail.png",
			imageCategory:
			"https://w7.pngwing.com/pngs/779/96/png-transparent-natural-foods-vegetarian-cuisine-frozen-food-fresh-produce-natural-foods-food-fruit.png",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Corveta",
			numReviews: 0,
		},

		{
			name: "Nugets",
			slug: "Nugets de pollo",
			price: 2500,
			description: "Nugets precocidos",
			image:
			"https://static.vecteezy.com/system/resources/previews/013/391/799/original/fried-chicken-nuggets-on-a-transparent-background-free-png.png",
			imageCategory:
			"https://w7.pngwing.com/pngs/779/96/png-transparent-natural-foods-vegetarian-cuisine-frozen-food-fresh-produce-natural-foods-food-fruit.png",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Corveta",
			numReviews: 0,
		},

		{
			name: "Cuchara",
			slug: "Cuchara",
			price: 5500,
			description: "Cuchara de peltre",
			image:
			"https://png.pngtree.com/element_pic/00/16/07/07577e015055b55.jpg",
			imageCategory:
			"https://e7.pngegg.com/pngimages/953/151/png-clipart-recipe-cookbook-bolinhos-de-bacalhau-computer-icons-book-angle-kitchen-thumbnail.png",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Peltre",
			numReviews: 0,
		},

		{
			name: "Cepillo para quitar pelo",
			slug: "Cepillo",
			price: 3500,
			description: "Cepillo quita pelos perros y gatos",
			image:
			"https://w7.pngwing.com/pngs/936/648/png-transparent-comb-brush-hair-clipper-andis-dog-dog-animals-pet-brush.png",
			imageCategory:
			"https://png.pngtree.com/png-vector/20210131/ourmid/pngtree-pets-character-cat-and-dog-png-image_2877091.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Pet and frienly",
			numReviews: 0,
		},

		{
			name: "jugete antiestres",
			slug: "juguete",
			price: 8500,
			description: "Juegete antiestres perros y gatos",
			image:
			"https://e7.pngegg.com/pngimages/503/643/png-clipart-pet-toy-product-kind-dogs.png",
			imageCategory:
			"https://png.pngtree.com/png-vector/20210131/ourmid/pngtree-pets-character-cat-and-dog-png-image_2877091.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Pet and frienly",
			numReviews: 0,
		},

		{
			name: "Galleta de avena",
			slug: "Galleta",
			price: 500,
			description: "Galletas de avena",
			image:
			"https://e7.pngegg.com/pngimages/824/478/png-clipart-biscuit-biscuit-thumbnail.png",
			imageCategory:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTv8h5DSMjIej-Zt_A9zKOKeKTWNlwCgOQGw&usqp=CAU",
			stock: 100,
			isDeleted: false,
			comments: [],
			category: "Galletas",
			rating: 4,
			brand: "Quaker",
			numReviews: 0,
		},
	],
};

export default data;
