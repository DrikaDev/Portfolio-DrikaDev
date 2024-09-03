import styled from "styled-components";
import Background from "../../Assets/Background.1.jpg"

export const Container = styled.section`
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1{
        color: whitesmoke;
        font-size: 2rem;
        letter-spacing: 1rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 130vh;

        h1{
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
`
export const Home = styled.div`
    height: 3rem;
    width: 100%;

    img{
        width: 3rem;
    }
    
    a{
        align-items: center;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        height: 4rem;
        list-style: none;
        text-decoration: none;
        width: 10rem;

        &:hover{
            text-shadow: 0px 0px 20px wheat, 0px 0px 30px wheat, 0px 0px 40px wheat;
        }
    }
    
    @media only screen and (min-width: 360px) and (max-width: 800px){
        a{
            margin: 0 auto;
        }
    }
`
export const Box_AcademicFormation = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem;
    width: 100%;

    div{
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 20px white;
        width: 15rem;
        height: 13rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 1s all;

        &:hover{
            transform: scale(1.1);
        }
    }

    img{
        width: 8rem;
        margin-top: 1rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-wrap: wrap;

        div{
            height: 6rem;
            flex-direction: row;
            width: 21rem;
            margin-bottom: 10px;
            box-shadow: none;

            &:hover{
                transform: none;
            }
        }

        img{
            width: 6rem;
            margin-left: 10px;
        }
    }
`

export const Box_ExtracurricularCourses = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem;
    width: 100%;

    div{
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 20px white;
        width: 15rem;
        height: 13rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        transition: 1s all;

        &:hover{
            transform: scale(1.1);
        }
    }

    img{
        width: 8rem;
        margin-top: 1rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-wrap: wrap;

        div{
            height: 6rem;
            flex-direction: row;
            width: 21rem;
            margin-bottom: 10px;
            box-shadow: none;

            &:hover{
                transform: none;
            }
        }

        img{
            width: 6rem;
        }
    }
`

export const Paragrafo = styled.p`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        color: black;
        text-align: center;
        margin-top: 0.5rem;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 5rem;

        p{
            display: flex;
            justify-content: center;
            margin-top: 0;
        }
    }         
`
    