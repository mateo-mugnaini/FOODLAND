import React, { useEffect, useState } from 'react';
import { RadialChart , XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries,LabelSeries} from 'react-vis';
import { getOrdersAdmin } from '../../redux/actions/orderActions';
import { getAllProducts } from '../../redux/actions/productActions';
import {get_users} from "../../redux/actions/userActions"
import { useDispatch, useSelector } from 'react-redux';
import "./Charts.css"
import moment from 'moment';
import Slider from "react-slick";

const Chart = () => {
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.order?.myOrders);
  const allProducts = useSelector ((state) => state.products.AllProducts.products);
  const users = useSelector((state) => state.users.users);
  const { userInfo } = useSelector((state) => state.userSignin);
  const token = userInfo.token;
  const [data, setData] = useState([]);
  const [data2,setData2] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [blueData, setBlueData] = useState([]);
    const [CantPorCat,  setCantPorCat] = useState({});

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  
  const BarSeries = VerticalBarSeries;


  useEffect(() => {
    dispatch(getOrdersAdmin());
    dispatch(getAllProducts());
    dispatch(get_users(token));
  }, [dispatch,token]);

  
  // PRIMER CHART 

  useEffect(() => {  
    console.log(users)
    const nuevoArray = [];     // recorro las ordenes y guardo solo los productos {name, quantity}
    myOrders.forEach(e => {
      const { orderItems } = e;
      if (orderItems.length > 0) {
        const { name, quantity, image } = orderItems[0];
        nuevoArray.push({ name, quantity, image });
      }
    });
    nuevoArray.forEach(item => {  // comparo cada producto con la lista original de productos y le pongo la categoria
      const productoEncontrado = allProducts.find(producto => producto.name === item.name);
      if (productoEncontrado) {
        item.category = productoEncontrado.category;
      }
    });


const cantidadPorCategoria = {};

nuevoArray.forEach(producto => {
  if (cantidadPorCategoria[producto.category]) {
    cantidadPorCategoria[producto.category] += producto.quantity;
  } else {
    cantidadPorCategoria[producto.category] = producto.quantity;
  }
});
console.log(cantidadPorCategoria)
const sortedData = Object.entries(cantidadPorCategoria)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

const newData = sortedData.map(([category, count]) => {
  const angle = (count / nuevoArray.length) * 360;
  return { angle, label: category };
});
    setData(newData);
    setCantPorCat(cantidadPorCategoria)


  // ------------ SECOND CHART  -------------- 


// Determinar qué producto se repite más veces y menos veces en cada categoría
const productosMasVendidos = [];
const productosMenosVendidos = [];

// Verificar si nuevoArray está vacío o no
if (nuevoArray.length > 0) {
  nuevoArray.forEach((producto) => {
    if (!productosMasVendidos[producto.category]) {
      productosMasVendidos[producto.category] = { name: '', quantity: 0 , image:''};
    }

    if (!productosMenosVendidos[producto.category]) {
      productosMenosVendidos[producto.category] = { name: '', quantity: Infinity , image:''};
    }

    if (producto.quantity > productosMasVendidos[producto.category].quantity) {
      productosMasVendidos[producto.category].name = producto.name;
      productosMasVendidos[producto.category].quantity = producto.quantity;
      productosMasVendidos[producto.category].image = producto.image;

    }

    if (producto.quantity < productosMenosVendidos[producto.category].quantity) {
      productosMenosVendidos[producto.category].name = producto.name;
      productosMenosVendidos[producto.category].quantity = producto.quantity;
      productosMenosVendidos[producto.category].image = producto.image;
    }
  });

} else {
  console.log('El array nuevoArray está vacío.');
}

//setear para los productos mas y menos vendidos
 setBlueData(productosMasVendidos)
 setGreenData(productosMenosVendidos)

 // ------------------- TERCER CHART -------------

 const Data2 = users.map((user, index) => (
    {
    x: index + 1, // Utiliza el nombre del usuario en el eje X
    y: moment(user.createdAt).diff(moment('2023-05-9'), 'days') 
  }));

 setData2(Data2) ;

  }, [allProducts, myOrders]);


  return (
    <div className='chartContainer'>
    <div className='chart1'>
    <RadialChart
      data={data}
      width={450}
      height={450}
      showLabels
      labelsRadiusMultiplier={0.7}
    />
    <div className='chart1-text'>
        <h2>Best-selling categories</h2>
        <ul>
        {Object.entries(CantPorCat).map(([key, value]) => (
        <li key={key}>
      <strong>{key}: </strong>
      {value}
    </li>
  ))}
</ul>
    </div>
    </div>
    <div className='chart3'>
    <h3>Number of registered users since 05-09-2023</h3>
   
<XYPlot width={650} height={300} xType="ordinal">
      <HorizontalGridLines />
       <XAxis/> 
      <YAxis title="Time (days)" />
      <VerticalBarSeries data={data2} />
    </XYPlot>
</div>

    <div className='chart2'>
    <div className='sliderMasVendidos'>
    <span> Most selled products </span>
    <Slider {...settings}>
  {Object.entries(blueData).map(([category, { name, quantity, image }], index) => (
    <div key={category}>
   
      <div className="card">
        <h4>{category}</h4>
        <p>{name}</p>
        <h4>{quantity}</h4>
        <img src={image} alt={name} />
      </div>
    </div>
  ))}
</Slider>
</div>
<div className='sliderMasVendidos'>
<span>  Less selled products </span>
    <Slider {...settings}>
  {Object.entries(greenData).map(([category, { name, quantity, image }], index) => (
     <div key={category}>
      <div className="card">
        <h4>{category}</h4>
        <p>{name}</p>
        <h4>{quantity}</h4>
        <img src={image} alt={name} />
    </div>
    </div>
  ))}
</Slider>
</div>
</div>
</div>


  );
};

export default Chart;
