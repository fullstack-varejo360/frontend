import styled from "styled-components";

export const StyledCreateProductForm = styled.div`
  width: 100%;
  padding: 20px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 5;
    section {
      width: 100%;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        input{
          width: 100%;
          padding: 5px;
          border: 2px solid var(--color-gray-400);
          border-radius: 6px;
        }
        input::placeholder{
          padding: 5px;
        }
      }
    }
    button{
        margin-top: 10px;
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

`;
