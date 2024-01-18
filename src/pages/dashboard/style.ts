import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .perfil {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    button {
      border-radius: 8px;
      height: 30px;
      padding: 5px;
      background-color: var(--color-blue-900);
      color: var(--color-gray-200);
    }
  }

  .titles {
    display: flex;
    text-align: center;
    max-width: 100%;
    border: 1px solid white;
    div {
      width: 100%;
      text-align: center;
      border: 1px solid white;
      align-items: center;
      position: relative;
      cursor: pointer;
      

      span{
        position: absolute;
        right:5px ;
        top: 5px;
        z-index: 5;
      }
    }
    .action {
      width: 100px;
      padding: 5px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }

  .btnList{
    display: flex;
    min-width: 80px;
    justify-content: space-between;
    button{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

// export const StyledCreateProductForm = styled.div`
//   form {
//     display: flex;
//     flex-direction: column;
//     z-index: 5;
//     section {
//       display: flex;
//       div {
//         display: flex;
//         flex-direction: column;
//       }
//     }
//     button{
      
//       /* pointer-events: none; */
//     }
//   }

//   @media (min-width: 500px) {
//   }
// `;
