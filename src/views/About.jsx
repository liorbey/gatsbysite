import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider bg="black" clipPath="ellipse(90% 70% at 50% 20%);" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
      </UpDown>
      <UpDownWide>
      </UpDownWide>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
