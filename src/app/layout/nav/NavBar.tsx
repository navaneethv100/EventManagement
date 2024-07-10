import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'


type Props ={
    setFormOpen: (value: boolean) => void;
}


export default function NavBar({setFormOpen}: Props) {
   
  return (
    <Menu inverted={true} fixed='top'>
        <Container>
            <MenuItem header>
                <img src="./logo.png" alt="logo" />
                Event
            </MenuItem>
            <MenuItem name="Events" />
            <MenuItem>
                <Button 
                    onClick={()=>setFormOpen(true)} //So that when someone clicks the button, then the function gets executed. Otherwise the function will get executed straight away, as soon as the page is loaded.
                    floated='right' 
                    positive={true} 
                    inverted={true} 
                    content="create event" />
            </MenuItem>
            <MenuItem position='right'>
                <Button basic inverted content='login'/>
                <Button basic inverted content='Register' style={{marginLeft:'0.5em'}}/>
            </MenuItem>
        </Container>
    </Menu>
  )
}
