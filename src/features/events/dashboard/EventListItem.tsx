import { Button, Icon, Item, ItemDescription, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'


type Props = {
    event: AppEvent
}



export default function EventListItem({event}:Props) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
            <Item>
                <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                <Item.Content>
                    <Item.Header>
                        Event Title
                    </Item.Header>
                    <ItemDescription>
                        Hosted by {event.hostedBy}
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
        <Button color='teal' floated='right' content='view'/>
      </Segment>
    </SegmentGroup>
  )
}

