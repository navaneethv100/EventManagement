import { AppEvent } from "../../../app/types/Events";
import EventListItem from "./EventListItem";

type Props = {
    events: AppEvent[]
}


export default function EventList({events}: Props) {
  return (
    <>
    {
        events.map((event: any)=>(
            <EventListItem key={event.id} event={event} />
        ))
    }
    </>
  )
}
