import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 40vw;
  height: 30px;
  margin: 5px 0;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #000;
    color: #fff;
    transition: 0.5s;
  }
`;

export default Button;