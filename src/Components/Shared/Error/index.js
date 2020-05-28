import React from 'react';
import { Container } from './styles';

function Error({ messageError }) {

    return (
        messageError && <Container>
            <h5>
                {messageError.split('\n').map((error, index) => {
                    return <p key={index}>{error}</p>
                })}
            </h5>
        </Container>
    );
}

export default Error;