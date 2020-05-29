import React, { useState, useCallback } from 'react';
import { Container, Form, Input, TextArea, Button } from './styles';
import DisplayError from '../../Shared/Error';
import { currencyFormat } from '../../../Helpers/functions';

function Add() {

    const initialValue = {
        sku: "",
        name: "",
        description: "",
        price: "",
        quantity: "",
        image: ""
    }

    const [product, setProduct] = useState(initialValue);
    const [products, setProducts] = useState([]);
    const [messageError, setMessageError] = useState(null);

    const validation = useCallback(() => {

        let fieldsError = [];
        setMessageError(null);

        if (!product.sku) {
            fieldsError.push("SKU");
        }

        if (!product.name) {
            fieldsError.push("Nome");
        }

        if (!product.description) {
            fieldsError.push("Descrição");
        }

        if (!product.quantity) {
            fieldsError.push("Quantidade");
        }

        if (!product.price) {
            fieldsError.push("Preço");
        }

        if (products.find(p => p.sku === product.sku)) {

            setMessageError("Sku cadastrado");
            return false;
        }

        if (fieldsError.length > 0) {

            let msg = "";

            fieldsError.map(m => {
                msg = `${msg}\n${m} `
            });

            setMessageError(`Campos obrigatórios não preenchidos: ${msg}`);
            return false;
        }

        return true;

    }, [product, products]);

    const handleChange = useCallback((e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    }, [product]);

    const handleKeyUp = useCallback((e) => {
        e.target.value = currencyFormat(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (!validation())
            return;

        const prods = [...products, product];

        localStorage.setItem("products", JSON.stringify(prods));

        setProducts(prods);
        setProduct(initialValue);

        console.log(product);

    }, [product, products, initialValue, validation]);

    return (

        <Container>

            <h1>Cadastro</h1>

            <DisplayError messageError={messageError}></DisplayError>

            <Form onSubmit={handleSubmit}>

                <Input
                    onChange={handleChange}
                    placeholder="SKU"
                    name="sku" v
                    value={product.sku} />

                <Input
                    onChange={handleChange}
                    placeholder="Nome do Produto"
                    name="name"
                    value={product.name} />

                <TextArea
                    onChange={handleChange}
                    placeholder="Descrição"
                    name="description"
                    value={product.description} />

                <Input
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    maxLength="14"
                    placeholder="Preço de Venda"
                    name="price"
                    value={product.price} />

                <Input type="number"
                    onChange={handleChange}
                    placeholder="Quantidade"
                    name="quantity"
                    value={product.quantity} />

                <Input
                    onChange={handleChange}
                    placeholder="Imagem"
                    name="image"
                    value={product.image} />

                <Button>Cadastrar</Button>
            </Form>



        </Container>

    );
}

export default Add;