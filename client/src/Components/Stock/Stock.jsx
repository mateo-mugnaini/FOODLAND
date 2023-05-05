import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { Link } from "react-router-dom";

import "./Stock.css"

const Stock = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const productList = products.AllProducts.products;

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calcular índices de productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(productList?.length / productsPerPage);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Botones para ir a la página siguiente y anterior
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Eliminar producto
  const handleDeleteProduct = (productId) => {
console("DEBO ELIMINAR EL PRODUCTO")
  };

  return (
    <div className="stockList">
      <table>
        <thead>
          <tr>
            <th className="thStock1">Name</th>
            <th className="thStock2">Categoty</th>
            <th className="thStock2">Stock</th>
            <th className="thStock2">Brand</th>
            <th className="thStock3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts?.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.stock}</td>
              <td>{p.brand}</td>
              <td>
                <Link to={`/editProduct/${p.id}`}>Editar</Link>
                <button onClick={() => handleDeleteProduct(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginado */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}

        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Stock;