import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  font-size: 15px;
  width: 100px;
  height: 40px;
  border: none;
  background-color: transparent;
  margin: 10px;
  cursor: pointer;
`;

export default Button;
