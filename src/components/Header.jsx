import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import logo from '../../static/logo.png'

const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap p-6`};
  background: ${props => props.bg};

`
const Div = styled.div`
  ${tw`flex items-center flex-shrink-0 text-white mr-6`};

`
const Div2 = styled.div`
  ${tw`block lg:hidden`};

`
const Div3 = styled.div`
  ${tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`};

`
const Div3inner = styled.div`
  ${tw`text-sm lg:flex-grow`};

`
const Button = styled.button`
  ${tw`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400`};
  &:hover {
    text-white border-white
  };
`
const A = styled.a`
  ${tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4`};
  &:hover {
    text-white
  };

`
const Header = ({bg}) => (
        <img style ={{"margin-left":"40px"}}src = {logo}></img>
);

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    bg: PropTypes.string.isRequired,
  }