import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const initialForm = {
  fecha: "",
  hora: "",
  alto: "",
  ancho: "",
  largo: "",
  peso: "",
  dirreccionRecogida: "",
  ciudadRecogida: "",
  nombreDestinatario: "",
  cedulaDestinatario: "",
  dirreccionEntrega: "",
  ciudadEntrega: "",
};

export const OrderRegister = () => {
  const [form, setForm] = useState({ ...initialForm });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  console.log(form, "formmm");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post("http://localhost:9000/api/orders",form)
      console.log(result)
    alert("Datos enviados correctamente")
    } catch (error) {
      console.log(error,"error")
    }
  };

  return (
    <div class="container">
      <Link to="/">
        <button type="button" class="btn btn-primary mt-2">
          Regresar
        </button>
      </Link>

      <div class="row justify-content-center text-align-center">
        <h2 className="mb-2 font-weight-bold text-primary">
          Registro de ordenes
        </h2>
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg">
            <div class="card-body p-0">
              <form onSubmit={handleSubmit} className="justify-content-center my-4 mx-5">
                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">Fecha</label>
                  <div class="col-md-3">
                    <input
                      id="fecha"
                      value={form.fecha}
                      onChange={handleChange}
                      type="date"
                      class="form-control"
                    />
                  </div>
                  <label class="col-md-3 col-form-label">Hora</label>
                  <div class="col-md-3">
                    <input
                      id="hora"
                      value={form.hora}
                      onChange={handleChange}
                      type="time"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-2 col-form-label">Alto</label>
                  <div class="col-md-1">
                    <input
                      id="alto"
                      value={form.alto}
                      onChange={handleChange}
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <label class="col-md-2 col-form-label">Ancho</label>
                  <div class="col-md-1">
                    <input
                      id="ancho"
                      value={form.ancho}
                      onChange={handleChange}
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <label class="col-md-2 col-form-label">largo</label>
                  <div class="col-md-1">
                    <input
                      id="largo"
                      value={form.largo}
                      onChange={handleChange}
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <label class="col-md-2 col-form-label">Peso</label>
                  <div class="col-md-1">
                    <input
                      id="peso"
                      value={form.peso}
                      onChange={handleChange}
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-md-3 col-form-labe">
                    Dirrección Recogida
                  </label>
                  <div class="col-md-9">
                    <input
                      id="dirreccionRecogida"
                      value={form.dirreccionRecogida}
                      onChange={handleChange}
                      type="text"
                      class="form-control "
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-labe">Ciudad Recogida</label>
                  <div class="col-md-9">
                    <input
                      id="ciudadRecogida"
                      value={form.ciudadRecogida}
                      onChange={handleChange}
                      type="text"
                      class="form-control "
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Nombre Destinatario
                  </label>
                  <div class="col-md-9">
                    <input
                      id="nombreDestinatario"
                      value={form.nombreDestinatario}
                      onChange={handleChange}
                      type="text"
                      class="form-control "
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Cedula/NIT Destinatario
                  </label>
                  <div class="col-md-9">
                    <input
                      id="cedulaDestinatario"
                      value={form.cedulaDestinatario}
                      onChange={handleChange}
                      type="text"
                      class="form-control "
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Dirrección de Entrega
                  </label>
                  <div class="col-md-9">
                    <input
                      id="dirreccionEntrega"
                      value={form.dirreccionEntrega}
                      onChange={handleChange}
                      type="text"
                      class="form-control "
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Ciudad de Entrega
                  </label>
                  <div class="col-md-9">
                    <input
                      id="ciudadEntrega"
                      value={form.ciudadEntrega}
                      onChange={handleChange}
                      type="text"
                      class="form-control "
                    />
                  </div>
                </div>

                <button  type="submit" class="btn btn-primary w-100 ">
                  Registrar orden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
