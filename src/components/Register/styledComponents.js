import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 15vh;
  padding: 30px;
`
export const Logo = styled.img`
  heigth: 30px;
  width: 200px;
`
export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
`
export const Image = styled.img`
  width: 30%;
  margin-right: 50px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  color: #334155;
  margin-bottom: 25px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #7b8794;
  margin-bottom: 8px;
`
export const Input = styled.input`
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  height: 40px;
  width: 350px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #334155;
  margin-bottom: 25px;
`
export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 150px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: white;
  background-color: #3b82f6;
  margin-top: 15px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #ff0b37;
  margin-top: 5px;
`
