import React, { useState, useEffect, useCallback } from 'react';
import Update from '../Update';
import { Container, Table, Button } from './styles';
import api from '../../../Services/api';


function List() {

    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);

    const listProducts = useCallback(() => {

        api.get("/api/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => console.log(error));
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

        <Container>


            {!currentProduct &&
                <Container>
                    <h1>Listagem de produtos</h1>

                    <Table>

                        <thead>
                            <tr><td>SKU</td>
                                <td>Nome</td>
                                <td>Preço</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>

                            {products && products.map(p => (
                                <tr key={p.id}>
                                    <td>{p.sku}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <Button
                                            onClick={() => setCurrentProduct(p)}
                                        >Detalhes</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Container>
            }

            {currentProduct && <Update product={currentProduct}
                callBack={callBackEdit} />}

        </Container>


    );
}

export default List;