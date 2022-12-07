import { Link } from "react-router-dom";


export const OrderList = () => {

  return (
    <div class="container">
      <Link to="/">
        <button type="button" class="btn btn-primary my-4">
          Regresar
        </button>
      </Link>

      <div class="d-flex justify-content-center"></div>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between ">
          <h2 className="m-0 font-weight-bold text-primary">
            Lista de Ordenes
          </h2>
          <Link to="/RegistroPedidos">
            <button
              type="button"
              class="btn btn-primary mt-2"
            >
              Crear Orden
            </button>
          </Link>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th># Servicio</th>
                  <th>Fecha</th>
                  <th>Ciudad Entrega</th>
                  <th>Dirrección Entrega</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2011/04/25</td>
                  <td>Edinburgh</td>
                  <td>Calle 4 # 23-122</td>
                  <td>Guardado</td>
                  <td>
                    <button className="btn btn-success">
                      <i class="fas fa-solid fa-pen"></i> Editar{" "}
                    </button>{" "}
                    {"  "}
                    <button className="btn btn-danger">
                      <i class="fas fa-solid fa-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2011/07/25</td>
                  <td>Tokyo</td>
                  <td>Calle 7# 46-64</td>
                  <td>Cancelado</td>
                  <td>
                    <button
                      className="btn btn-success" /*  onClick={()=>seleccionarPais(elemento, 'Editar')} */
                    >
                      <i class="fas fa-solid fa-pen"></i> Editar{" "}
                    </button>{" "}
                    {"  "}
                    <button
                      className="btn btn-danger" /*  onClick={()=>seleccionarPais(elemento, 'Eliminar')} */
                    >
                      <i class="fas fa-solid fa-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2009/01/12</td>
                  <td>San Francisco</td>
                  <td>Cra 30 # 25-40</td>
                  <td>Cumplido</td>
                  <td>
                    <button
                      className="btn btn-success" /*  onClick={()=>seleccionarPais(elemento, 'Editar')} */
                    >
                      <i class="fas fa-solid fa-pen"></i> Editar{" "}
                    </button>{" "}
                    {"  "}
                    <button
                      className="btn btn-danger" /*  onClick={()=>seleccionarPais(elemento, 'Eliminar')} */
                    >
                      <i class="fas fa-solid fa-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
