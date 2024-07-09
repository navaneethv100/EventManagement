import { Segment, Header, Form, Button } from 'semantic-ui-react'

export default function EventForm() {
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
            <Button type='submit' floated='right' positive content='Submit' />
            <Button type='submit' floated='right' content='Cancel' />
        </Form>
        
    </Segment>
    </>
  )
}

