import React, { useState, useEffect, useCallback } from 'react';
import Update from '../Update';

function List() {

    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);

    const listProducts = useCallback(() => {
        setProducts(JSON.parse(localStorage.getItem("products")));
    }, []);

    useEffect(() => {
        listProducts();
    }, []);


    const callBackEdit = (data) => {
        const { type } = data;

        if (type == "editSuccess") {
            listProducts();
            setCurrentProduct(null);
        }
        else if (type == "cancelEdit") {
            if (data)
                setCurrentProduct(null);
        }
    }

    return (

        <div>
            <h3>Listagem</h3>

            <table>
                <thead>
                    <tr><td>SKU</td>
                        <td>Nome</td>
                        <td>Preço</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>

                    {products.map(p => (
                        <tr key={p.sku}>
                            <td>{p.sku}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <button
                                    onClick={() => setCurrentProduct(p)}
                                >Visualizar detalhes</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {currentProduct && <Update product={currentProduct}
                callBack={callBackEdit} />}

        </div>
    );
}

export default List;