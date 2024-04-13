import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import {
  HeaderContainer,
  Logo,
  HomeContainer,
  Heading,
  Text,
  Button,
  RegisteredGreeting,
  RegisteredText,
  Image,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic, topicsList} = value
      const result = topicsList.filter(eachItem => eachItem.id === topic)
      const {displayText} = result[0]
      return (
        <>
          <HeaderContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </HeaderContainer>
          <HomeContainer>
            {name === '' ? (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Text>Please register for the topic</Text>
                <Link to="/register">
                  <Button type="button">Register</Button>
                </Link>
              </>
            ) : (
              <>
                <RegisteredGreeting>Hello {name}</RegisteredGreeting>
                <RegisteredText>Welcome to {displayText}</RegisteredText>
              </>
            )}
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
