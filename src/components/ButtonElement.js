import styled from "styled-components";

export const Button = styled.button`
    text-decoration: none;
    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }
    border-radius: 50px;
    // background: ${({primary}) => (primary? '#01BF71' : '#010606')}
    background: #01BF71;
    white-space: nowrap;
    // padding: ${({big})=> (big? '14px 48px' : '12px 30px')}
    // color: ${({dark})=> (dark? '#010606' : '#fff')}
    // font-size: ${({fontBig})=> (fontBig? '20px' : '16px')}
    padding: 14px 48px;
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &.hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary? '#fff' : '#01BF71')}
    }
`