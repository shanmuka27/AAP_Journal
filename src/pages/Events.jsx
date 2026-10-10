import './Events.css'

const upcomingEvent = {
  title: 'Beyond the Degree: Paths Into Law',
  description: 'Join us for a conversation with attorneys about finding your path into law, navigating the profession, and how their South Asian identity shapes their experiences. All students are welcome!',
  date: 'October 20',
  time: '6–7 p.m. ET',
  location: 'Virtual (Zoom)',
  rsvpUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfREC-4htIjCqiZnhy68UQJofXsTTPIyGPMaNJa5VjxBKuNXw/viewform?usp=dialog',
}

function Events() {
  return (
    <div className="events-page">
      <div className="page-header">
        <div className="container">
          <h1>Events</h1>
          <p>Join conversations at the intersection of law, science, and society</p>
        </div>
      </div>

      <section className="events-content">
        <div className="container">
          <article className="event-card">
            <span className="event-label">Upcoming event</span>
            <h2>{upcomingEvent.title}</h2>
            <p>{upcomingEvent.description}</p>
            <p className="event-timing">
              Date: {upcomingEvent.date}<br />
              Time: {upcomingEvent.time}<br />
              Location: {upcomingEvent.location}
            </p>
            <a className="btn btn-primary event-rsvp" href={upcomingEvent.rsvpUrl} target="_blank" rel="noopener noreferrer">
              RSVP
            </a>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Events
