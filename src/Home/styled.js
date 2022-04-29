import styled from "styled-components";

export const ContainerBody = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    img{
        width: 400px;
        height: 280px;
    }
`
export const ContainerButton = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 70px;
`

export const ButtonPet = styled.div`

    button{
        width: 150px;
        height: 130px;
        background-color: #54a494;
        border-radius: 10px;
        box-shadow: 5px 0px 0px 0px rgba(0, 0, 0, 0.2)
    }

    img{
        height: 130px;
    }
`

export const ContainerFooter = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: red;
    height: 130px;
    position: absoluteS;
    bottom: 0;

`