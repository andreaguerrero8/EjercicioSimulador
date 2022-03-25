import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from '../urls/Urls'
import { DivTabla } from '../styled/StyledComponents';

const Tabla = () => {

    const [ropa, setRopa] = useState([])

    const getRopa = () => {
        axios.get(url)
            .then((response) => {
                setRopa(response.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteRopa = (id) => {
        axios.delete(url + id)
            .then(respuesta => {
                getRopa()
                console.log(respuesta);
            }).catch(error => {
                console.log(error);

            })
    }

    useEffect(() => {
      getRopa()
    }, [])


    return (
        <DivTabla>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Prendas</th>
                        <th>Precio Prenda</th>
                        <th>Categoria</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                    </tr>
                </thead>

                <tbody>

                    {
                         ropa.map(ropas => (

                            <tr key={ropas.id}>
                                <td>{ropas.nombre}</td>
                                <td>{ropas.precio}</td>
                                <td>{ropas.categoria}</td>
                                <td>{ropas.descripcion}</td>
                                <td><img src={ropas.foto} width="40px" height="30px"></img></td>
                                {/* importante colocarle la funcion flecha para que sea soloc uando se espicha */}
                                <td><button
                                    onClick={() => deleteRopa(ropas.id)}>
                                    Eliminar</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </DivTabla>
    )
}

export default Tabla