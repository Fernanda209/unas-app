import React, { useState } from 'react';
import Navbar from '../components/Navbar';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Citas() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    hora: '',
    notas: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/citas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al agendar la cita');
      }

      const data = await response.json();
      console.log('✅ Cita guardada en el backend:', data);

      alert('¡Tu cita ha sido agendada!');

      // Limpiar formulario
      setFormData({
        nombre: '',
        telefono: '',
        servicio: '',
        fecha: '',
        hora: '',
        notas: '',
      });
    } catch (error) {
      console.error('❌ Error al enviar la cita:', error);
      alert('Ocurrió un error al agendar tu cita. Intenta de nuevo.');
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container-fluid mt-3">
        <div className="container mt-5">
          <h2 className="mb-4 text-center">Agendar Cita de Uñas</h2>
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-light"
          >
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="servicio" className="form-label">
                Servicio
              </label>
              <select
                className="form-select"
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="manicura">Manicura</option>
                <option value="pedicura">Pedicura</option>
                <option value="acrilicas">Uñas Acrílicas</option>
                <option value="gelish">Esmaltado Gelish</option>
                <option value="retiro">Retiro de Uñas</option>
              </select>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="fecha" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="hora" className="form-label">
                  Hora
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="notas" className="form-label">
                Notas adicionales
              </label>
              <textarea
                className="form-control"
                id="notas"
                name="notas"
                rows="3"
                value={formData.notas}
                onChange={handleChange}
                placeholder="¿Algo más que debamos saber?"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Agendar Cita
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Citas;
