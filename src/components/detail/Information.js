import React from "react";
import styled from "styled-components";

const Information = () => {
  return (
    <>
      <StyledText size="15px">서울 마포구 연희로1길 11 2층</StyledText>
      <StyledText size="16px" line="30px">
        압도'는 이름 그대로 고객을 압도하기 위해 부단히 노력한다는 저희의
        포부입니다. 고객분들에게 어떤 식재료를 어떻게, 그리고 코스 간의 조화와
        흐름을 깊게 고민하며, 고객께서 만족할만한 음식을 만들기 위해 부단히
        노력해나가고 있습니다. 고객을 압도하기 위해 가장 중요한 노력으로 모든
        식재료에 대해 엄격하게 품질검수하여 최상의 상태로 제공하겠습니다.
      </StyledText>
    </>
  );
};

export default Information;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 40px;
  line-height: ${(props) => props.line || "30px"};
`;
