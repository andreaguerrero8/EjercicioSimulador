import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import { DiVitrina } from '../styled/StyledComponents'
import { url } from '../urls/Urls'

const Ropa = () => {

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

    useEffect(() => {
      getRopa()
    }, [])
    


    return (

        <DiVitrina className="container-fluid">

            {
                ropa.map(ropas => (
                    <Card style={{ width: '20%', margin:'5%' }} key={ropas.id}>
                        <Card.Img variant="top" src={ropas.foto} />
                        <Card.Body>
                            <Card.Title>{ropas.nombre}</Card.Title>
                            <Card.Title>$ {ropas.precio}</Card.Title>
                            <Card.Text>
                                {ropas.descripcion}
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )
                )
            }


        </DiVitrina>
    )
}

export default Ropa