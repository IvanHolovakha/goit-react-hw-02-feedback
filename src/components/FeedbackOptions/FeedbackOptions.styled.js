import styled from "styled-components";

export const ButtonSection = styled.div`
display: flex;
justify-content: center;
`

export const Button = styled.button`
border-radius: 4px;
:hover {
    background-color: grey;
}
:not(:last-child) {
    margin-right: 10px;
}
`