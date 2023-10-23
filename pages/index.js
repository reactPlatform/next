import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { useEffect,useState } from 'react'
import { MongoClient } from 'mongodb'
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


export async function getStaticProps(){
    
    const client = await MongoClient.connect('mongodb+srv://sumathi291098:nsAJXuk1WXZzpF4d@cluster0.aucbino.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();
        client.close();
    return{
        props:{
           meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
           }))
           },
           revalidate: 1
        };
         
    }

export default HomePage