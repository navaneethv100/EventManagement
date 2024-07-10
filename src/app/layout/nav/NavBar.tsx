import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SingOutButtons from './SingOutButtons';
import SignedInMenu from './SignedInMenu';
import { useState } from 'react';




export default function NavBar() {
    
    const [auth, setAuth] = useState(true);


    

  return (
    <Menu inverted={true} fixed='top'>
        <Container>
            <MenuItem header as ={NavLink} to='/'>
                <img src="./logo.png" alt="logo" />
                Event
            </MenuItem>
            <MenuItem name="Events" as={NavLink} to='/events/' />
            <MenuItem>
                <Button 
                    as={NavLink}
                    to='/createEvent'
                    floated='right' 
                    positive={true} 
                    inverted={true} 
                    content="create event" />
            </MenuItem>
            {
                auth ? <SignedInMenu setAuth={setAuth} /> : <SingOutButtons setAuth={setAuth} />
            }
            <SignedInMenu />

        </Container>
    </Menu>
  )
}
