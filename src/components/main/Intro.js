import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <StyledDiv>
      <StyledImg src="https://user-images.githubusercontent.com/78805018/188814729-1667f13c-94a1-42f5-b51f-803a12f467ca.jpeg"/>
      <StyledBottomDiv>
      <StyledText size="16px" margin="0 0 30px">
      <StyledSpan>'오마카세'</StyledSpan>라는 말은 한국 뿐 아니라 전 세계에서 고급 식사의 대표적인 형태로 가장 많이 사용되고 있습니다. 셰프에게 요리를 전적으로 맡긴다는 의미의 ‘오마카세’는, 계절에 따라 가장 좋은 식재료를 사용해 우아하고 예술적인 요리를 제공하는 방식으로 널리 활용되는 용어입니다.
      </StyledText>
      <StyledText size="10px">
      출처:&ensp;
      <StyledAnchor href="https://guide.michelin.com/kr/ko/article/features/kitchen-language-what-is-omakase-ko">미쉐린 가이드 / Michelin Guide</StyledAnchor><br/> Author: Jacob Dean <br/> Translate: 이정윤 에디터 <br/> 2021년 10월 6일 </StyledText>
      </StyledBottomDiv>
    </StyledDiv>
  );
};

export default Intro;

const StyledDiv=styled.div`
margin: 30px auto 80px;
width: 70vw;
font-family: Arial, Helvetica, sans-serif;
box-shadow: 1px 1px 15px grey;
border-radius: 10px;
`
const StyledText=styled.div`
font-size: ${(props)=>props.size};
margin: ${(props)=>props.margin};
`
const StyledAnchor = styled.a`
text-decoration: none;
`
const StyledSpan = styled.span`
font-size: 22px;
font-weight: bold;
`
const StyledImg = styled.img`
width: 70vw;
object-fit: cover;
border-radius: 10px 10px 0 0;
`
const StyledBottomDiv = styled.div`
padding: 30px;
`