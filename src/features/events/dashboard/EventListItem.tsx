import { Button, Icon, Item, ItemDescription, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'


type Props = {
    event: AppEvent
    selectEvent: (event: AppEvent) => void
}



export default function EventListItem({event, selectEvent}:Props) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='tiny' circular src={event.hostPhotoURL || '/user.png'} />
                <Item.Content>
                    <Item.Header>
                        {event.title}
                    </Item.Header>
                    <ItemDescription>
                        {event.hostedBy} {event.hostedBy}
                    </ItemDescription>
                </Item.Content>
            </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
            <Icon name='clock' /> {event.date}
            <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
            {
                event.attendees.map((attendee: any)=>(
                    <EventListAttendee key={attendee.id} attendee={attendee} />
                ))
            }
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button 
          color='teal' 
          floated='right' 
          content='view'
          onClick={()=> selectEvent(event)}
          />
      </Segment>
    </SegmentGroup>
  )
}

