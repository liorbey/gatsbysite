import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import styled from 'styled-components'
import './sliderstyles.css'
import tw from 'tailwind.macro'


const Desc = styled.p`
  ${tw` lg:text-l text-white flex flex-row lg:flex-row items-center mt-12`};
`
export default function Slider({ children }) {
  const [bind, { delta, down }] = useGesture()
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 1,
    bg: `linear-gradient(120deg, ${delta[0] < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f586'} 100%)`,
    size: down ? 0.5 : 1.1,
    immediate: name => down && name === 'x'
  })
  const avSize = x.interpolate({ map: Math.abs, range: [50, 300], output: ['scale(0.1)', 'scale(1)'], extrapolate: 'clamp' })
  return (
    <animated.div {...bind()} class="item" style={{ background: bg }}>
    <Desc>We're now offering free trial lessons all throughout NYC! Simply send us a message to get started. </Desc>
      <animated.div class="av" style={{ transform: avSize, justifySelf: delta[0] < 0 ? 'end' : 'start' }} />
      <animated.div class="fg" style={{ transform: interpolate([x, size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`) }}>
        {children}
      </animated.div>
    </animated.div>
  )
}