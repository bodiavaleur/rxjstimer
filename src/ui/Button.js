import styled from "styled-components";

export const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 2.25rem;
  border: none;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  background: #333;
  color: white;
  cursor: pointer;

  ${({ waiting }) => waiting && `opacity: 0.5`};
`;
