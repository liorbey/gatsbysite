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

const Form = () => (
  <form name="Contact Form" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="Contact Form" />
  <div>
    <label>Your Email:</label>
    <input type="email" name="email" />
  </div>
  <div>
    <label>Message:</label>
    <textarea name="message" />
  </div>
  <button type="submit">Send</button>
</form>

  )

export default Form

Form.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
