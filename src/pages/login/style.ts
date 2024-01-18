import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  overflow-y: auto;
  padding: 20px;
  max-width: 460px;
  margin: 50px auto;
  h1{
    text-align: center;
    font-size: 44px;
  }
  h2{
    font-size: 28px;
  }
  form {
    display: flex;
    flex-direction: column;
    label{
        font-size: 18px;
    }
    input{
        padding: 5px;
    }
    button{
        margin-top: 20px;
        height: 30px;
        background-color: var(--color-blue-300);
        color: var(--color-gray-100);
    }
    button:hover{
        background-color: var(--color-blue-900);
    }
    p{
        font-size: 12px;
        color: red;
    }
}
div{
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
    span{
        margin-left: 5px;
        color: var(--color-blue-900);
        text-decoration: underline;
        cursor: pointer;
    }
}
`;
