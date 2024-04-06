import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: row;

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
export const Fin1 = styled.div`
  display: flex;
  flex-direction: column;
`
export const Fin2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  heigth: 100vh;
  background-repeat: norepeat;
`
export const Fin3 = styled.div`
  display: flex;
  flex-direction: column;
`
