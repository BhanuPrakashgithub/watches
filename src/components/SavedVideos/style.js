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
export const Main2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.colour};
`
export const Main4 = styled.div`
  display: flex;
  flex-direction: row;
`
export const Main5 = styled.ul`
  display: flex;
  flex-direction: column;
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
    color : ${props => (props.lose2 ? '#ffffff' : '#000000')}
    margin: 20px;
    font-family:"Roboto";
    `
export const Paragraph = styled.p`
    color : ${props => (props.lose3 ? '#ffffff' : '#000000')}
    margin: 20px;
    font-family:"Roboto";
`
