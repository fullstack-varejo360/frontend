import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  text-align: center;
  max-width: 100%;

  div {
    width: 100%;
    text-align: center;
  }
  .info {
    border: 1px solid white;
    display: flex;
    align-items: center;
    div{
      border-left: 1px solid white;
    }
  }

  .btn {
    border: 1px solid white;
    width: 50px;
    justify-content: space-around;
    display: flex;
    

    .upd {
      background-color: yellow;
      padding: 5px;
    }
    .del {
      background-color: red;
      padding: 5px;
    }
  }

  @media (min-width: 726px) {
  }
`;
