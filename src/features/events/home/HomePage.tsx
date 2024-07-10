import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react'

export default function HomePage() {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image size='massive' src='/logo.png' alt='logo' style={{marginBottom: 12}}/>
          Event Management
        </Header>
        <Button size='huge' inverted as={Link} to='/events'>
          Get Started
          <Icon name='caret right' inverted></Icon>
        </Button>
      </Container>
    </Segment>
  )
}
