import styled from "styled-components";

const SetBox = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 23px;
  height: 21px;

  ::before {
    content: '${props => props.text || ''}';
    font-size: 14px; /* You can adjust the font size as needed */
    color: var(--black); /* You can set the text color */
  }
`;

const RepBox = styled.input`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 48px;
  height: 21px;
`;

const RemoveSetButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-dodgerblue);
  width: 70px;
  height: 21px;
  box-sizing: border-box;
  padding-top: 5px;
  font-size: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;

const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const handleClick = (removeClick, setNumber) => {
    removeClick(setNumber);
}

const SetWrapper = ({ setNumber, removeClick}) => {
    return (
        <>
            <Wrapper>
                <SetBox>{setNumber}</SetBox>
                <RepBox type="number" />
                <RepBox type="number" />
                <RemoveSetButton onClick={() => handleClick(removeClick, setNumber)}>Remove set</RemoveSetButton>
            </Wrapper>
        </>
    )
}

export default SetWrapper;