import styled from 'styled-components'

export const Cards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.gridGap || '16px'};
  overflow-y: auto;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    grid-template-columns: ${props =>
      props.gridTemplateColumns || 'repeat(4, 1fr)'};
  }
`

export const Card = styled.div`
  height: 100px;
  background-color: ${props => props.cardColor || 'lightgray'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, #3399ff, #ccccff);
  border-radius: 4px;
  margin: 0 8px;
`

export const RoundCard = styled.div`
  height: 100px;
  background-color: ${props => props.cardColor || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 0 8px;
  cursor: pointer;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'black'};
  background: ${props => props.backgroundColor || 'antiquewhite'};
  border: none;
  border-bottom: 1px solid darkgray;
  border-radius: 16px;
  margin-bottom: 4px;
`

export const Label = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  margin: 4px 0;
  line-height: 18px;
`
export const ErrorText = styled.div`
  color: tomato;
  font-size: 12px;
  margin-bottom: 8px;
`

export const ActionButton = styled.button`
  height: 30px;
  width: 80px;
  color: black;
  background-color: 'white';
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  position: unset;
  width: 100px;
  left: unset;
  right: unset;
  bottom: unset;
  border-radius: 16px;
  border: 1px solid black;
  margin: 4px 0;
  z-index: 1;
`

export const ActionButton1 = styled.button`
  height: 50px;
  width: 100px;
  color: black;
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 16px;
  border: 1px solid black;

  @media (min-width: 768px) {
    position: fixed;
    width: 50%;
    left: 25%;
    right: 0;
    bottom: 2%;
  }
`

export const Addresses = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const AddressBar = styled.div`
  padding-bottom: 8px;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid black;
`

export const ActionButtonGroup = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
`
