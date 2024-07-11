import { Grid} from 'semantic-ui-react'
import EventList from './EventList'

import { useEffect } from 'react'

import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useAppSelector } from '../../../app/store/Store'
import { actions } from '../eventSlice'
import { useFireStore } from '../../../app/hooks/firestore/useFirestore'


export default function EventDashboard() {
  const {data: events, status } = useAppSelector(state => state.events)

  const {loadCollection} = useFireStore('events');
   

  

  useEffect(()=>{
    loadCollection(actions)
  },[loadCollection])
  //If [] is not added the infine requests - 


  if(status === "loading") return <LoadingComponent />

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  )
}

