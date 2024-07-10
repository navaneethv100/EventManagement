import { Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/SampleData'
import { AppEvent } from '../../../app/types/Events'
import { useEffect, useState } from 'react'

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}


export default function EventDashboard({formOpen, setFormOpen}: Props) {

  const [events, setEvent] = useState<AppEvent[]>([])
  //Creating a event of type AppEvent.

  useEffect(()=>{
    setEvent(sampleData);
  }, []) 
  //Second Parameter is the dependencies - which will change when use effect will be executed.

  return (
    <Grid>
        <Grid.Column width={10}>
            <EventList events={events} />
            
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen && <EventForm setFormOpen={setFormOpen}/>} 
            {/* If formOpen is true then EventForm compenent will be displayed */ }
        </Grid.Column>
    </Grid>
  )
}
