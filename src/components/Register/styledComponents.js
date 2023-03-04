import styled from 'styled-components'

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

export const LoginPage = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  width: 80%;
  display: flex;
  border-radius: 15px;
`

export const LoginImg = styled.img`
  width: 50%;
`
export const LoginForm = styled.form`
  width: 50%;
  border-radius: 15px;
  padding: 3%;
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`
export const LoginHeading = styled.h1`
  font-size: 34px;
  color: #152850;
`

export const LoginLabel = styled.label`
  font-size: 18px;
  margin-bottom: 7px;
  color: #5a7184;
  font-weight: 600;
`

export const LoginInput = styled.input`
  font-size: 17px;
  outline: none;
  border: 1px solid #c3cad9;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
`

export const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: #1565d8;
  color: #ffffff;
  border-radius: 5px;
  padding: 8px;
  font-size: 17px;
  width: 150px;
  margin-top: 10px;
`
export const LoginError = styled.p`
  font-size: 15px;
  color: #ff0b37;
  margin: 5px;
`
export const HomeSelect = styled.select`
  border: 1px solid #cbd5e1;
  padding: 8px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
  font-size: 17px;
  border-radius: 5px;
`

export const HomeOption = styled.option``
