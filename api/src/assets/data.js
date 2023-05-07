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
           name: "Manzanas x Kg",
           slug: "Manzanas",
           price: 139.9,
           description: "Manzanas",
           image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/manzana1-f44bdc6c69705fec3a16025979691367-640-0.webp",
           imageCategory:
            "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
            stock: 30,
            isDeleted: false,
            comments: [],
            category: "Frutas y Verduras",
            rating: 5,
            brand: "Sin marca",
            numReviews: 0,
        },

		{
			name: "Lechuga Mantecosa x Unidad",
			slug: "Lechuga-Mantecosa",
			price: 79.9,
			description: "Lechuga Mantecosa",
			image:
			  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/lechuga-mantecosa1-e5d7e917c4d14f957f16025975462683-640-0.webp",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 3,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Tomate Cherry x 250g",
			slug: "Tomate-Cherry",
			price: 89.9,
			description: "Tomate Cherry",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/472988-800-auto?v=636695568779700000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 25,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Bananas x Kg",
			slug: "Bananas",
			price: 149.9,
			description: "Bananas",
			image:
			  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/banana1-39d62a544fc16a2b8016025979095295-640-0.webp",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 30,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Papa x Kg",
			slug: "Papa",
			price: 59.9,
			description: "Papa",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/449110-800-auto?v=636567690053330000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 35,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Zanahoria x Kg",
			slug: "Zanahoria",
			price: 29.9,
			description: "Zanahoria",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/472800-800-auto?v=636695562251270000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 40,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 3.5,
			brand: "Sin Marca",
			numReviews: 0,
	    },

		{
			name: "Zapallo ingles x Kg",
			slug: "Zapallo-ingles",
			price: 59.9,
			description: "Zapallo ingles",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/480892-800-auto?v=636717168303430000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 25,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Tomate Perita x Kg",
			slug: "Tomate-Perita",
			price: 84.9,
			description: "Tomate Perita",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/472987-800-auto?v=636695568775500000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 25,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Berenjena Negra x Kg",
			slug: "Berenjena",
			price: 749,
			description: "Berenjena",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/472978-800-auto?v=636695568718800000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 10,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "pimenton Amarillo x Kg",
			slug: "pimenton",
			price: 1999,
			description: "pimenton amarillo",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/180107-800-auto?v=636383390636230000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 25,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Manzana Verde x Kg",
			slug: "Manzana-Verde",
			price: 84.9,
			description: "Manzana Verde",
			image:
			  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/7212951-de63591ecd61d8680016032807887891-640-0.webp",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 30,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Aguate Hass x Unidad",
			slug: "palta hass",
			price: 249,
			description: "palta hass unidad",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/763476-800-auto?v=638080005645570000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 3.5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Ajo x Kg",
			slug: "Ajo",
			price: 99.9,
			description: "Ajo",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/698615-800-auto?v=637871997744200000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 50,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},
		
		{
			name: "Naranja x Kg",
			slug: "Naranja",
			price: 749,
			description: "Naranja jugo especial",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/447204-800-auto?v=636559052624870000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 55,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Yogur Con Cereales Yogurisimo 166gr",
			slug: "Yogurt-Con-Cereales",
			price: 289,
			description: "Yogur Con Cereales Yogurisimo 166gr",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/771829-800-auto?v=638132925879700000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 3.5,
			brand: "Yogurisimo",
			numReviews: 0,
		},

		{
			name: "Huevos blancos x12",
			slug: "Huevos blancos x12 Carton",
			price: 943,
			description: "Cartonde huevos blancos 12 unidades",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/677925-800-auto?v=637734621757330000&width=800&height=auto&aspect=true",
			imageCategory: "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 40,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 3,
			brand: "Doña Lala",
			numReviews: 0,
		},

		{
			name: "Huevo AAA x 30 unidades",
			slug: "Huevo-Blanco AAA",
			price: 1149,
			description: "Huevo Blanco AAA x 30 unidades",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/195441-800-auto?v=636383565319570000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 40,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Leche x 1l",
			slug: "Leche",
			price: 559,
			description: "Leche",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/646096-800-auto?v=637582879871700000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4.5,
			brand: "La Serenísima",
			numReviews: 0,
		},

		{
			name: "Queso Sardo x 100g",
			slug: "Queso-Sardo",
			price: 799,
			description: "Queso Sardo De Cabra Huerta Tambo",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/667845-800-auto?v=637680297887330000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 3.5,
			brand: "Huerta Tambo",
			numReviews: 0,
		},

		{
			name: "Manteca x 200g",
			slug: "Manteca",
			price: 119.9,
			description: "Manteca",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/755246-800-auto?v=638023198654700000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Casanto",
			numReviews: 0,
		},

		{
			name: "Queso Crema x 290g",
			slug: "Queso-Crema",
			price: 411,
			description: "Queso Crema",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/771893-800-auto?v=638132926196500000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4.5,
			brand: "LS",
			numReviews: 0,
		},

		{
			name: "Yogurt Griego x 125g",
			slug: "Yogurt",
			price: 689,
			description: "Yogurt Natural griego x 125 gr",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/778270-800-auto?v=638176882403830000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "La Serenisima",
			numReviews: 0,
		},

		{
			name: "Margarina Danica x 220g",
			slug: "Margarina",
			price: 285,
			description: "Margarina Danica Equilibri por 220g",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/710226-800-auto?v=637931505862170000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 55,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "La Serenisima",
			numReviews: 0,
		},

		{
			name: "Dulce de Leche x 405 g",
			slug: "Dulce de Lecge Milkaut",
			price: 551,
			description: "Dulce De Leche Repostero Milkaut X 405 Gr",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/643773-800-auto?v=637569906818870000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 100,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Milkaut",
			numReviews: 0,
		},

		{
			name: "Leche Uat Semi Descremada ",
			slug: "Leche Uat Semi Descremada",
			price: 551,
			description: "Leche Uat Semi Descremada 1cuisine & Co 1l",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/646096-800-auto?v=637582879871700000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 200,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Cusine & CO",
			numReviews: 0,
		},

		{
			name: "Queso Reggianito La Paulina Hma 1 Kg",
			slug: "Queso Reggianito La Paulina Hma 1 Kg",
			price: 5849,
			description: "Queso Reggianito La Paulina Hma 1 Kg",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/594367-800-auto?v=637305533029170000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 50,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Paulina",
			numReviews: 0,
		},

		{
			name: "Queso Untable Finlandia Balance 290 Gr",
			slug: "Queso Untable Finlandia Balance 290 Gr",
			price: 775,
			description: "Queso Untable Finlandia Balance 290 Gr",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/774022-800-auto?v=638146534048970000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 150,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Paulina",
			numReviews: 0,
		},

		{
			name: "Queso Bocconcino Fior Di Latte Arrivata 150 Gr",
			slug: "Queso Bocconcino Fior Di Latte Arrivata 150 Gr",
			price: 498,
			description: "Queso Bocconcino Fior Di Latte Arrivata 150 Gr",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/421307-800-auto?v=636481018974300000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 150,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "ARRIVATA",
			numReviews: 0,
		},

		{
			name: " Nesquik Menos Azucar 200ml",
			slug: " Nesquik Menos Azucar 200ml",
			price: 246,
			description: "Leche Choc Nesquik Menos Azucar 200ml",
			image:
			  "https://jumboargentina.vtexassets.com/arquivos/ids/750415-800-auto?v=638004297702700000&width=800&height=auto&aspect=true",
			imageCategory:
			  "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
			stock: 350,
			isDeleted: false,
			comments: [],
			category: "Lacteos y Huevos",
			rating: 4,
			brand: "Nesquick",
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
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",			
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
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
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
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Carne Picada Por Kg",
			slug: "Carne Picada Por Kg",
			price: 1515,
			description: "Carne Picada Por Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/672945-800-auto?v=637708917705470000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 10,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Roast Beef Churrasco",
			slug: "Roast Beef Churrasco",
			price: 1745,
			description: "Roast Beef Churrasco",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/672991-800-auto?v=637708918023200000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 10,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Bife De Chorizo Premium",
			slug: "Bife De Chorizo Premium",
			price: 4195,
			description: "Bife De Chorizo Premium",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/677567-800-auto?v=637733649870100000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 15,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Muslo De Pollo Por Kg",
			slug: "Muslo De Pollo Por Kg",
			price: 949,
			description: "Muslo De Pollo Por Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/674423-800-auto?v=637715722129630000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 40,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Ala De Pollo",
			slug: "Ala De Pollo",
			price: 389,
			description: "Ala De Pollo",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/674422-800-auto?v=637715722116900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 112,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Suprema De Pollo Granel Fresco X Kg",
			slug: "Suprema De Pollo Granel Fresco X Kg",
			price:2049,
			description: "Suprema De Pollo Granel Fresco X Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/672123-800-auto?v=637703409914330000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 55,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Pechuga De Pollo",
			slug: "Pechuga De Pollo",
			price: 1699,
			description: "Pechuga De Pollo",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/674425-800-auto?v=637715722144800000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 220,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Filet De Salmón Rosado X Kilo",
			slug: "Filet De Salmón Rosado X Kilo",
			price: 10990,
			description: "Filet De Salmón Rosado X Kilo",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/496143-800-auto?v=636774294781000000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 120,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Filet De Merluza Parcialmente Despinado X Kg",
			slug: "Filet De Merluza Parcialmente Despinado X Kg",
			price: 2399,
			description: "Filet De Merluza Parcialmente Despinado X Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/496110-800-auto?v=636774294673700000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 210,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Trucha Parcialmente Despinada Cong",
			slug: "Trucha Parcialmente Despinada Cong",
			price: 4999,
			description: "Trucha Parcialmente Despinada Cong",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/501619-800-auto?v=636804534959730000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 120,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},

		{
			name: "Filet De Merluza Portobelo Al Natural X 500 Gr.",
			slug: "Filet De Merluza Portobelo Al Natural X 500 Gr.",
			price: 1899,
			description: "Filet De Merluza Portobelo Al Natural X 500 Gr.",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/608633-800-auto?v=637387608761130000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "La Grenouille",
			numReviews: 0,
		},

		{
			name: "Chorizo Fresco Bombón Envasado Al Vacio 400 Gr",
			slug: "Chorizo Fresco Bombón Envasado Al Vacio 400 Gr",
			price: 1059,
			description: "Chorizo Fresco Bombón Envasado Al Vacio 400 Gr",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/756679-800-auto?v=638030001646730000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
				stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Margret",
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
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 420,
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
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 320,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Coca-cola",
			numReviews: 0,
		},

		{
			name: "Gaseosa Cunnington Cola Sin Azucar 1500cc",
			slug: "Gaseosa Cunnington Cola Sin Azucar 1500cc",
			price: 179,
			description: "Gaseosa Cunnington Cola Sin Azucar 1500cc",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/570092-800-auto?v=637155186611270000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 220,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Cuninton",
			numReviews: 0,
		},

		{
			name: "Gaseosa Sprite Lima-limón 2,25 Lt",
			slug: "Gaseosa Sprite Lima-limón 2,25 Lt",
			price: 648,
			description: "Gaseosa Sprite Lima-limón 2,25 Lt",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770912-800-auto?v=638128606699400000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 120,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Sprite",
			numReviews: 0,
		},

		{
			name: "7up Lima Limón 2.25l",
			slug: "7up Lima Limón 2.25l",
			price: 516,
			description: "7up Lima Limón 2.25l",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770379-800-auto?v=638126985947370000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 520,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "7-UP",
			numReviews: 0,
		},

		{
			name: "Gaseosa Sprite Sin Azúcar Lima-limón 354 Ml",
			slug: "Gaseosa Sprite Sin Azúcar Lima-limón 354 Ml",
			price:212,
			description: "Gaseosa Sprite Sin Azúcar Lima-limón 354 Ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770869-800-auto?v=638128606141830000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 620,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "sprite",
			numReviews: 0,
		},

		{
			name: "7up Lima Limón Sin Azúcar Lata 354 Ml",
			slug: "7up Lima Limón Sin Azúcar Lata 354 Ml",
			price:165,
			description: "7up Lima Limón Sin Azúcar Lata 354 Ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770386-800-auto?v=638126985967870000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "7-UP",
			numReviews: 0,
		},

		{
			name: "Gaseosa Coca-cola Sin Azúcar 354 Ml",
			slug: "Gaseosa Coca-cola Sin Azúcar 354 Ml",
			price: 212,
			description: "Gaseosa Coca-cola Sin Azúcar 354 Ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770850-800-auto?v=638128606071830000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 320,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Coca-cola",
			numReviews: 0,
		},

		{
			name: "Cerveza Heineken Retornable 1lt",
			slug: "Cerveza Heineken Retornable 1lt",
			price: 696,
			description: "Cerveza Heineken Retornable 1lt",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/579428-800-auto?v=637215672574430000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Heineken",
			numReviews: 0,
		},

		{
			name: "Cerveza Rubia Corona 710 Ml Botella Descartable",
			slug:"Cerveza Rubia Corona 710 Ml Botella Descartable",
			price: 758,
			description: "Cerveza Rubia Corona 710 Ml Botella Descartable",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/655327-800-auto?v=637608786158700000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Corona",
			numReviews: 0,
		},

		{
			name: "Whisky Jack Daniels 750 Ml",
			slug: "Whisky Jack Daniels 750 Ml",
			price: 8866,
			description: "Whisky Jack Daniels 750 Ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/760356-800-auto?v=638049117804930000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Jack Daniels",
			numReviews: 0,
		},

		{
			name: "Whisky Johnnie Walker Black Label 1 L",
			slug: "Whisky Johnnie Walker Black Label 1 L",
			price: 16786,
			description: "Whisky Johnnie Walker Black Label 1 L",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/580854-800-auto?v=637220856267230000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Johnnie wlaker",
			numReviews: 0,
		},

		{
			name: "Agua Villavicencio Pet Con Gas 1.5 L",
			slug: "Agua-Con-Gas",
			price: 255,
			description: "Agua Villavicencio Pet Con Gas 1.5 L",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/620306-800-auto?v=637466226568270000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Villavicencio",
			numReviews: 0,
		},

		{
			name: "Agua Nestlé Pureza Vital Bidón 6.3 L",
			slug: "Agua",
			price: 16786,
			description: "Agua Nestlé Pureza Vital Bidón 6.3 L",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/544764-800-auto?v=637014360505100000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Nestle",
			numReviews: 0,
		},

		{
			name: "Agua Mineral Smartwater Sin Gas 591 Ml",
			slug: "Agua-Mineral",
			price: 170,
			description: "Agua Mineral Smartwater Sin Gas 591 Ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/580719-800-auto?v=637219994437670000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://bpm.sandiegoses.com/pages/img/blog/16390815601603889152.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Smart Water",
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
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
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
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 120,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Elvive Lïoral Paris",
			numReviews: 0,
		},

		{
			name: "Jabón De Tocador Dove Original Individual 90 G",
			slug: "Jabón-De-Tocador",
			price: 306,
			description:
				"Jabón De Tocador Dove Original Individual 90 G",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/702917-800-auto?v=637890144122500000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 950,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Dove",
			numReviews: 0,
		},

		{
			name: "Protectores Diarios Carefree® Todos Los Dias X 100 Un",
			slug: "Protectores-Diarios",
			price: 1845,
			description:
				"Protectores Diarios Carefree® Todos Los Dias X 100 Un",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/715863-800-auto?v=637963042825970000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 630,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Carefree",
			numReviews: 0,
		},

		{
			name: "Desodorante Dove Men Care Sport Fresh 150ml",
			slug: "Desodorante-Dove",
			price: 368,
			description: "Desodorante Dove Men Care Sport Fresh 150ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/717382-800-auto?v=637981617872170000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 720,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Dove",
			numReviews: 0,
		},

		{
			name: "Jabon Liquido Corporal Oral Lux Rosas Francesas 220ml",
			slug: "Jabon-Liquido-Corporal",
			price: 246,
			description:
				"Jabon Liquido Corporal Oral Lux Rosas Francesas 220ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/700572-800-auto?v=637880531887700000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 950,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Lux",
			numReviews: 0,
		},

		{
			name: "Repuestos De Afeitar Gillette Mach3 Sensitive 8 Un",
			slug: "Repuestos De Afeitar Gillette Mach3 Sensitive 8 Un",
			price: 4188,
			description:
				"Repuestos De Afeitar Gillette Mach3 Sensitive 8 Un",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/758414-800-auto?v=638034324340600000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Gillette",
			numReviews: 0,
		},

		{
			name: "Espuma De Afeitar Gillette Piel Sensible",
			slug: "Espuma-De-Afeitar",
			price: 586,
			description:
				"Espuma De Afeitar Para Piel Sensible Gillette Foamy Sensitive 175",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/571111-800-auto?v=637157796804030000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Gillette",
			numReviews: 0,
		},

		{
			name: "Axe Desodorante Aerosol Bs Apollo 150ml",
			slug: "Axe-Desodorante",
			price: 585,
			description:
				"Axe Desodorante Aerosol Bs Apollo 150ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/700586-800-auto?v=637880531939630000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 280,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Axe",
			numReviews: 0,
		},

		{
			name: "Pañal Tena Pants Ultra L X8un",
			slug: "Pañal",
			price: 2576,
			description:
				"Pañal Tena Pants Ultra L X8un",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/767772-800-auto?v=638113810369170000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 120,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Tena",
			numReviews: 0,
		},

		{
			name: "Talco Pies Rexona Original 48hs 200g",
			slug: "Talco Pies",
			price: 659,
			description:
				"Talco Pies Rexona Original 48hs 200g",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/772552-800-auto?v=638137354745900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Efficient",
			numReviews: 0,
		},

		{
			name: "Afeitadora Con Afeitadas Suaves Prestobarba3 2 Un",
			slug: "Afeitadora",
			price: 782,
			description:
				"Afeitadora Con Afeitadas Suaves Prestobarba3 2 Un",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/758403-800-auto?v=638034324299300000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Gillette",
			numReviews: 0,
		},

		{
			name: "Desodorante Fem Nivea Protect&care 150ml",
			slug: "Desodorante-Fem",
			price: 678,
			description:
				"Desodorante Fem Nivea Protect&care 150ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/693551-800-auto?v=637830526148030000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Nivea",
			numReviews: 0,
		},

		{
			name: "Antitranspirante Gillette Antibacterial Clear Gel 82 G",
			slug: "Antitranspirante Gillette Antibacterial Clear Gel 82 G",
			price: 787,
			description:
				"Antitranspirante Gillette Antibacterial Clear Gel 82 G",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/569799-800-auto?v=637153031097600000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Gillette",
			numReviews: 0,
		},

		{
			name: "Acond Tresemme Liso Efecto Botox 880ml",
			slug: "Acond Tresemme Liso Efecto Botox 880ml",
			price: 2017,
			description:
				"Acond Tresemme Liso Efecto Botox 880ml",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/760225-800-auto?v=638048361723930000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Tresemme",
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
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",				
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 5,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Pan Multigrano X 1 U",
			slug: "Pan-Multigrano",
			price: 499,
			description: "Pan Multigrano X 1 U",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423862-800-auto?v=636482196748900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Ciabatta",
			slug: "Ciabatta",
			price: 139,
			description: "Ciabatta",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/504589-800-auto?v=636816631114470000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 220,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Mini-bizcochos Oliva & Parmesano",
			slug: "Mini-bizcochos Oliva & Parmesano",
			price: 359,
			description: "Mini-bizcochos Oliva & Parmesano",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/501700-800-auto?v=636804535291900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 120,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Rustichella Tipo Pugliese",
			slug: "Rustichella Tipo Pugliese",
			price: 785,
			description: "Rustichella Tipo Pugliese",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/503045-800-auto?v=636814902947100000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 250,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Galletas Malteadas Originales",
			slug: "Galletas Malteadas Originales",
			price: 431,
			description: "Galletas Malteadas Originales",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/501699-800-auto?v=636804535288900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 520,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Pan Tipo Aleman Multicereal",
			slug: "Pan Tipo Aleman Multicereal",
			price: 1039,
			description: "Pan Tipo Aleman Multicereal",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/522353-800-auto?v=636864884596100000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 620,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Cookies Con Chip De Chocolate",
			slug: "Cookies Con Chip De Chocolate",
			price: 681,
			description: "Cookies Con Chip De Chocolate",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/501696-800-auto?v=636804535277200000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Sin Marca",
			numReviews: 0,
		},

		{
			name: "Pepitas De Membrillo Peso Aprox 250grs",
			slug: "Pepitas De Membrillo Peso Aprox 250grs",
			price: 389,
			description: "Pepitas De Membrillo Peso Aprox 250grs",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/650520-800-auto?v=637594962133300000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 200,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Alfajorcitos De Chocolate 250 Gr",
			slug: "Alfajorcitos De Chocolate 250 Gr",
			price: 616,
			description: "Alfajorcitos De Chocolate 250 Gr",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/499744-800-auto?v=636792439232830000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Bizcochuelo Húmedo",
			slug: "Bizcochuelo Húmedo",
			price: 1039,
			description: "Bizcochuelo Húmedo",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/504364-800-auto?v=636816630330500000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Pasta Frola De Batata 1u",
			slug: "Pasta Frola De Batata 1u",
			price: 999,
			description: "Pasta Frola De Batata 1u",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423674-800-auto?v=636482192168700000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 230,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Sin Marca",
			numReviews: 0,
		},

		{
			name: "Torta De Brownie 1 Kg",
			slug: "Torta De Brownie 1 Kg",
			price: 2079,
			description: "Torta De Brownie 1 Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/492392-800-auto?v=636756042401700000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 120,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Torta Tres Leches Con Crema Y Dulce De Leche 1 Kg",
			slug: "Torta Tres Leches Con Crema Y Dulce De Leche 1 Kg",
			price: 1139,
			description: "Torta Tres Leches Con Crema Y Dulce De Leche 1 Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/477991-800-auto?v=636710256520900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},

		{
			name: "Torta De Chocolate 1 Kg",
			slug: "Torta De Chocolate 1 Kg",
			price: 2794,
			description: "Torta De Chocolate 1 Kg",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423665-800-auto?v=636482192137600000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
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
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
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
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Samsung",
			numReviews: 0,
		},

		{
			name: "Aire Acondicionado Philco Inverter 3550w",
			slug: "Aire Acondicionado Philco Inverter 3550w",
			price: 275.909,
			description: "Aire Acondicionado Philco Inverter 3550w",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/766554-800-auto?v=638107761799370000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "philco",
			numReviews: 0,
		},

		{
			name: "Aire Acondicionado Lg Artcool Inverter 3600w",
			slug: "Aire Acondicionado Lg Artcool Inverter 3600w",
			price: 447.999,
			description: "Aire Acondicionado Lg Artcool Inverter 3600w",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/724718-800-auto?v=637997310645100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "LG",
			numReviews: 0,
		},

		{
			name: "Lavarropas Drean Next 6.06 Eco",
			slug: "Lavarropas Drean Next 6.06 Eco",
			price: 178.065,
			description: "Lavarropas Drean Next 6.06 Eco",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/492757-800-auto?v=636756048681270000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Drean",
			numReviews: 0,
		},

		{
			name: "Lavarropas Bgh 6kg Bwfa06w21ar blanco",
			slug: "Lavarropas Bgh 6kg Bwfa06w21ar blanco",
			price: 165.999,
			description: "Lavarropas Bgh 6kg Bwfa06w21ar blanco",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/777576-800-auto?v=638175262371100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "BGH",
			numReviews: 0,
		},

		{
			name: "Secarropas Centr¡fugo Kohinoor Acero Inoxidable 6.5 Kg",
			slug: "Secarropas Centr¡fugo Kohinoor Acero Inoxidable 6.5 Kg",
			price: 57.764,
			description: "Secarropas Centr¡fugo Kohinoor Acero Inoxidable 6.5 Kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/526687-800-auto?v=636883032241870000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Ko-Hi-Noor",
			numReviews: 0,
		},

		{
			name: "Ventilador De Pie Star Trak De 20",
			slug: "Ventilador De Pie Star Trak De 20",
			price: 19.999,
			description: "Ventilador De Pie Star Trak De 20",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/741090-800-auto?v=637997421553230000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 122,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Star track",
			numReviews: 0,
		},

		{
			name: "Ventilador Turbo Axel 20' Mod. Axpie20ble",
			slug: "Ventilador Turbo Axel 20' Mod. Axpie20ble",
			price: 17.999,
			description: "Ventilador Turbo Axel 20' Mod. Axpie20ble",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/484298-800-auto?v=636729258426700000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Axel",
			numReviews: 0,
		},

		{
			name: "Tablet Samsung Galaxy Gray A8 Sm-x200nzamaro",
			slug: "Tablet Samsung Galaxy Gray A8 Sm-x200nzamaro",
			price: 120.959,
			description: "Tablet Samsung Galaxy Gray A8 Sm-x200nzamaro",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/697168-800-auto?v=637858930788130000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Samsung",
			numReviews: 0,
		},

		{
			name: "Impresora Inalabrica Con Pantalla Lcd Canon G41",
			slug: "Impresora Inalabrica Con Pantalla Lcd Canon G41",
			price: 100.439,
			description: "Impresora Inalabrica Con Pantalla Lcd Canon G41",
			image:
			"https://jumboargentinaio.vtexassets.com/arquivos/ids/759723-800-auto?v=1769606455&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Epson",
			numReviews: 0,
		},

		{
			name: "Notebook Vaio Fe15 Core I5 12gen 8'56gb",
			slug: "Notebook Vaio Fe15 Core I5 12gen 8'56gb",
			price: 307.799,
			description: "Notebook Vaio Fe15 Core I5 12gen 8'56gb",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/771976-800-auto?v=638134545944770000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Vaio",
			numReviews: 0,
		},

		{
			name: "Monitor Samsung 24 Odyssey Crg5",
			slug: "Monitor Samsung 24 Odyssey Crg5",
			price: 118.799,
			description: "Monitor Samsung 24 Odyssey Crg5",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/717282-800-auto?v=637981484168130000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "samsung",
			numReviews: 0,
		},

		{
			name: "Notebook Hp 13-bb0003la Core I5 1135g7 8gb 256",
			slug: "Notebook Hp 13-bb0003la Core I5 1135g7 8gb 256",
			price: 419.295,
			description: "Notebook Hp 13-bb0003la Core I5 1135g7 8gb 256",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/771733-800-auto?v=638132818498330000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "HP",
			numReviews: 0,
		},

		{
			name: "Celular Motorola Moto G22 Azul 4!28gb",
			slug: "Celular Motorola Moto G22 Azul 4!28gb",
			price: 64.999,
			description: "Celular Motorola Moto G22 Azul 4!28gb",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/701616-800-auto?v=637889278094800000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
			stock: 12,
			isDeleted: false,
			comments: [],
			category: "Electrodomesticos",
			rating: 4,
			brand: "Motorola",
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
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
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
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Corveta",
			numReviews: 0,
		},

		{
			name: "Detergente Cif Lim¢n Verde 750 Ml",
			slug: "Detergente Cif Lim¢n Verde 750 Ml",
			price: 856,
			description: "Detergente Cif Lim¢n Verde 750 Ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/687522-800-auto?v=637798449986030000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Cif",
			numReviews: 0,
		},

		{
			name: "Detergente Ecovita Ultra Concentrado Limón 0,4",
			slug: "Detergente Ecovita Ultra Concentrado Limón 0,4",
			price: 310,
			description: "Detergente Ecovita Ultra Concentrado Limón 0,4",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/756326-800-auto?v=638028274138400000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Ecovita",
			numReviews: 0,
		},

		{
			name: "Toallitas Desinfectantes Ayudín Fresco",
			slug: "Toallitas Desinfectantes Ayudín Fresco",
			price: 779,
			description: "Toallitas Desinfectantes Ayudín Fresco",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/680464-800-auto?v=637746609758130000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "ayudin",
			numReviews: 0,
		},

		{
			name: "Limpiador Pisos Cif Plastificado Flotant 750ml",
			slug: "Limpiador Pisos Cif Plastificado Flotant 750ml",
			price: 442,
			description: "Limpiador Pisos Cif Plastificado Flotant 750ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/754564-800-auto?v=638022226708070000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Cif",
			numReviews: 0,
		},

		{
			name: "Limpiador Crema Cif Bio Original 375g",
			slug: "Limpiador Crema Cif Bio Original 375g",
			price: 252,
			description: "Limpiador Crema Cif Bio Original 375g",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/687534-800-auto?v=637798450022630000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Cif",
			numReviews: 0,
		},

		{
			name: "Limpiahornos Y Parrilla Mr Musculo Aer 360ml",
			slug: "Limpiahornos Y Parrilla Mr Musculo Aer 360ml",
			price: 558,
			description: "Limpiahornos Y Parrilla Mr Musculo Aer 360ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/755572-800-auto?v=638024926228100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "vea",
			numReviews: 0,
		},

		{
			name: "Limpiador Lysoform Cremoso Antibacterial 450ml",
			slug: "Limpiador Lysoform Cremoso Antibacterial 450ml",
			price: 478,
			description: "Limpiador Lysoform Cremoso Antibacterial 450ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/654448-800-auto?v=637605346454270000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Lysoform",
			numReviews: 0,
		},

		{
			name: "Limpiador Blem Multisuperficies Citrus G 500ml",
			slug: "Limpiador Blem Multisuperficies Citrus G 500ml",
			price: 603,
			description: "Limpiador Blem Multisuperficies Citrus G 500ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/711270-800-auto?v=637938633957030000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "blem",
			numReviews: 0,
		},

		{
			name: "Procenex Limpiador De Vidrios Repuesto 820ml",
			slug: "Procenex Limpiador De Vidrios Repuesto 820ml",
			price: 222,
			description: "Procenex Limpiador De Vidrios Repuesto 820ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/720285-800-auto?v=637992096046670000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Procenex",
			numReviews: 0,
		},

		{
			name: "Limpiador Desinfectante Para Inodoro 500ml",
			slug: "Limpiador Desinfectante Para Inodoro 500ml",
			price: 656,
			description: "Limpiador Desinfectante Para Inodoro 500ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/673274-800-auto?v=637709891636770000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Pato",
			numReviews: 0,
		},

		{
			name: "Harpic Gel Limpiador De Inodoros Desinfectante Power Plus Original 500ml",
			slug: "Harpic Gel Limpiador De Inodoros Desinfectante Power Plus Original 500ml",
			price: 656,
			description: "Harpic Gel Limpiador De Inodoros Desinfectante Power Plus Original 500ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/720264-800-auto?v=637992095963530000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Harpic",
			numReviews: 0,
		},

		{
			name: "Antibacterial Zorro Gatillo 500ml",
			slug: "Antibacterial Zorro Gatillo 500ml",
			price: 477,
			description: "Antibacterial Zorro Gatillo 500ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/667741-800-auto?v=637679433875530000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "Zorro",
			numReviews: 0,
		},

		{
			name: "Limpiador Desinfectante De Pisos Poett Alegra Tu D¡a 1.8 L",
			slug: "Limpiador Desinfectante De Pisos Poett Alegra Tu D¡a 1.8 L",
			price: 455,
			description: "Limpiador Desinfectante De Pisos Poett Alegra Tu D¡a 1.8 L",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/761365-800-auto?v=638053546108970000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "poett",
			numReviews: 0,
		},

		{
			name: "Limpiador Líquido Pisos Limón Procenex 1.8l",
			slug: "Limpiador Líquido Pisos Limón Procenex 1.8l",
			price: 481,
			description: "Limpiador Líquido Pisos Limón Procenex 1.8l",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/635667-800-auto?v=637534488963230000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
			stock: 8,
			isDeleted: false,
			comments: [],
			category: "Limpieza",
			rating: 4,
			brand: "procenex",
			numReviews: 0,
		},

		{
			name: "Empandas",
			slug: "Empanadas",
			price: 1500,
			description: "Empanadas precocidas",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/679243-800-auto?v=637740021742470000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
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
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Corveta",
			numReviews: 0,
		},

		{
			name: "Empanadas Zen Nuestra Humita 12u 1,2kg",
			slug: "Empanadas Zen Nuestra Humita 12u 1,2kg",
			price: 4904,
			description: "Empanadas Z?n Nuestra Humita 12u 1,2kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/679244-800-auto?v=637740021744670000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Zen",
			numReviews: 0,
		},

		{
			name: "Empanadas De Carne Y Acelga Fu Bao X 276grs",
			slug: "Empanadas De Carne Y Acelga Fu Bao X 276grs",
			price: 1451,
			description: "Empanadas De Carne Y Acelga Fu Bao X 276grs",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/564952-800-auto?v=637121496872600000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Fu Bao",
			numReviews: 0,
		},

		{
			name: "Hamburguesas Paty De Carne 4 U - 320 Gr",
			slug: "Hamburguesas Paty De Carne 4 U - 320 Gr",
			price: 1079,
			description: "Hamburguesas Paty De Carne 4 U - 320 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/773989-800-auto?v=638146533941270000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Paty",
			numReviews: 0,
		},

		{
			name: "Hamburguesa Tipo Casera Swift 2 U - 240g",
			slug: "Hamburguesa Tipo Casera Swift 2 U - 240g",
			price: 869,
			description: "Hamburguesa Tipo Casera Swift 2 U - 240g",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/769180-800-auto?v=638119749838930000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Swift",
			numReviews: 0,
		},

		{
			name: "Milanesas Patynesa Flow 2 U - 200 Gr",
			slug: "Milanesas Patynesa Flow 2 U - 200 Gr",
			price: 524,
			description: "Milanesas Patynesa Flow 2 U - 200 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/187542-800-auto?v=636383490369100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Paty",
			numReviews: 0,
		},

		{
			name: "Papas Mccain Congeladas Tradicional 1",
			slug: "Papas Mccain Congeladas Tradicional 1",
			price: 1336,
			description: "Papas Mccain Congeladas Tradicional 1",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/658700-800-auto?v=637643241238770000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Mc Cain",
			numReviews: 0,
		},

		{
			name: "Papas Mc Cain Noisette 500 Gr",
			slug: "Papas Mc Cain Noisette 500 Gr",
			price: 540,
			description: "Papas Mc Cain Noisette 500 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/646792-800-auto?v=637587186779200000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Mc cain",
			numReviews: 0,
		},

		{
			name: "Papas Congeladas Crinkle Mccain X 400 Gr",
			slug: "Papas Congeladas Crinkle Mccain X 400 Gr",
			price: 461,
			description: "Papas Congeladas Crinkle Mccain X 400 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/646801-800-auto?v=637587186809400000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Mc cain",
			numReviews: 0,
		},

		{
			name: "Bastones De Muzzarella Grupolar 300gr",
			slug: "Bastones De Muzzarella Grupolar 300gr",
			price: 1423,
			description: "Bastones De Muzzarella Grupolar 300gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/687729-800-auto?v=637799529674530000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Grupolar",
			numReviews: 0,
		},

		{
			name: "Arrolladi Primara Carne Fu Bao Packx360g Fu Ba",
			slug: "Arrolladi Primara Carne Fu Bao Packx360g Fu Ba",
			price: 2974,
			description: "Arrolladi Primara Carne Fu Bao Packx360g Fu Ba",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/765226-800-auto?v=638095018546130000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Fu Bao",
			numReviews: 0,
		},

		{
			name: "Waffle Clasico Fudy 210 Gr",
			slug: "Waffle Clasico Fudy 210 Gr",
			price: 536,
			description: "Waffle Clasico Fudy 210 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/587059-800-auto?v=637269241863570000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Fudy",
			numReviews: 0,
		},

		{
			name: "Bombón De Frambuesa Franui Black 150 Gr",
			slug: "Bombón De Frambuesa Franui Black 150 Gr",
			price: 1397,
			description: "Bombón De Frambuesa Franui Black 150 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/617184-800-auto?v=637437282397000000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Franui",
			numReviews: 0,
		},

		{
			name: "Helado Gelato Bon O Bon X 250 Gr",
			slug: "Helado Gelato Bon O Bon X 250 Gr",
			price: 748,
			description: "Helado Gelato Bon O Bon X 250 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/596857-800-auto?v=637321952338700000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
			stock: 6,
			isDeleted: false,
			comments: [],
			category: "Congelados",
			rating: 4,
			brand: "Arcor",
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
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Peltre",
			numReviews: 0,
		},

		{
			name: "100 Separadores Para Freezer Separata 19x25 Cm",
			slug: "100 Separadores Para Freezer Separata 19x25 Cm",
			price: 535,
			description: "100 Separadores Para Freezer Separata 19x25 Cm",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/551754-800-auto?v=637069657510670000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 152,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Separata",
			numReviews: 0,
		},

		{
			name: "Set Repasadores Krea Wafle 40x60 Cm",
			slug: "Set Repasadores Krea Wafle 40x60 Cm",
			price: 2499,
			description: "Set Repasadores Krea Wafle 40x60 Cm",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/504167-800-auto?v=636815772358270000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Krea",
			numReviews: 0,
		},

		{
			name: "Bateria 7pz Acero. Krea",
			slug: "Bateria 7pz Acero. Krea",
			price: 29019,
			description: "Bateria 7pz Acero. Krea",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/719301-800-auto?v=637986045933500000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Krea",
			numReviews: 0,
		},

		{
			name: "Molde 6 Div 27",
			slug: "Molde 6 Div 27",
			price: 3209,
			description: "Molde 6 Div 27",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/656810-800-auto?v=637620455088330000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Brinox",
			numReviews: 0,
		},

		{
			name: "Bolsas Hermeticas Ziploc Para Conservar Grande 10un",
			slug: "Bolsas Hermeticas Ziploc Para Conservar Grande 10un",
			price: 587,
			description: "Bolsas Hermeticas Ziploc Para Conservar Grande 10un",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/654552-800-auto?v=637605347099000000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Ziploc",
			numReviews: 0,
		},

		{
			name: "Termo De Acero Inoxidable Aisi304 En Caja",
			slug: "Termo De Acero Inoxidable Aisi304 En Caja",
			price: 19900,
			description: "Termo De Acero Inoxidable Aisi304 En Caja",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/601117-800-auto?v=637351320190670000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "SD",
			numReviews: 0,
		},

		{
			name: "Filtro De Papel Para Cafe Nº 2 X 30 U",
			slug: "Filtro De Papel Para Cafe Nº 2 X 30 U",
			price: 619,
			description: "Filtro De Papel Para Cafe Nº 2 X 30 U",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/586901-800-auto?v=637269241334870000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Domestic",
			numReviews: 0,
		},

		{
			name: "Display Jarro Hervidor Aston",
			slug: "Display Jarro Hervidor Aston",
			price: 3399,
			description: "Display Jarro Hervidor Aston",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/766334-800-auto?v=638103658072030000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://jumboargentina.vtexassets.com/arquivos/ids/766334-800-auto?v=638103658072030000&width=800&height=auto&aspect=true",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Bathbazaar",
			numReviews: 0,
		},

		{
			name: "Rallador Ilko",
			slug: "Rallador Ilko",
			price: 1029,
			description: "Rallador Ilko",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/694499-800-auto?v=637841650142070000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Ilko",
			numReviews: 0,
		},

		{
			name: "Cafetera Italiana - Capacidad 6 Tazas",
			slug: "Cafetera Italiana - Capacidad 6 Tazas",
			price: 5609,
			description: "Cafetera Italiana - Capacidad 6 Tazas",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/685517-800-auto?v=637786569941070000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "krea",
			numReviews: 0,
		},

		{
			name: "Cubetera Superflex 1 U",
			slug: "Cubetera Superflex 1 U",
			price: 505,
			description: "Cubetera Superflex 1 U",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/482072-800-auto?v=636719754584130000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Deses Plast",
			numReviews: 0,
		},

		{
			name: "Sarten Profundo Bordo 24cm Domo Premium",
			slug: "Sarten Profundo Bordo 24cm Domo Premium",
			price: 5835,
			description: "Sarten Profundo Bordo 24cm Domo Premium",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/674468-800-auto?v=637716164947630000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Domo",
			numReviews: 0,
		},

		{
			name: "Prensa Papas Nylon Basico Menta- Antiadherente- 24 Cm",
			slug: "Prensa Papas Nylon Basico Menta- Antiadherente- 24 Cm",
			price: 377,
			description: "Prensa Papas Nylon Basico Menta- Antiadherente- 24 Cm",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/768812-800-auto?v=638118993920730000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "Krea",
			numReviews: 0,
		},

		{
			name: "Hermetico San Remo Plastico Cuadrado Verde 1",
			slug: "Hermetico San Remo Plastico Cuadrado Verde 1",
			price: 819,
			description: "Hermetico San Remo Plastico Cuadrado Verde 1",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/181076-800-auto?v=636383406813770000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Cocina",
			rating: 4,
			brand: "San Remo",
			numReviews: 0,
		},

		{
			name: "Juguete Dog Cancat Unicornio 15cm",
			slug: "Juguete Dog Cancat Unicornio 15cm",
			price: 961,
			description: "Juguete Dog Cancat Unicornio 15cm",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/670695-800-auto?v=637696822094370000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 15,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "pet CanCat",
			numReviews: 0,
		},

		{
			name: "Juguete Dog Cancat Hueso Flotante Tpr",
			slug: "Juguete Dog Cancat Hueso Flotante Tpr",
			price: 3597,
			description: "Juguete Dog Cancat Hueso Flotante Tpr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/670677-800-auto?v=637696822044930000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "pet CanCat",
			numReviews: 0,
		},

		{
			name: "Alimento Para Perros Pedigree 15 Kg",
			slug: "Alimento Para Perros Pedigree 15 Kg",
			price: 5740,
			description: "Alimento Para Perros Pedigree 15 Kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/760143-800-auto?v=638048145790570000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Pedigree",
			numReviews: 0,
		},

		{
			name: "Snacks Dentastix Razas Pequeño Cuidado Oral",
			slug: "Snacks Dentastix Razas Pequeño Cuidado Oral",
			price: 581,
			description: "Snacks Dentastix Razas Pequeño Cuidado Oral",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/586447-800-auto?v=637265784345000000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Pedigree",
			numReviews: 0,
		},

		{
			name: "Alimento Para Perros Pedigree Adulto Mayor 3 Kg",
			slug: "Alimento Para Perros Pedigree Adulto Mayor 3 Kg",
			price: 1593,
			description: "Alimento Para Perros Pedigree Adulto Mayor 3 Kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/760151-800-auto?v=638048145821600000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Pedigree",
			numReviews: 0,
		},

		{
			name: "Alimento Dogui Cachorros 15kg",
			slug: "Alimento Dogui Cachorros 15kg",
			price: 4433,
			description: "Alimento Dogui Cachorros 15kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/669864-800-auto?v=637691638329370000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Dogui",
			numReviews: 0,
		},

		{
			name: "Alimento Dogui Adultos X1kg",
			slug: "Alimento Dogui Adultos X1kg",
			price: 352,
			description: "Alimento Dogui Adultos X1kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/687340-800-auto?v=637795965688600000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Dogui",
			numReviews: 0,
		},

		{
			name: "Alimento Champ Mix Carnes 3kg",
			slug: "Alimento Champ Mix Carnes 3kg",
			price: 1206,
			description: "Alimento Champ Mix Carnes 3kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/600994-800-auto?v=637348723968100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Champ",
			numReviews: 0,
		},

		{
			name: "Alimento Whiskas Para Gatos Pescado 3kg",
			slug: "Alimento Whiskas Para Gatos Pescado 3kg",
			price: 2400,
			description: "Alimento Whiskas Para Gatos Pescado 3kg",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/760160-800-auto?v=638048146494200000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Whiskas",
			numReviews: 0,
		},

		{
			name: "Alim Cat Chow Adulto Pescado Pollo 1k",
			slug: "Alim Cat Chow Adulto Pescado Pollo 1k",
			price: 865,
			description: "Alim Cat Chow Adulto Pescado Pollo 1k",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/681925-800-auto?v=637757194075870000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Cat chow",
			numReviews: 0,
		},

		{
			name: "Alimento Purina One Gato Salmon 2k",
			slug: "Alimento Purina One Gato Salmon 2k",
			price: 2546,
			description: "Alimento Purina One Gato Salmon 2k",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/615782-800-auto?v=637426488079800000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "One",
			numReviews: 0,
		},

		{
			name: "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
			slug: "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
			price: 165,
			description: "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/586430-800-auto?v=637265784247930000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Whiskas",
			numReviews: 0,
		},

		{
			name: "Pouch Gato Atun Sardina Petsclass 85 Gr",
			slug: "Pouch Gato Atun Sardina Petsclass 85 Gr",
			price: 119,
			description: "Pouch Gato Atun Sardina Petsclass 85 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/685497-800-auto?v=637786569869270000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "Pet Class",
			numReviews: 0,
		},

		{
			name: "Humedo King Food Para Gato Frutos De Mar 85gr",
			slug: "Humedo King Food Para Gato Frutos De Mar 85gr",
			price: 108,
			description: "Humedo King Food Para Gato Frutos De Mar 85gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/554617-800-auto?v=637087364342000000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "King Food",
			numReviews: 0,
		},

		{
			name: "Juguete Pet Cancat Manta Raya 7x15 Cms",
			slug: "Juguete Pet Cancat Manta Raya 7x15 Cms",
			price: 1295,
			description: "Juguete Pet Cancat Manta Raya 7x15 Cms",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/661997-800-auto?v=637656201332070000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
			stock: 13,
			isDeleted: false,
			comments: [],
			category: "Mascotas",
			rating: 4,
			brand: "pet CanCat",
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
			category: "Panaderia",
			rating: 4,
			brand: "Quaker",
			numReviews: 0,
		},

		{
			name: "Aceite De Girasol Natura 3 L.",
			slug: "Aceite De Girasol Natura 3 L.",
			price: 1040,
			description: "Aceite De Girasol Natura 3 L.",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/427745-800-auto?v=636495154736170000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 122,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Natura",
			numReviews: 0,
		},

		{
			name: "Aceite De Coco Manteca X 180 Sin Tacc Chia Graal",
			slug: "Aceite De Coco Manteca X 180 Sin Tacc Chia Graal",
			price: 1542,
			description: "Aceite De Coco Manteca X 180 Sin Tacc Chia Graal",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/685156-800-auto?v=637782250248030000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 100,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Chia Graal",
			numReviews: 0,
		},

		{
			name: "Aceite Mezcla Cocinero 900 Ml",
			slug: "Aceite Mezcla Cocinero 900 Ml",
			price: 222,
			description: "Aceite Mezcla Cocinero 900 Ml",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/614718-800-auto?v=637409203034000000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 222,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Cocinero",
			numReviews: 0,
		},

		{
			name: "Atun La Campagnola Al Natural X170g",
			slug: "Atun La Campagnola Al Natural X170g",
			price: 751,
			description: "Atun La Campagnola Al Natural X170g",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/703709-800-auto?v=637895325885100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 50,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "La campagnola",
			numReviews: 0,
		},

		{
			name: "Atun La Campagnola En Aceite X170g",
			slug: "Atun La Campagnola En Aceite X170g",
			price: 751,
			description: "Atun La Campagnola En Aceite X170g",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/703708-800-auto?v=637895325882100000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 200,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "La campagnola",
			numReviews: 0,
		},

		{
			name: "Filet Anchoas Cuisine & Co 90 Gr",
			slug: "Filet Anchoas Cuisine & Co 90 Gr",
			price: 1368,
			description: "Filet Anchoas Cuisine & Co 90 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/601182-800-auto?v=637351320475470000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 300,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Cusine & CO",
			numReviews: 0,
		},

		{
			name: "Palmitos En Trozos 220 Gr Cuisine & Co",
			slug: "Palmitos En Trozos 220 Gr Cuisine & Co",
			price: 729,
			description: "Palmitos En Trozos 220 Gr Cuisine & Co",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/603621-800-auto?v=637363410309870000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 729,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Cuisine & CO",
			numReviews: 0,
		},

		{
			name: "Garbanzos Cuisine & Co 300gr",
			slug: "Garbanzos Cuisine & Co 300gr",
			price: 213,
			description: "Garbanzos Cuisine & Co 300gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/684930-800-auto?v=637781827797830000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 321,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Cusine & CO",
			numReviews: 0,
		},

		{
			name: "Fideos Mostachol C&c 500gr",
			slug: "Fideos Mostachol C&c 500gr",
			price: 189,
			description: "Fideos Mostachol C&c 500gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/691840-800-auto?v=637814110103970000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 183,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Cuisine & CO",
			numReviews: 0,
		},

		{
			name: "Fideos Codito Matarazzo X500 Gr",
			slug: "Fideos Codito Matarazzo X500 Gr",
			price: 1500,
			description: "Fideos Codito Matarazzo X500 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/601809-800-auto?v=637352619931630000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 300,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Matarazzo",
			numReviews: 0,
		},

		{
			name: "Fideos Tirabuzon Molto 500 Gr",
			slug: "Fideos Tirabuzon Molto 500 Gr",
			price: 187,
			description: "Fideos Tirabuzon Molto 500 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/207401-800-auto?v=636383707222300000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 35,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Molto",
			numReviews: 0,
		},

		{
			name: "Capelettini Giacomo Verdura 500g",
			slug: "Capelettini Giacomo Verdura 500g",
			price: 935,
			description: "Capelettini Giacomo Verdura 500g",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/654810-800-auto?v=637605348208830000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 46,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Giacomo",
			numReviews: 0,
		},

		{
			name: "Fideos Dedalito Matarazzo X500 Gr",
			slug: "Fideos Dedalito Matarazzo X500 Gr",
			price: 263,
			description: "Fideos Dedalito Matarazzo X500 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/592392-800-auto?v=637296886204200000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 324,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Matarazzo",
			numReviews: 0,
		},

		{
			name: "Salsa Bbq Heinz Classic Sweet & Thick 606gr",
			slug: "Salsa Bbq Heinz Classic Sweet & Thick 606gr",
			price: 2028,
			description: "Salsa Bbq Heinz Classic Sweet & Thick 606gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/619153-800-auto?v=637457162834770000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "Heinz",
			numReviews: 0,
		},

		{
			name: "Aderezo Ketchup La Campagnola 250 Gr",
			slug: "Aderezo Ketchup La Campagnola 250 Gr",
			price: 254,
			description: "Aderezo Ketchup La Campagnola 250 Gr",
			image:
			"https://jumboargentina.vtexassets.com/arquivos/ids/584777-800-auto?v=637249362214730000&width=800&height=auto&aspect=true",
			imageCategory:
			"https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
			stock: 100,
			isDeleted: false,
			comments: [],
			category: "Almacen",
			rating: 4,
			brand: "La campagnola",
			numReviews: 0,
		},


	],
};

export default data;
