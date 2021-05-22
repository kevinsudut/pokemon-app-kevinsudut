import styled from '@emotion/styled';

const style = {
    Container: styled.div `
        padding-left: 100px;
        padding-right: 100px;
        margin-top: 3rem;
        margin-bottom: 3rem;
        @media (max-width: 600px) {
            padding-left: 50px;
            padding-right: 50px;
        }
    `,
    Header: styled.header `
        height: 100px;
        background: white;
        border-bottom: 1px solid lightgray;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 100px;
        padding-right: 100px;
        position: relative;
        @media (max-width: 600px) {
            padding-left: 50px;
            padding-right: 50px;
        }
    `,
    RightPosition: styled.div `
        float: right;
        font-weight: bold;
    `,
    Cursor: styled.span `
        color: #777777;
        padding-right: 3px;
        position: relative;
        margin-right: 5px;
        &:after {
        bottom: 0;
        right: 0;
        position: absolute;
        content: "";
        width: 2px;
        height: 18px;
        background: #777777;
        animation-name: blink;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        }
        @keyframes blink {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    `,
    Name: styled.span `
        color: #00a9e2;
        text-transform: uppercase;
    `,
    Navbar: styled.nav`
        text-align:center;
        width: 100%;
        background: white;
        border-bottom: 1px solid lightgray;
        box-shadow: 0px 1px 1px 1px #ddd;
        position: sticky;
        top: 0;
        z-index: 1020;
        padding-left: 100px;
        padding-right: 100px;
        @media (max-width: 600px) {
            padding-left: 50px;
            padding-right: 50px;
        }
    `,
    Menu: styled.span`
        display: inline-block;
        position: relative;
        cursor: pointer;
        user-select: none;
        z-index: 10;
        width: 150px;
    `,
    MenuItem: styled.span`
        padding: 10px 15px;
        color: #777777;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        font-weight: bold;
        &:hover {
            color: #00a9e2;
            text-decoration: none;
        }
    `,
    FontXLarge: styled.div`
        font-size: x-large;
    `,
    Main: styled.main`
        margin: 0 auto;
        text-align: center;
    `,
    Spinner: styled.div`
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3498db;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: inline-block;
        margin: 10px;
        animation: spin 2s linear infinite;
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `,
    PageTitle: styled.div`
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 20px;
    `,
    CenterContent: styled.div`
        margin: 0 auto;
        text-align: center;
    `,
    PokemonList: styled.div`
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 25px;
        width: 18%;
        text-align: center;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 10px;
        @media (max-width: 1400px) {
            width: 23%;
        }
        @media (max-width: 1200px) {
            width: 30%;
        }
        @media (max-width: 1000px) {
            width: 45%;
        }
        @media (max-width: 760px) {
            width: 90%;
        }
    `,
    PokemonImageContainer: styled.div`
        position: relative;
        background: #F2F2F2;
        border-radius: 5px;
        width: 100%;
        height: 150px;
        &:hover {
            cursor: pointer;
        }
    `,
    PokemonImage: styled.img`
        width: 100px;
        height: 100px;
        top: 15px;
        position: relative;
        transform: scale(1.2);
    `,
    Badge: styled.div`
        position: absolute;
        left: 0px;
        background-color: #b8ffb8;
        padding: 10px;
        color: black;
        font-size: 16pt;
        display: inline-block;
        height: 100%;
    `,
    PokemonInformation: styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
    `,
    Pagination: styled.ul`
        display: inline-block;
        padding: 0;
    `,
    PaginationItem: styled.li`
        color: black;
        float: left;
        padding: 8px 16px;
        list-style-type: none;
        cursor: pointer;
        border: 1px solid #dee2e6;
        width: 150px;
        &:hover {
            background-color: #eee;
        }
    `,
    PokemonImageContainerDetail: styled.div`
        position: relative;
        background: #F2F2F2;
        border-radius: 5px;
        width: 25%;
        display: inline-block;
        float: left;
        height: 200px;
        white-space: nowrap;
        margin-bottom: 20px;
        @media (max-width: 1500px) {
            width: 100%;
        }
    `,
    PokemonImageDetail: styled.img`
        width: 100px;
        height: 100px;
        top: 45px;
        position: relative;
        transform: scale(1.5);
    `,
    PokemonDetailTitle: styled.div`
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 20px;
    `,
    PokemonDetailContainer: styled.div`
        display: inline-block;
        position: relative;
        width: 70%;
        line-height: 50px;
        text-align: center;
        margin-bottom: 20px;
        @media (max-width: 1500px) {
            width: 100%;
        }
    `,
    PokemonDetailList: styled.div`
        background-color: #f0f0f0;
        border-radius: 10px;
        color: black;
        font-size: 16px;
        width: 200px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
        display: inline-block;
        text-transform: uppercase;
        @media (max-width: 500px) {
            width: 70%;
            margin-left: 0px;
            margin-right: 0px;
        }
    `,
    Button: styled.button`
        width: 100%;
        background: #00a9e2;
        padding: 7px;
        border: 0;
        color: white;
        transition: background 0.1s ease-out;
        margin-top: 20px;
        margin-bottom: 20px;
        &:hover {
            box-shadow: 0;
            background: #0096c9;
        }
        @media (max-width: 300px) {
            width: 100%;
        }
    `,
    ButtonRelease: styled.button`
        width: 100%;
        background: #dc3545;
        padding: 7px;
        border: 0;
        color: white;
        transition: background 0.1s ease-out;
        &:hover {
            box-shadow: 0;
            background: #c82333;
        }
    `,
    Input: styled.input`
        width: 100%;
        height: auto;
        padding: 7px 10px 7px 10px;
        box-shadow: none;
        border: 1px solid #bbbbbb;
        transition: border-color 0.1s ease-out;
    `,
    AlertDanger: styled.div`
        padding: 20px;
        background-color: #f44336;
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
    `,
    AlertInfo: styled.div`
        padding: 20px;
        background-color: #2196F3;
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
    `,
    AlertSuccess: styled.div`
        padding: 20px;
        background-color: #04AA6D;
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
    `
}

export default style