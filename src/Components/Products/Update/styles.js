import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    place-content: center;
    display:flex;
    border-color: #9d44ff;    
    flex-direction: column;
    background-color:#432473;
    h1 {
        text-align:center;
        color: #ff8044;
    }
`;

export const Title = styled.h1`
        text-align:center;
        color: #ff8044;
`;

export const Span = styled.span`
        text-align:left;
        color: #ff8044;
        padding:10px;
`;


export const Form = styled.form`    
    max-width: 100%;
    display:flex;
    flex-direction: column;
    padding:10px;    
`;

export const Input = styled.input`
     padding:15px;
     margin:10px 0px 10px 0px;
     display:flex;
     flex-direction: row;
     border: 1px solid #f9811b;
     :focus {
         border:1px solid #9d44ff;
         outline: none;
     }    
`;

export const Button = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-size:20px;
    height: 40px;
    outline:none;
    color:#ff8044;
    background: #8018f3;    
    border-radius: 5px;
    margin: 10px;
    border: 1px solid #888;
    cursor: pointer;
    :hover {
        background: #9d44ff;
    }
`;