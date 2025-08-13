import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Products() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products") // Cambia la URL si usas un proxy
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-4">
        <h1 className="text-center mb-4">Productos</h1>

        {loading ? (
          <p className="text-center">Cargando productos...</p>
        ) : (
          <div className="row">
            {productos.map((producto) => (
              <div key={producto._id} className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">Categoría: {producto.category}</p>
                    <p className="card-text">Precio: ${producto.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="text-center mt-4 mb-3 text-muted">
        © Tu Salón de Uñas
      </footer>
    </>
  );
}

export default Products;
