import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DummyMeetups = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Westminstpalace.jpg',
        address: 'Anna Nagar Chennai',
        description: 'This is first Meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Westminstpalace.jpg',
        address: 'Adayar Chennai',
        description: 'This is Second Meetup'
    }
]
function HomePage() {
  return <MeetupList meetups={DummyMeetups}/>
}

export default HomePage