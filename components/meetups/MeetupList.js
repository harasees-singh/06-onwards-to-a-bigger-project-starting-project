import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import tanjiro from '../../public/atcoder.png';
import Image from 'next/image'
function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {/* <Image
                src={tanjiro}
                alt='something'
                height='40%'
                width='40%'
            /> */}
            {props.meetups.map((meetup, index) => (
                <MeetupItem
                    key={index}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    );
}

export default MeetupList;
