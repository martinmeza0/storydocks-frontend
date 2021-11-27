import React, {useState} from 'react';
import Modal from './Modal';

const Products = (props) => {
    const {img, title, price, description} = props 
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    return (
        <>
            <div className="proyecto">
                <img src={img} alt="" onClick={() => setModalIsOpen(true)}/>
            </div>
            <Modal open={modalIsOpen} >
                <div className="overlay" onClick={() => setModalIsOpen(false)}>
                    <div className='Modal' onClick={(e) => e.stopPropagation()}>
                        <section className="header">
                            <h3 className="titulo">{title}</h3>
                            <span className="borrar material-icons" onClick={() => setModalIsOpen(false)}>close</span>
                        </section>
                        <section className="body">
                            <img src={img} alt=""/>  
                            <p className="descripcion">{description}</p>
                            <p className="categorias">{price} </p>

                        </section>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Products