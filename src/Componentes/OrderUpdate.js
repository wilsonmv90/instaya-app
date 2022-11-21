import React from "react";
import { Link } from "react-router-dom";

export const OrderUpdate = () => {
  return (
    <div class="container">
      <Link to="/">
        <button type="button" class="btn btn-primary mt-2">
          Regresar
        </button>
      </Link>

      <div class="row justify-content-center text-align-center">
        <h2 className="mb-2 font-weight-bold text-primary">
          Actualización de ordenes
        </h2>
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg">
            <div class="card-body p-0">
              <form className="justify-content-center my-4 mx-5">
                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">Fecha</label>
                  <div class="col-md-3">
                    <input type="date" class="form-control" />
                  </div>
                  <label class="col-md-3 col-form-label">Hora</label>
                  <div class="col-md-3">
                    <input type="time" class="form-control" />
                  </div>
                </div>

                <div class="mb-3 row justify-content-center ">
                  <label class="col-md-3 col-form-label">Estado</label>
                  <div class="col-md-4">
                    <select
                      class="form-select"
                      aria-label="Selecciona una Opción"
                    >
                      <option selected>Guardado</option>
                      <option value="1">Cumplido</option>
                      <option value="2">Cancelado</option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-2 col-form-label">Alto</label>
                  <div class="col-md-1">
                    <input type="text" class="form-control" />
                  </div>
                  <label class="col-md-2 col-form-label">Ancho</label>
                  <div class="col-md-1">
                    <input type="text" class="form-control" />
                  </div>
                  <label class="col-md-2 col-form-label">largo</label>
                  <div class="col-md-1">
                    <input type="text" class="form-control" />
                  </div>
                  <label class="col-md-2 col-form-label">Peso</label>
                  <div class="col-md-1">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-md-3 col-form-labe">
                    Dirrección Recogida
                  </label>
                  <div class="col-md-9">
                    <input type="text" class="form-control " />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-labe">Ciudad Recogida</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control " />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Nombre Destinatario
                  </label>
                  <div class="col-md-9">
                    <input type="text" class="form-control " />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Cedula/NIT Destinatario
                  </label>
                  <div class="col-md-9">
                    <input type="text" class="form-control " />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Dirrección de Entrega
                  </label>
                  <div class="col-md-9">
                    <input type="text" class="form-control " />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-md-3 col-form-label">
                    Ciudad de Entrega
                  </label>
                  <div class="col-md-9">
                    <input type="text" class="form-control " />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary w-100 ">
                  Actualizar orden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
