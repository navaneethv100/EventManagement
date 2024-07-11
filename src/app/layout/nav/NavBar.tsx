import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SignedInMenu from './SignedInMenu';
import SignedOutButtons from './SignedOutButtons';
import { useAppSelector } from '../../store/Store';
import { sampleData } from '../../api/SampleData';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';



export default function NavBar() {
    const {authenticated} = useAppSelector(state => state.auth)


    function seedData () {
        sampleData.forEach(async event => {
            const {id, ...rest} = event;
            await setDoc(doc(db, 'events', id), {
                ...rest
            })//This will create a collection called events in our database - create a document with id - which we get from event(which is a string of data from sampleData).
        })
    }

    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header as={NavLink} to='/'>
                    <img src="/logo.png" alt="logo" />
                    Re-vents
                </MenuItem>
                <MenuItem name='Events' as={NavLink} to='/events' />
                <MenuItem name='Scratch' as={NavLink} to='/scratch' />
                <MenuItem>
                    <Button
                        as={NavLink}
                        to='/createEvent'
                        floated='right'
                        positive={true}
                        inverted={true}
                        content='Create event' />
                </MenuItem>
                <MenuItem position='right'>
                    {import.meta.env.DEV && (
                        <MenuItem>
                            <Button 
                                inverted={true}
                                color='teal'
                                content='Seed Data'
                                onClick={seedData}
                            />
                        </MenuItem>
                    )} 
                    {authenticated 
                        ? <SignedInMenu  />
                        : <SignedOutButtons />}
                </MenuItem>
            </Container>
        </Menu>
    )
}