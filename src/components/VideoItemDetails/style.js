import styled from 'styled-components'

export const Para = styled.p`
  color: ${props => props.colour};
  font-family: 'Roboto';
`
export const Main2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const Like = styled.button`
  backgeound-color: transparent;
  border-width: 0px;
  color: ${props => (props.val1 ? '#2563eb' : '#64748b')};
`

export const Dislike = styled.button`
  backgeound-color: transparent;
  border-width: 0px;
  color: ${props => (props.val2 ? '#2563eb' : '#64748b')};
`
export const Save = styled.button`
  backgeound-color: transparent;
  border-width: 0px;
  color: ${props => (props.val3 ? '#2563eb' : '#64748b')};
`
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${props => props.color};
`

export const Back1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30%;
`
export const Back2 = styled.ul`
  display: flex;
  flex-direction: column;
`
export const Back3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
