import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { useEffect,useState } from 'react'
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
    const [loadedMeetups,setLoadedMeetups] = useState([]);
useEffect(()=>{
    setLoadedMeetups(DummyMeetups);
},[])

  return <MeetupList meetups={loadedMeetups}/>
}


export async function getStaticProps(context){
    // const meetupid = context.params.meetupid;
    return{
        props:{
           meetups: DummyMeetups
           },
           revalidate: 1
        };
         
    }

export default HomePage