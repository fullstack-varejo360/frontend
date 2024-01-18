import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  text-align: center;
  max-width: 100%;
  background-color: var(--color-gray-200);
  border: 1.5px solid var(--color-gray-400);

  div {
    width: 100%;
    text-align: center;
  }
  .info {
    display: flex;
    align-items: center;
    div {
      border-left: 1px solid var(--color-gray-400);
      align-items: center;
    }
  }

  .btn {
    width: 65px;
    justify-content: space-around;
    display: flex;
  

    button {
      background-color: var(--color-gray-200);
      border-left: 1px solid var(--color-gray-400);
      
      padding: 5px;
    }
    button:hover {
      background-color: var(--color-blue-300);
    }
  }

  @media (min-width: 726px) {
  }
`;
