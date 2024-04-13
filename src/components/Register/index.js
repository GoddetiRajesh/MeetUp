import {Component} from 'react'

import RegisterContext from '../../context/RegisterContext'

import {
  HeaderContainer,
  Logo,
  RegisterContainer,
  Image,
  FormContainer,
  Heading,
  Label,
  Input,
  Button,
  ErrorMsg,
} from './styledComponents'

class Register extends Component {
  state = {errMsg: ''}

  updateErrorMsg = name => {
    if (name === '') {
      this.setState({errMsg: 'Please enter your name'})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {errMsg} = this.state
          const {name, topic, updateName, updateTopic, topicsList} = value
          const onChangeName = event => {
            updateName(event.target.value)
          }
          const onChangeTopic = event => {
            updateTopic(event.target.value)
          }
          const onSubmitForm = event => {
            event.preventDefault()
            this.updateErrorMsg(name)
          }

          return (
            <>
              <HeaderContainer>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </HeaderContainer>
              <RegisterContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={onSubmitForm}>
                  <Heading>Let us join</Heading>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    onChange={onChangeName}
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                  />
                  <Label htmlFor="topics">TOPICS</Label>
                  <Input
                    as="select"
                    onChange={onChangeTopic}
                    id="topics"
                    value={topic}
                  >
                    {topicsList.map(eachItem => (
                      <option key={eachItem.id} value={eachItem.id}>
                        {eachItem.displayText}
                      </option>
                    ))}
                  </Input>
                  <Button type="submit">Register Now</Button>
                  {errMsg !== '' && <ErrorMsg>{errMsg}</ErrorMsg>}
                </FormContainer>
              </RegisterContainer>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
