import EventCard from "../components/EventCard";


function EventPage() {
    return <div className=" mx-auto">
        <EventCard
        imageSrc="https://via.placeholder.com/300"
        title="Sample Event"
        date="June 24, 2024"
        location="New York, NY"
      />
    </div>;
}

export default EventPage;