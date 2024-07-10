import { Segment, Header, Form, Button } from 'semantic-ui-react'

type Props = {
    setFormOpen: (value:boolean) => void
}



export default function EventForm({setFormOpen}:Props) {
  return (
    <>
    <Segment>
      <Header content='Create Event' />
        <Form>
            <Form.Field>
                <input type="text" placeholder='Event Title'/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Cetegory'/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='City'/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Venue'/>
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder='Date'/>
            </Form.Field>
        
            
            <Button onClick={()=> setFormOpen( false)} type='submit' floated='right' content='Cancel' />
            <Button type='submit' floated='right' positive content='Submit' />

            <br></br>
            <br></br>    
        </Form>
        
    </Segment>
    </>
  )
}

