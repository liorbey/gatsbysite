import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Form from '../components/Form'
import Header from '../components/Header'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import customer1 from '../images/customer1.jpg'
import customer2 from '../images/customer2.jpeg'
import customer3 from '../images/customer3.jpg'

import laptop from '../images/build.png'
import carpic from '../images/carpic.png'
import design from '../images/design.png'

import logo from '../../static/logo.png'


const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 12rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
const AboutHero2 = styled.div`
  ${tw`flex flex-col lg:flex-row flex-wrap items-center mt-8 pt-12`};
`
const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`
const AboutSub2 = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-md lg:text-md xl:text-xl`};
`

const AboutDesc = styled.p`
  ${tw`flex flex-row lg:flex-row items-center mt-8`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
    <img style ={{"margin-left":"80px", "marginTop": '50px'}}src = {logo}></img>
      <Hero offset={0}>
        <BigTitle>
          Learn to code, build a robot, <br/> become a math expert, <br/> create & 3D print
        </BigTitle>
        <Subtitle>Whatever path - our students learn future proof skills & have a ton of fun doing it</Subtitle>
        <Form bg="linear-gradient(to right, #8B9688 0%, #FBB03B 100%)">  
        </Form>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" placeholder="Your email"/>
          <button type="submit">signup</button>
        </form>
      </Hero>
      <Projects offset={1}>
        <Title>Curriculum paths</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Coding"
            link=""
            bg="linear-gradient(to right, #61892F 0%, #86C232 100%)"
            image = {laptop}
          >
            Write programs that do your homework. Create games and websites. See code logically through algorithms
          </ProjectCard>
          <ProjectCard
            title="Robotics"
            link=""
            bg="linear-gradient(to right, #66FCF1 0%, #1F2833 100%)"
            image = {carpic}
          >
            Learn how to operate iOt devices like the Arduino. Develop a sharp knowledge of electronics. Engineer a self driving car
          </ProjectCard>
          <ProjectCard
            title="Design"
            link=""
            bg="linear-gradient(to right, #9A1750 0%, #FBE8A6 100%)"
            image = {design}
          >
           Get an understanding of architecture & engineering using TinkerCAD. Design your own creations. Learn to operate and make your designs come to life with 3D printing
          </ProjectCard>
          <ProjectCard
            title="Math enrichment"
            link=""
            bg="linear-gradient(to right, #88BDBC 0%, #4F4A41 100%)"
          >
            Understand the logical prinicipals behind the math you already know. Challenge yourself to understand concepts 2-3 grades above your peers
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Our vision</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
          At BeyTech, we believe that modern tech is completely changing what and how today's kids should be learning. 
            We pride ourselves for our ability to bring STEM to kids of all ages with future-proof skills, innovative curriculums, & personalized paths.<br/><br/>-Yaron, Lead Instructor
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        <AboutHero2>
          <Avatar src={customer1} alt="John Doe" />
          <AboutSub2>
          Lior is the best teacher my kids have ever had, they are learning a ton and also having lots of fun.
          <br/><br/>-Sarah, Upper West (3 innovators)
          </AboutSub2>
        </AboutHero2>
        <AboutHero2>
          <Avatar src={customer2} alt="John Doe" />
          <AboutSub2>
            My daughter went from struggling with math to competing in math olympiads
          <br/><br/>-Brent, Upper East (1 innovator)
          </AboutSub2>
        </AboutHero2>
        <AboutHero2>
          <Avatar src={customer3} alt="John Doe" />
          <AboutSub2>
          My two sons went from zero knowledge of coding to building super cool robotics projects.
          <br/><br/>-Emily, Chelsea (2 innovators)
          </AboutSub2>
        </AboutHero2>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Contact us by <a href="mailto:lior.bey95@gmail.com">Email</a> <br/>or even quicker, send us an instant message!{' '}
            <a href="https://wa.me/17187375538">Whatsapp</a> {' '}
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 BeyTech{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
