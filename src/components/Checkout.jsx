import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './Checkout.css'
import FormInput from './FormInput'
import Loading from './Loading'

function Checkout() {
    const {cart, obtenerPrecioTotal, vaciarCarrito} = useContext(CartContext)

    
    
    const [nombreUsuario, setNombreUsuario] = useState({valor:'', valido: null})
    const [apellidoUsuario, setApellidoUsuario] = useState({valor:'', valido: null})
    const [emailUsuario, setEmailUsuario] = useState({valor:'', valido: null})
    const [celularUsuario, setCelularUsuario] = useState({valor:'', valido: null})

    const [formularioValido, setFormularioValido] = useState(null)
    const [idCompra, setIdCompra] = useState('')
    
    const [mostrarForm, setMostrarForm] = useState(true)
    
    const colleccionOrdenes = collection(getFirestore(), "ordenes")

    useEffect(() => {
        validarFormulario()
        }, [
            nombreUsuario,
            apellidoUsuario,
            emailUsuario,
            celularUsuario
        ]
    )
    

    const validarFormulario = ()=> {
        (nombreUsuario.valido && apellidoUsuario.valido && emailUsuario.valido && celularUsuario.valido) ? setFormularioValido(true) : setFormularioValido(false)
    }
    
    const enviar = ()=> {
        if(formularioValido) {
            setNombreUsuario({valor:'', valido: null})
            setApellidoUsuario({valor:'', valido: null})
            setEmailUsuario({valor:'', valido: null})
            setCelularUsuario({valor:'', valido: null})

            const datosDeLaOrden = {
                comprador: {nombre: nombreUsuario.valor, apellido: apellidoUsuario.valor, email: emailUsuario.valor, cel: celularUsuario.valor},
                productos: cart,
                precioTotal: obtenerPrecioTotal(),
                fechaDeCompra: (new Date())
            }
    
            vaciarCarrito()    
            
            addDoc(colleccionOrdenes, datosDeLaOrden)
            .then(({id})=> {
                setIdCompra(id)
            })
            setMostrarForm(false)
        }     
    }

    if(mostrarForm) {
        return (
            <div className='contenedor-principal'>
                <div className='form-container sombra-contenedor'>
                  <h5>
                    <Link to={"/cart"} className="text-body d-flex justify-content-start flex-row align-items-center aling-content-center">
                        <svg className="bi bi-arrow-left-circle icono-volver" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                        </svg>
                        Volver a mi carrito
                    </Link>
                  </h5>
                  <hr />
                  <h2>Complete el formulario para terminar su compra</h2>
                  <form action="">
                    <FormInput
                        nombreCampo={"nombre"}
                        tipoCampo={"text"}
                        placeHolder={"Guille"}
                        valor={nombreUsuario}
                        setValor={setNombreUsuario}
                        leyendaError={"El nombre s??lo puede tener letras y espacios, pueden llevar acentos"}
                        expresionRegular={/^[a-zA-Z??-??\s]{1,40}$/}
                    />
                    <FormInput
                        nombreCampo={"apellido"}
                        tipoCampo={"text"}
                        placeHolder={"Perez"}
                        valor={apellidoUsuario}
                        setValor={setApellidoUsuario}
                        leyendaError={"El apellido s??lo puede tener letras y espacios, pueden llevar acentos"}
                        expresionRegular={/^[a-zA-Z??-??\s]{1,40}$/}
                    />
                    <FormInput
                        nombreCampo={"mail"}
                        tipoCampo={"email"}
                        placeHolder={"guille@guille.guille"}
                        valor={emailUsuario}
                        setValor={setEmailUsuario}
                        leyendaError={"Formato de mail incorrecto"}
                        expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
                    />
                    <FormInput
                        nombreCampo={"n??mero de celular"}
                        tipoCampo={"tel"}
                        placeHolder={"1112345678"}
                        valor={celularUsuario}
                        setValor={setCelularUsuario}
                        leyendaError={"Debe tener entre 8 y 14 car??cteres num??ricos"}
                        expresionRegular={/^\d{8,14}$/}
                    />

                    <div>
                        <p className="mensaje-error">
                            {
                                (formularioValido === false) && "Por favor rellena el formulario correctamente"
                            }
                        </p>
                    </div>
                                      
                      <div>
                          <button 
                              className={formularioValido === null ? "btn btn-info" : formularioValido === true ? "btn btn-primary" : "btn btn-danger"}
                              onClick={enviar}
                          >Enviar pedido</button>
                      </div>
                  </form>
                </div>
            </div>
        )
    } else {
        return (            
            <div className="contenedor-principal">
                <div className='form-container sombra-contenedor'>
                    <h5>
                        <Link to={"/"} className="text-body d-flex justify-content-start flex-row align-items-center aling-content-center">
                            <svg className="bi bi-arrow-left-circle icono-volver" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                            </svg>
                            Volver al inicio
                        </Link>
                    </h5>
                    <hr />
                    <h2>Su pedido fue realizado exitosamente</h2>
                    <div className='id-compra-container'>
                        <p className='id-info'>En los pr??ximos d??as nos comunicaremos para confirmar su pedido. <br/>Gracias por confiar en nosotros.</p>
                        {idCompra.length > 0 ? <p className='id-info'>Id de su pedido: <span className='id-display'>{idCompra}</span></p> : <Loading />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout