import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeItemSelected3 from "./HomeItemSelected3";
import WorkoutItemSelected3 from "./WorkoutItemSelected3";
import styled, { css } from "styled-components";

const HomeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${props => props.selected && css`
    background-color: black; // Change this to the desired background color for selected state
  `}
`;

const VectorIcon = styled.img`
  position: relative;
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon2 = styled.img`
  position: relative;
  width: 31.3px;
  height: 32.7px;
  cursor: pointer;
`;
const BottombarRoot = styled.div`
  position: absolute;
  top: 783px;
  left: 0px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  width: 393px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
`;

const Bottombar2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/progress-screen-main");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const isHomeSelected = location.pathname === "/"; // Check if the home route is selected


  return (
    <BottombarRoot>
      <HomeIcon
        src="/home-component1.svg"
        alt="Home"
        onClick={onHomeIconClick}
        selected={isHomeSelected} // Pass the selected prop based on the current route
      />
      <WorkoutItemSelected3 />
      <VectorIcon alt="" src="/vector4.svg" onClick={onVectorIcon1Click} />
      <VectorIcon1 alt="" src="/vector11.svg" onClick={onVectorIcon2Click} />
      <VectorIcon2 alt="" src="/vector6.svg" onClick={onVectorIcon3Click} />
    </BottombarRoot>
  );
};

export default Bottombar2;
