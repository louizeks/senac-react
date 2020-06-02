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

    h5{
        color:red;
    } 
`;

export const Table = styled.table`

    color: #fff;    
    text-align:center;    
    font-family: 'Ubuntu', sans-serif;

    td {
        text-align:center;    
        height: 30px;        
    }
    

    tr {
        background-color: #9d44ff;
    }
    tr:nth-child(even) {
          background-color: #f2f2f2;
          color:#432473;

          button {
              background-color:#8018f3!important;              
          }
    }

    thead 
    {    
        td {

            background-color:#ff8044;                  
        }
    }
    
`;

export const Button = styled.button`
    
    text-align:center;    
    font-size:20px;
    height: 50x;
    width:100px;
    outline:none;    
    border-radius: 10px;    
    border: 1px solid #888;    
    display:block;
    margin:auto;
    color:#ff8044;
    background: #8018f3;    
    border-radius: 5px;    
    border: 1px solid #888;
    cursor: pointer;
    :hover {
        background: #9d44ff;
    }
`;