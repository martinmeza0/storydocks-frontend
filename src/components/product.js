import React, {useState} from 'react';
import '../css/Modal.css';
import Modal from './Modal';

const Products = (props) => {
    const {title,img ,price, description} = props 
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    return (
        <>
            <div className="product" onClick={() => setModalIsOpen(true)}>
              <img src={img} alt=""/>
              <div className="info">
                  <h3>{title}</h3>
                  <p className="price">{price}</p>
              </div>
            </div>
            <Modal open={modalIsOpen} >
                <div className="overlay" onClick={() => setModalIsOpen(false)}>
                    <article className='Modal' onClick={(e) => e.stopPropagation()}>
                        <header className="Modal__header">
                            <h3 className="Modal__title">{title}</h3>
                            <button onClick={() => setModalIsOpen(false)}>X</button>
                        </header>
                        <section className="Modal__body">
                            <img src={img} alt="" className="Modal__img zoom"/>  
                            <div className="Modal__content">
                                <h4>About this product</h4>
                                <p className="Modal__description">{description}</p>
                                <hr/>
                                <p className="Modal__price">{price} </p>
                            </div>
                        </section>
                    </article>
                </div>
            </Modal>
        </>
    )
}

export default Products