import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ReactLink = styled(Link)`
  text-decoration: none;
`

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Navbar = styled.nav`
  width: 100vw;
  padding: 2%;
  padding-right: 4%;
  padding-left: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 120px;
`

export const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeHeading = styled.h1`
  font-size: 28px;
  color: #334155;
  text-align: center;
  margin-bottom: 20px;
`

export const HomePara = styled.p`
  font-size: 20px;
  color: #7b8794;
  text-align: center;
  margin-bottom: 30px;
`

export const HomeHeadingRegistered = styled.h1`
  font-size: 28px;
  color: #3b82f6;
  margin-bottom: 20px;
  text-align: center;
`
export const RegisterButton = styled.button`
  outline: none;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
  padding: 8px;
  font-size: 17px;
  width: 150px;
  margin-top: 10px;
  margin-bottom: 25px;
`

export const HomeParaRegistered = styled.p`
  font-size: 20px;
  color: #7b8794;
  text-align: center;
  margin-bottom: 30px;
`

export const HomeCard = styled.img`
  width: 50%;
`
