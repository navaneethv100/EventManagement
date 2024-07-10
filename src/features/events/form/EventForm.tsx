import { createId } from '@paralleldrive/cuid2'
import { ChangeEvent, useState } from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'
import { AppEvent } from '../../../app/types/Events'

type Props = {
    setFormOpen: (value:boolean) => void
    addEvent: (event: AppEvent) => void
    selectedEvent: AppEvent | null
    updateEvent: (event: AppEvent) => void
}



export default function EventForm({setFormOpen, addEvent, selectedEvent, updateEvent}:Props) {

    const intialValue = selectedEvent ??  {
        title: '',
        category: '',
        description: '',
        city: '',
        date:'',
        venue:''
    }
    const [values, setValues] = useState(intialValue);    


    function onSubmit(){
        selectedEvent 
            ? updateEvent({...selectedEvent, ...values})
            : addEvent({...values,id:createId(),hostedBy:'bob',attendees:[], hostPhotoURL:''})
        setFormOpen(false)
        
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        //Take old values from useState and add the new value.

    }

  return (

    <Segment>
      <Header content={selectedEvent ? 'Update Event' : 'Create Event'} />
        <Form onSubmit={onSubmit}> 
            {/* We need to call the function only when we are passing arguments, here we only give references */}
            <Form.Field>
                <input 
                    type="text" 
                    placeholder='Event Title'
                    value={values.title}
                    name='title'
                    onChange={(e) => handleInputChange(e)}
                    
                />
            </Form.Field>

            <Form.Field>
                <input 
                    type="text" 
                    placeholder='Category' 
                    value={values.category}
                    name='category'
                    onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder='Description' 
                    value={values.description}
                    name='description'
                    onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder='City' 
                    value={values.city}
                    name='city'
                    onChange={(e) => handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder='Venue' 
                    value={values.venue}
                    name='venue'
                    onChange={(e) => handleInputChange(e)}/>
            </Form.Field>
            <Form.Field>
                <input 
                    type="date" 
                    placeholder='Date' 
                    value={values.date}
                    name='date'
                    onChange={(e) => handleInputChange(e)}/>
            </Form.Field>
        
            <Button type='submit' floated='right' positive content='Submit' />
            <Button onClick={()=> setFormOpen( false)} floated='right' type='button' content='Cancel' />
            

            <br></br>
            <br></br>    
        </Form>
        
    </Segment>

  )
}

