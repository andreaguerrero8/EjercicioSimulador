import React, { useState } from 'react'
import axios from 'axios'
import { url } from '../urls/Urls'
import { fileUpload } from '../urls/fileUpload'
import { Button, Form } from 'react-bootstrap'
import { DivForm } from '../styled/StyledComponents'


const Formulario = () => {

    const stateInitialForm = {
        nombre: '',
        precio: '',
        foto: '',
        categoria: '',
        descripcion: ''
    }

    const [ropa, setRopa] = useState(stateInitialForm);

    const { nombre, precio, foto, categoria, descripcion } = ropa

    const handleChange = ({ target }) => {
        setRopa({
            ...ropa,
            [target.name]: target.value
        })
    }

    //subir claudinary
    const handleFileChanged = (e) => {
        console.log(e.target);
        const file = e.target.files[0]
        fileUpload(file)
            .then(resp => {
                ropa.foto = resp //traer y actualizar el valor de ropa con la imagen
            }).catch(error => {
                console.log(error);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        postData()
        setRopa(stateInitialForm)
    }

    const postData = () => {
        axios.post(url, ropa)
            .then(resp => console.log(resp.data))
            .catch(error => console.timeLog(error))
    }


  return (
    <DivForm>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Prenda</Form.Label>
                    <Form.Control  type="text" name="nombre" value={nombre} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" value={precio} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" value={descripcion} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" name="categoria" value={categoria} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" value={foto} onChange={handleFileChanged}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={() => handleChange}>
                    Enviar
                </Button>
            </Form>
    </DivForm>
  )
}

export default Formulario