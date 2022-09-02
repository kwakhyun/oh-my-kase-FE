import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const StyledButton = styled.button`
    
`;
