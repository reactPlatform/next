import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = () => {
  return (
    <MeetupDetail 
        image='https://upload.wikimedia.org/wikipedia/commons/3/39/Westminstpalace.jpg'
        title='First Meetup'
        address='Some street 5, Some City'
        description='This is the first meetup'
    />
        
    
  )
}
export async function getStaticPaths(){
  return{
      fallback: true,
      paths: [ 
          {
          params: {
              meetupid: 'm1',
          },
          params: {
              meetupid: 'm2',
          },
      }
      ],
  }
}
export async function getStaticProps(context){
  const meetupid = context.params.meetupid;
  return{
      props:{
         meetupData: {
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Westminstpalace.jpg',
          id: meetupid,
          title: 'First Meetup',
          address: 'Some street',
          description: 'This is first meetup',
         },
      },
      revalidate: 1 
  };
}

export default MeetupDetails