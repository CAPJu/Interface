import styled from 'styled-components';

export const Container = styled.button.attrs((props) => ({
  background: props.background || 'rgba(0, 0, 0, 0.8)'
}))`
  background-color: ${(props) => props.background};
  border: solid #888 2px;
  padding: 10px 20px;
  min-width: 150px;
  color: white;
  border-radius: 10px;
  margin: 10px;
  font-size: 30px;

  :hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    transition: 0.4s;
    border: solid black 2px;
  }
`;
