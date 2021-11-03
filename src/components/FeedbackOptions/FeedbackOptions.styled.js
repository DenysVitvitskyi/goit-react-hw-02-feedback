import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: inherit;
  border: 1px solid rgb(133, 133, 133);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: rgb(173, 216, 230);
    border-color: rgb(173, 216, 230);
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 10px;
`;