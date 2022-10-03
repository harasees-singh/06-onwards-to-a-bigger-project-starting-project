import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'
const NewMeetup = () => {
    const router = useRouter();
    const onAddMeetup = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)
        router.push('/')
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}
export default NewMeetup;