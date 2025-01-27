import {List, Image} from 'semantic-ui-react'


type Props = {
    attendee: Attendee
}

export default function EventListAttendee({attendee}: Props) {
  return (
    <List.Item>
        <Image size="mini" circular src={attendee.photoURL}></Image>
    </List.Item>
  )
}
