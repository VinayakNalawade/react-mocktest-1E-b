import {Component} from 'react'

import {
  LoginPage,
  LoginContainer,
  LoginImg,
  LoginForm,
  LoginHeading,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginError,
  HomeSelect,
  HomeOption,
  NavLogo,
  Navbar,
  MainContainer,
} from './styledComponents'
import RegisterContext from '../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userId: '',
    topicText: topicsList[0].displayText,
    topic: topicsList[0].id,
    error: '',
  }

  changeUserId = event => {
    if (event.target.value === '') {
      this.setState({
        userId: event.target.value,
        error: 'Please enter your name',
      })
    }

    this.setState({userId: event.target.value, error: ''})
  }

  changeTopic = event =>
    this.setState({
      topic: event.target.value,
      topicText: event.target.textContext,
    })

  onSubmit = event => {
    event.preventDefault()

    const {userId} = this.state

    if (userId.length === 0) {
      this.setState({error: 'Please enter your name'})

      return false
    }
    this.setState({error: ''})
    return true
  }

  render() {
    const {userId, topicText, topic, error} = this.state

    return (
      <RegisterContext.Consumer>
        {value => {
          const {registered, changeRegistered} = value

          if (registered) {
            const {history} = this.props

            history.replace('/')
          }

          return (
            <MainContainer>
              <Navbar>
                <NavLogo
                  alt="website logo"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                />
              </Navbar>
              <LoginPage>
                <LoginContainer>
                  <LoginImg
                    alt="website register"
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  />
                  <LoginForm
                    onSubmit={() => {
                      const submit = this.onSubmit

                      if (submit) {
                        changeRegistered(userId, topicText)
                      }
                    }}
                  >
                    <LoginHeading>Let us join</LoginHeading>
                    <LoginLabel htmlFor="userId">NAME</LoginLabel>
                    <LoginInput
                      type="input"
                      id="userId"
                      placeholder="Your name"
                      onChange={this.changeUserId}
                      value={userId}
                    />
                    <LoginLabel htmlFor="TOPICS">TOPICS</LoginLabel>

                    <HomeSelect
                      id="TOPICS"
                      onChange={this.changeTopic}
                      value={topic}
                    >
                      {topicsList.map(each => (
                        <HomeOption value={each.id} key={each.id}>
                          {each.displayText}
                        </HomeOption>
                      ))}
                    </HomeSelect>
                    <LoginButton type="submit">Register Now</LoginButton>
                    <LoginError>{error}</LoginError>
                  </LoginForm>
                </LoginContainer>
              </LoginPage>
            </MainContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
