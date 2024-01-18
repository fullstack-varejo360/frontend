import styled from "styled-components";

export const StyledCreateProductForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    z-index: 5;
    section {
      display: flex;
      div {
        display: flex;
        flex-direction: column;
      }
    }
    button{
      
      /* pointer-events: none; */
    }
  }

  @media (min-width: 500px) {
  }
`;
