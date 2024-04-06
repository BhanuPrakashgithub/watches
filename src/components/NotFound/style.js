import styled from 'styled-components'

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.lose ? '#0f0f0f' : '#f9f9f9')};
`
export const Image = styled.img`
  width: 400px;
`
export const Heading = styled.h1`
    color : ${props => props.lose2}
    margin: 20px;
    font-family:"Roboto";
    `
export const Paragraph = styled.p`
    color : ${props => props.lose3}
    margin: 20px;
    font-family:"Roboto";
`
