import { useState, useCallback } from "react";
import PopupHelpRequestReceived from "./PopupHelpRequestReceived";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";
import HelpFormInput from "./HelpFormInput";
import PopUp from "./PopUp";

const IosstatusBarblack1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  width: 123.7px;
  height: 15.9px;
`;
const IosstatusBarblack = styled.div`
  position: absolute;
  top: -24px;
  left: -1px;
  width: 393px;
  height: 71px;
  font-size: var(--body-1-size);
  color: var(--color-dimgray-100);
`;
const SettingsScreenChild = styled.div`
  position: absolute;
  top: 73px;
  left: 36px;
`;
const User1234 = styled.b`
  position: absolute;
  top: 122px;
  left: 140px;
`;
const ProfilePicIcon = styled.img`
  position: absolute;
  height: 5.99%;
  width: 12.98%;
  top: 6.92%;
  right: 43.51%;
  bottom: 87.09%;
  left: 43.51%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 19px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const HomeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const SettingsComponentIcon = styled.img`
  position: relative;
  width: 35.7px;
  height: 37.3px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SettingsItem = styled.div`
  background-color: var(--black);
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Bottombar = styled.div`
  position: absolute;
  top: 783px;
  left: 0px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  width: 392px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
`;
const Message = styled.div`
  position: relative;
  
`;
const MessageWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-10xs) 0px;
`;
const MessageInput = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 142px;
`;
const EmailInput = styled.div`
  position: absolute;
  top: 374px;
  left: 47px;
  width: 200px;
  height: 72px;
`;

const Name = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  top: 60px;

`;

const HelpWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  flex-direction: column;
  top: 160px;
  left: 46px;
`;

const NameInput = styled.input`
  background-color: white;
  height: 25px;
  font-size: 16px;
  margin-top: 20px;
`;
const SendButton = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-dodgerblue);
  width: 172px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs) 0px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: var(--font-size-3xl);
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const Help = styled.div`
  font-size: var(--font-size-3xl);
  text-decoration: underline;
  font-size: 32px;
  margin-top: 20px;
`;
const CancelWrapper = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-crimson);
  width: 172px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs) 0px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: var(--font-size-3xl);
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const SettingsScreenRoot = styled.div`
  position: absolute;
  top: 86px;
  left: 523px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 393px;
  height: 852px;
  overflow: hidden;
  mix-blend-mode: normal;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--white);
  font-family: var(--community);
`;

const UserSettingsForm = () => {
  const [isPopupHelpRequestReceivedOpen, setPopupHelpRequestReceivedOpen] =
    useState(false);
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const onHomeNavClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutNavClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressNavClick = useCallback(() => {
    navigate("/progress-screen-main")
  }, [navigate]);

  const onCommunityNavClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const openPopupHelpRequestReceived = useCallback(() => {
    setPopupHelpRequestReceivedOpen(true);
  }, []);

  const closePopupHelpRequestReceived = useCallback(() => {
    setPopupHelpRequestReceivedOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  return (
    <>
      <SettingsScreenRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <SettingsScreenChild />
        <User1234>user1234</User1234>
        <ProfilePicIcon alt="" src="/profilepic.svg" />
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackClick}
        />
        <Bottombar>
          <HomeIcon alt="" src="/home.svg" onClick={onHomeNavClick} />
          <VectorIcon alt="" src="/vector1.svg" onClick={onWorkoutNavClick} />
          <VectorIcon1 alt="" src="/vector2.svg" onClick={onProgressNavClick} />
          <VectorIcon alt="" src="/vector3.svg" onClick={onCommunityNavClick} />
          <SettingsItem>
            <SettingsComponentIcon alt="" src="/settings-component.svg" />
          </SettingsItem>
        </Bottombar>
        <HelpWrapper>
          <Help>Help</Help>
          <HelpFormInput titleText="Full Name" placeholder="Ex: John Doe" />
          <HelpFormInput titleText="Email" placeholder="Ex: example123@email.com" />
          <HelpFormInput titleText="Message" placeholder="Ex: This is an example message" inputHeight="100px" />
          <SendButton onClick={openPopupHelpRequestReceived}>
            <Message>Send</Message>
          </SendButton>
          <CancelWrapper onClick={onFrameContainer3Click}>
            <Message>Cancel</Message>
          </CancelWrapper>
        </HelpWrapper>
      </SettingsScreenRoot>
      {isPopupHelpRequestReceivedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupHelpRequestReceived}
        >
          
          <PopUp onClose={closePopupHelpRequestReceived} text="Help request sent" top="86px" left="523px" checkMarkClick={closePopupHelpRequestReceived} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserSettingsForm;
