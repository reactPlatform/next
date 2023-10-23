import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient,ObjectId } from "mongodb"
const MeetupDetails = (props) => {
  console.log(props)
  return (
    <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
        
    
  )
}
export async function getStaticPaths(){
  const client = await MongoClient.connect('mongodb+srv://sumathi291098:nsAJXuk1WXZzpF4d@cluster0.aucbino.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); 
        client.close();
  return{
      fallback: false,
      paths: meetups.map(meetup =>({params: {meetupid: meetup._id.toString()},
    })),
  };
}

export async function getStaticProps(context){
  debugger
  const meetupid = context.params.meetupid;
  
  const client = await MongoClient.connect('mongodb+srv://sumathi291098:nsAJXuk1WXZzpF4d@cluster0.aucbino.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupid)}); 
  console.log(selectedMeetup)
  client.close();
  return{
      props:{
        meetupData: {
         id: selectedMeetup._id.toString(),
         title: selectedMeetup.title,
         address: selectedMeetup.address,
         image: selectedMeetup.image,
         description: selectedMeetup.description,
        },
         
      },
      revalidate: 1 
  };
}

export default MeetupDetails