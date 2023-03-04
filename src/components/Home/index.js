import ReactContext from '../context/RegisterContext'

import {
  ReactLink,
  MainContainer,
  Navbar,
  NavLogo,
  HomeContainer,
  HomeHeading,
  HomeCard,
  HomePara,
  RegisterButton,
  HomeParaRegistered,
  HomeHeadingRegistered,
} from './styledComponents'

const Home = () => {
  const renderHome = () => (
    <ReactContext.Consumer>
      {value => {
        const {registered, topic, name} = value

        if (registered) {
          return (
            <HomeContainer>
              <HomeHeadingRegistered>Hello {name}</HomeHeadingRegistered>
              <HomeParaRegistered>Welcome to {topic}</HomeParaRegistered>
              <HomeCard
                alt="meetup"
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              />
            </HomeContainer>
          )
        }

        return (
          <HomeContainer>
            <HomeHeading>Welcome to Meetup</HomeHeading>
            <HomePara>Please register for the topic</HomePara>
            <ReactLink to="/register">
              <RegisterButton type="button">Register</RegisterButton>
            </ReactLink>
            <HomeCard
              alt="meetup"
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            />
          </HomeContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  return (
    <MainContainer>
      <Navbar>
        <NavLogo
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        />
      </Navbar>
      {renderHome()}
    </MainContainer>
  )
}

export default Home
