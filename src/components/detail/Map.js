/*global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";

function Map({ lat, lon }) {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(lat, lon);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return <StyledMap id="map"></StyledMap>;
}

const StyledMap = styled.div`
  width: 90vw;
  height: 400px;
  z-index: 0;
`;

export default Map;
