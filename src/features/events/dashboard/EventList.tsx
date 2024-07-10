import { AppEvent } from "../../../app/types/Events";
import EventListItem from "./EventListItem";

type Props = {
    events: AppEvent[]
    selectEvent: (event: AppEvent) => void
}


export default function EventList({events, selectEvent}:  Props) {
  return (
    <>
    {
        events.map((event: any)=>(
            <EventListItem 
              key={event.id} 
              event={event}
              selectEvent={selectEvent} />
        ))
    }
    </>
  )
}
