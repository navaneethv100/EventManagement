import { Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/SampleData'
import { AppEvent } from '../../../app/types/Events'
import { useEffect, useState } from 'react'

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
  selectEvent: (event: AppEvent | null) => void
  selectedEvent: AppEvent | null 
}


export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {

  const [events, setEvents] = useState<AppEvent[]>([])
  //Creating a event of type AppEvent.
  

  useEffect(()=>{
    setEvents(sampleData);
  }, []) 
  //Second Parameter is the dependencies - which will change when use effect will be executed.

  function addEvent(event: AppEvent){
    setEvents(prevState => {
      return [...prevState, event] //First get the esisting array of events and then passon the new event.
    })
  }

  function updateEvent(updatedEvent: AppEvent){
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt))
    selectEvent(null);
    setFormOpen(false);
  }
 

  return (
    <Grid>
        <Grid.Column width={10}>
            <EventList 
              events={events} 
              selectEvent={selectEvent} />
            
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen && <EventForm 
                setFormOpen={setFormOpen} 
                addEvent={addEvent}
                updateEvent={updateEvent}
                selectedEvent = {selectedEvent}
                key={selectedEvent ? selectedEvent.id : 'create'}
              />} 
            {/* If formOpen is true then EventForm compenent will be displayed */ }
        </Grid.Column>
    </Grid>
  )
}
