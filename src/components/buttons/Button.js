import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  font-size: 25px;
  font-family: "Do Hyeon", sans-serif;
  width: 35vw;
  height: 40px;
  border: none;
  background-color: transparent;
  margin: 10px;
  color: #555;
  cursor: pointer;
  input {
    font-size: 25px;
    font-family: "Do Hyeon", sans-serif;
    width: 35vw;
    height: 40px;
    border: none;
    background-color: transparent;
    margin: 10px;
    color: #555;
    cursor: pointer;
  }
`;

export default Button;
