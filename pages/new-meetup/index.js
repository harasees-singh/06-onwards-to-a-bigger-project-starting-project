import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetup = () => {
    const onAddMeetup = (enteredMeetupData) => {
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}
export default NewMeetup;