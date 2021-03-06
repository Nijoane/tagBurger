import styled from 'styled-components';

export const BodyMenu = styled.div`
    margin-left: -400px;
`;

export const MenuPedidos = styled.div`
    border-radius: 30px;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  11px 11px 57px #999590,
            -11px -11px 57px #ffffff;
    height: 390px;     
    width: 450px;
    overflow: auto;
    padding: 20px;
    @media screen and (max-width: 1024px) {
        height: 510px;     
        width: 420px;
        margin-left: -50px;
    }
    @media screen and (min-width:321px) and (max-width:768px) {
        height: 700px;     
        width:350px;
        padding: 20px;
        margin-left: -40px;
    }
`;

export const MenuOrders = styled.div`
    border-radius: 30px;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  11px 11px 57px #999590,
            -11px -11px 57px #ffffff;
    height: 400px;     
    width: 480px;
    overflow: auto;
    padding: 20px;
    margin-left: 100px;
    margin-right: -50px;
    margin-top: 20px;
    
    @media screen and (min-width:321px) and (max-width:768px) {
        height: 700px;     
        width:300px;
        margin-right: 250px;
        margin-left: -100px;
        }

    @media screen and (max-width: 1024px) {
    height: 510px;   
    width: 420px;
    margin-right: 120px;
    margin-left: -10px;
    }
    

`;

export const BtnAdition = styled.button`
    background: #F57F17;
    border: none;
    border-radius: 0 4px 4px 0;
    color: black;
    font-size: 24px;
    width: 60px;
    height: 70px;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow:5px 5px 5px 5px #a8a39e;
    &:active {
        background:#e0700d;
        color: #fff
        position: relative;
        top: 5px;
        box-shadow: none;
    }
   
    @media screen and (min-width:321px) and (max-width:768px) {
        height: 100px;  
    }
    @media screen and (max-width: 1024px) {
        height: 100px;  
        width: 80px;   
    }
`;

export const ButtonMenu = styled.button`
    background: #F57F17;
    border: none;
    border-radius: 10px;
    color: black;
    width: 200px;
    height: 60px;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  10px 10px 20px #828284,
    5px 5px 5px 5px #dbd4ce,
    -10px -10px 20px #ffffff;
    margin-bottom: 20px;
    border: none;
    outline: none;
    margin-left: 15px;
    margin-top: 20px;
    cursor: pointer;
    font-family: Roboto Slab;
    font-size: 15px;
    font-weight: 400;

    &:active {
        background:#dbd4ce;
        position: relative;
        top: 5px;
        box-shadow: none;
    }
    @media screen and (min-width:321px) and (max-width:768px) {
    width: 115px;
    height: 80px;
    }

    @media screen and (max-width: 1024px) {
    width: 150px;
    height: 70px;
    }
`;

export const DivButton = styled.div`
    width:450px;
`;

export const ProductsCardapio = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F3ECE5;
    box-shadow: 0 2px 6px rgba(88,116,159,.15);
    margin-left: 80px;
    padding: 20px;
    border-radius: 4px;
    width: 400px;
    height: 230px;
    margin-top: 3%;
    border-radius: 10px;
    overflow: auto;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  11px 11px 57px #999590,
                -11px -11px 57px #ffffff;
    
    @media screen and (max-width: 1024px) {
    width: 380px;
    height: 100px;
    }
    @media screen and (max-width: 768px) {
    width: 250px;
                     -11px -11px 57px #ffffff;
    @media screen and (min-width:321px) and (max-width:768px) {
    width: 250px;
    height: 100px;
    }
    @media screen and (max-width: 1024px) {
    width: 380px;
    height: 100px;
    }
`;

export const Products = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F3ECE5;
    box-shadow: 0 2px 6px rgba(88,116,159,.15);
    border-radius: 4px;
    width: 400px;
    height: 70px;
    margin-top: 3%;
    border-radius: 10px;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  11px 11px 57px #999590,
                -11px -11px 57px #ffffff;
    
    @media screen and (max-width: 1024px) {
    width: 380px;
    height: 100px;
    }
    @media screen and (max-width: 768px) {
    width: 250px;
                -11px -11px 57px #ffffff;
    @media screen and (min-width:321px) and (max-width:768px) {
    width: 250px;
    height: 100px;
    }
    @media screen and (max-width: 1024px) {
    width: 380px;
    height: 100px;
    }
`;

export const DivMenus = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 300px;
    margin-top: -300px:
`;

export const LogoHall = styled.img`
    margin-left: -50px;
    margin-top: 10px;
    @media screen and (min-width:321px) and (max-width:768px) {
        margin-left: 250px;
    }
    @media screen and (max-width: 1024px) {
        margin-left: 270px;
`;

export const Textarea = styled.textarea`
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.5),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.9);
    border: none;
    outline: none;
    margin-top: 50px;
    padding: 20px;
    border-radius: 10px;
    color:  #E65100;
    @media screen and (min-width:321px) and (max-width:768px) {
        width:250px;
    }
    @media screen and (max-width: 1024px) {
        width: 370px;
    }
`;

export const Name = styled.p`
    padding-right: 50px;
    font-family: Roboto Slab;
    font-size: 15px;
`;

export const Complement = styled.p`
    padding-right: 20px;
    color: #E65100;
    font-family: Roboto Slab;
    font-size: 15px;
`;

export const SpamMenuItem = styled.div`
    padding: 15px;
`;

export const SpanFlavor = styled.span`
    display:flex;
    justify-content: space-between;
    width: 160px;
`;

export const SpanName = styled.span`
    display:flex;
    justify-content: space-between;
    width: 270px;
    @media screen and (min-width:321px) and (max-width:768px) {
    width: 100px;
    }
    @media screen and (max-width: 1024px) {
        width: 200px;
    }
`;

export const SpamQtd = styled.span`
    display:flex;
    justify-content: space-between;
    width: 420px;
    padding: 20px;
    color:  #E65100;
    @media screen and (max-width: 1024px) {   
        width: 380px;
    }
    @media screen and (min-width:321px) and (max-width:768px) {
        width: 260px;
    }
`;

export const DivOrders= styled.span`
    display:flex;
    justify-content: space-between;
    width: 420px;
`;

export const ProductsOrders = styled.div`
    background: #F3ECE5;
    box-shadow: 0 2px 6px rgba(88,116,159,.15);
    border-radius: 4px;
    width: 435px;
    height: 70px;
    margin-top: 3%;
    border-radius: 10px;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  11px 11px 57px #999590,
                -11px -11px 57px #ffffff;
    padding: 15px;
    @media screen and (max-width: 1024px) {
        width: 380px;
        height: 90px;
    }
    @media screen and (min-width:321px) and (max-width:768px) {
        width: 255px;
        height: 90px;
    }
`;

export const SpanNameOrders = styled.span`
    display:flex;
    justify-content: space-between;
    width: 400px;
    @media screen and (max-width: 1024px) {
        width: 350px;
    }
    @media screen and (min-width:321px) and (max-width:768px) {
        width: 230px;
    }
`;

export const DivTotal = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 430px;
    padding:15px;
    @media screen and (max-width: 1024px) {
    margin-left:-65px
    }
    @media screen and (min-width:321px) and (max-width:768px) {
        margin-left:-160px
        }
`;

export const Total = styled.span`
    padding-right: 20px;
    padding: 10px;
    font-family: Roboto Slab;
`;

export const Soma = styled.span`
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.5),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.9);
    height:35px;
    width: 100px;
    padding: 10px;
    text-align:center;
    border-radius: 10px;
    color:  #E65100;
    font-family: Roboto Slab;
    font-weight: bold;
`;

export const Itens = styled.p`
    font-family: Roboto Slab;
`;

export const ButtonPedidos = styled.button`
    border: none;
    outline: none;
    background: #F57F17;
    text-align: center;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    margin-left:700px;
    border-radius: 0 0 10px 10px;
    height: 50px;
    width: 200px;
    box-shadow : 9px 9px 19px #909092, -9px -9px 19px #fff;

    &:active {
        background:#e0700d;
        color: #fff
        position: relative;
        box-shadow: none;
    }
    @media screen and (max-width: 1024px) {
        margin-left: 950px;
        height: 80px;
    }
    @media screen and (min-width:321px) and (max-width:768px)  {
        margin-left:750px;
    }
`;

export const LabelClient = styled.label`
    height:35px;
    width: 100px;
    padding: 10px;
    text-align:center;
    border-radius: 10px;
    font-family: Roboto Slab;
`;

export const InputTable = styled.input`
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.5),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.9);
    height:35px;
    width: 100px;
    padding: 10px;
    text-align:center;
    border-radius: 10px;
    color:  #E65100;
    font-family: Roboto Slab;
    border: none;
    outline: none;
    font-size: 15px;
`;

export const InputClient = styled.input`
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.5),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.9);
    height:35px;
    width: 180px;
    padding: 10px;
    text-align:center;
    border-radius: 10px;
    color:  #E65100;
    font-family: Roboto Slab;
    border: none;
    outline: none;
    font-size: 15px;
`;

export const ButtonSend  = styled.button`
    border: none;
    outline: none;
    background: #E65100;
    margin-left: 600px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    margin-top: -50px;
    position: absolute;
    height: 60px;
    width: 200px;
    box-shadow : 9px 9px 19px #909092, -9px -9px 19px #fff;

    &:active {
        background:#d14a00;
        color: #fff,
        position: relative;
        height: 55px;
        box-shadow: none;
    }
    @media screen and (max-width: 1024px) {
        margin-left: 950px;
        height: 80px;
    }
    @media screen and (min-width:321px) and (max-width:768px) {
        margin-left:750px;
    }
`;

export const ButtonLogout  = styled.button`
    border: none;
    outline: none;
    background: transparent;
    position: absolute;
    margin-top: 20px;
    margin-left: 650px;
    cursor: pointer;
`;

export const ButtonSendCardapio  = styled.button`
    border: none;
    outline: none;
    background: #E65100;
    text-align: center;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    height: 190px;
    width: 100px;
    box-shadow : 9px 9px 19px #909092, -9px -9px 19px #fff;
`;

export const MenusCardapio = styled.h2`
    background: #F57F17;
    border: none;
    border-radius: 10px;
    color: black;
    width: 200px;
    height: 60px;
    background: linear-gradient(145deg, #fffdf5, #dbd4ce);
    box-shadow:  10px 10px 20px #828284,
    5px 5px 5px 5px #dbd4ce,
    -10px -10px 20px #ffffff;
    margin-bottom: 20px;
    border: none;
    outline: none;
    margin-top: 20px;
    font-family: Roboto Slab;
    margin-left: 180px;
    font-size: 16px;
    font-weight: 400;
    padding: 20px;
    padding-left: 30px;
    `;
    
    export const LogoHallOrders = styled.img`
    margin-left: 580px;
    margin-top: 10px;
`;
    
export const SpanOrders = styled.span`
    height:10px;
    width: 50x;
    color:  #E65100;
    font-family: Roboto Slab;
    font-size: 15px;
`;
