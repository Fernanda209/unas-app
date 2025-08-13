import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-4">
        <div className="text-center mb-4">
          <h1>Sobre Nosotros</h1>
          <p className="lead">
            Bienvenidos a nuestra app de uñas, donde cuidamos cada detalle para que
            tengas la mejor experiencia y las uñas que siempre soñaste.
          </p>
        </div>

        {/* Sección con imagen y texto */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3">
            <div className="text-white d-flex justify-content-center align-items-center" style={{height: '250px'}}>
              <span><img src="https://imgs.search.brave.com/VAzIqNFyyLWWeqkIV2rrk8vlh-abR_lcUtt0dj0hFCU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlc2hhLmNv/bS9sZWFkLWltYWdl/cy9wbGFjZWhvbGRl/cnMvbmFpbC1zYWxv/bi0xOTcuanBnP2Ns/YXNzPXdpZHRoLXNt/YWxs" alt="" style={{width: '100%', height: '250px', objectFit: 'cover'}}/></span>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Nuestra Historia</h3>
            <p>
              Desde hace más de 10 años, nos dedicamos a embellecer uñas con dedicación,
              profesionalismo y mucho amor. Contamos con un equipo experto y productos
              de primera calidad.
            </p>
          </div>
        </div>

        {/* Otra sección con imagen y texto, invertida */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3">
            <div className="d-flex justify-content-center align-items-center" style={{height: '250px'}}>
              <span><img src="https://imgs.search.brave.com/yFQgOpAFjx2TCvgfn_5aSw0RP2rAFcaXgMSrsialZfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGckZI/MDVKbTAvMi8wLzEx/MzF3L2NhbnZhLXAl/QzMlQjNzdGVyLXNl/cnZpY2lvcy1zYWxv/bi1kZS1iZWxsZXph/LWVsZWdhbnRlLWJl/aWdlLWNhZiVDMyVB/OS1zR1FsanItUHJx/TS5qcGc" alt="" style={{width: '100%', height: '350px', objectFit: 'fill'}}/></span>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <h3>Servicios</h3>
            <p>
              Ofrecemos manicura, pedicura, uñas acrílicas, gelish y mucho más. Siempre
              buscamos la satisfacción total de nuestros clientes.
            </p>
          </div>
        </div>

        {/* Puedes agregar más secciones similares según necesites */}
      </main>
    </>
  )
}

export default About
