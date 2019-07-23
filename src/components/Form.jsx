import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Div = styled.div`
  ${tw`w-full max-w-xs`}

`

const Formdiv = styled.div`
  ${tw`mb-4`}

`
const Formheader = styled.form`
  ${tw`shadow-md rounded px-8 pt-6 pb-8 mb-4`};
  background: ${props => props.bg};
`
const Button = styled.button`
${tw`cursor-pointer text-white backgroundColor:black`};
  &:hover {
    text-white font-bold py-2 px-4 rounded;
  };
  &:focus{
      outline-none;
      shadow-outline;
  };

`
const Buttondiv = styled.div`
${tw`flex items-center justify-between`};

`
const Label = styled.label`
  ${tw`block text-gray-700 text-sm font-bold mb-2`};
`
const Input = styled.input`
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`};
`

const Form = ({bg}) => (
    <Div>
  <Formheader name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" bg={bg}>
    <Formdiv class="mb-4">
      <Label for="contact">
        Sign up for a free introductory lesson
      </Label>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Input id="contact" type="text" placeholder="Enter your email"/>
    </Formdiv>
     <Buttondiv>
      <Button type="submit">
        Redeem your free lesson
      </Button>
    </Buttondiv>
  </Formheader>
</Div>

  )

export default Form

Form.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
