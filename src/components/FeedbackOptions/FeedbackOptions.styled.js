import styled from "@emotion/styled";

export const Button = styled.button`
  background-colorr: ocean;
  border: 1px solid rgb(133, 133, 133);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: orange;
    border-color: orange;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 15px;
`;