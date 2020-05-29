import React, { useState, useEffect, useCallback } from 'react';

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



        console.log(currentProduct.name);

        setProducts(
            ...products,
            currentProduct
        );

        products.splice(products.findIndex((p) => p.sku === currentProduct.sku), 1);

        const prods = [...products, currentProduct];

        localStorage.setItem("products", JSON.stringify(prods));

        callBack({ type: "editSuccess" });

    }, [callBack, products, currentProduct]);

    const handleChange = useCallback((e) => {

        setCurrentProduct({
            ...currentProduct,
            [e.target.name]: e.target.value,
        })

    }, [currentProduct]);


    return (
        <div className="modal">
            <span>SKU</span>
            <input type="text" defaultValue={currentProduct.sku || ""} readOnly />

            <span>Nome</span>
            <input onChange={handleChange} name="name" type="text" value={currentProduct.name || ""} />

            <span>Descrição</span>
            <input onChange={handleChange} name="description" type="text" value={currentProduct.description || ""} />

            <button type="button" className="button"
                onClick={handleSubmit}>Salvar alteração</button>
            <button type="button" className="button" onClick={() => callBack({ type: "cancelEdit" })}>Cancelar</button>
        </div>
    );
}

export default Update;