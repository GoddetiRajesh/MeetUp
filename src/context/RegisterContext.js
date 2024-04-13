import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  topicsList: [],
})

export default RegisterContext
