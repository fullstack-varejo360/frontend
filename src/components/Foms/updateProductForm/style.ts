import styled from "styled-components";

export const StyledUpdateProductForm = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 14px;
  

  h2 {
    color: var(--color-blue-1);
    font-size: 2rem;
  }

  
  form {
    margin-top: 0px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #212529;
    border-radius: 4px;
    padding-top: 0;
    
    
    

    h3 {
      align-self: center;
      color: var(--color-gray-0);
      font-size: .85rem;
    }

    label {
      color: var(--color-gray-0);
      font-size: 0.7rem;
      margin: 10px 0;
    }

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
      width: 100%;
      align-items: center;
      border-radius: 4px;
      padding: 0;
      justify-content: space-between;
      

      span{
        cursor: pointer;
      }
    }

    .btnForm {
      width: 100%;
      background-color: #ff8d07;
      border-radius: 4px;
      color: white;
      margin-top: 20px;
      height: 40px;
      text-align: center;
      font-size: 1rem;
    }

  }

  @media (min-width: 500px) {
    form {
      max-width: 400px;
    }
  }

  
  
`;
