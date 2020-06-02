import React, { useState, useEffect, useCallback } from 'react';
import { Container, Title, Span, Input, Button } from './styles';
import api from '../../../Services/api';
function Update({ product, callBack }) {

    const initialValue = {
        sku: "",
        name: "",
        description: "",
        price: "",
        quantity: "",
        image: ""
    }

    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(initialValue);

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("products")));

        setCurrentProduct(product);

    }, [product]);

    const handleSubmit = useCallback(() => {

        let productId = currentProduct.id;


        console.log(currentProduct);


        api.put(`/api/products/${productId}`, currentProduct)
            .then((response) => {
                callBack({ type: "editSuccess" });
            })
            .catch((error) => console.log(error));


    }, [callBack, products, currentProduct]);

    const handleChange = useCallback((e) => {

        setCurrentProduct({
            ...currentProduct,
            [e.target.name]: e.target.value,
        })

    }, [currentProduct]);


    return (

        <Container>
            <Title>Edição SKU: {currentProduct.sku || ""} </Title>
            <Span>Nome</Span>
            <Input onChange={handleChange} name="name" type="text" value={currentProduct.name || ""} />

            <Span>Descrição</Span>
            <Input onChange={handleChange} name="description" type="text" value={currentProduct.description || ""} />

            <Button type="button" className="button"
                onClick={handleSubmit}>Salvar alteração</Button>
            <Button type="button" className="button" onClick={() => callBack({ type: "cancelEdit" })}>Cancelar</Button>
        </Container>
    );
}

export default Update;