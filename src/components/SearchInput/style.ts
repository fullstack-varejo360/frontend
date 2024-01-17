import styled from "styled-components";

export const StyledSearchInput = styled.div`
width: 100%;
padding: 0;

  form {
    display: flex;
    align-items: center;
    width: 100%;

    input {
      width: 100%;
      background-color: var(--color-gray-2);
      color: rgba(134, 142, 150, 1);
      border-radius: 4px;
      height: 40px;
      padding: 0 10px;
      font-size: 0.95rem;
    }

    input::placeholder {
      color: rgba(134, 142, 150, 1);
      font-size: 0.85rem;
    }

    div {
      display: flex;
      align-items: center;
      border-bottom: none;
      justify-content: space-between;
      width: 110px;
      padding: 0;

      button {
        height: 40px;
        width: 50px;
        background-color: var(--color-gray-3);
        color: white;
        border-radius: 4px;
        font-size: 0.7rem;
        margin-left: 5px;
        
      }

      .search{
        background-color: var(--color-blue-1);
      }
    }

    
    @media (min-width: 1025px) {
      form {
        
        padding: 0px 200px;
      }
    }
  }
`;
