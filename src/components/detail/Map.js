/* global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components';

  const Map = () => {

    useEffect(() => {
      let container = document.getElementById("map");
  
      let options = {
        center: new window.kakao.maps.LatLng(35.85133, 127.734086),
        level: 13,
      };
  
      let map = new window.kakao.maps.Map(container, options);
  
      console.log("loading kakaomap");
    }, []);
  return (
    <StyledMap id="map">
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.div`
width: 90vw;
height:400px;
`