import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Event Timeline</h2>
      <div className="timeline">
      <div className="timeline-event">
          <h3 className="timeline-event-header">Opening Ceremony</h3>
          <p className="timeline-event-description">Opening Ceremony at 10:20 am</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Entry Close</h3>
          <p className="timeline-event-description">Entry Closes at 11:00 am</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Hackathon Begins</h3>
          <p className="timeline-event-description">Hackathon Begins at 11:30 am</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Mentor Round 1</h3>
          <p className="timeline-event-description">Mentor Round 1 at 1:00 pm</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Mentor Round 2</h3>
          <p className="timeline-event-description">Mentor Round 2 at 2:00 pm</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Top 15 Teams Declaration</h3>
          <p className="timeline-event-description">Top 15 Teams Declaration at 2:15 pm</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Final Juding Round</h3>
          <p className="timeline-event-description">Final Judging Round and Presentation at 2:30 pm</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Top 3 Winners Declaration</h3>
          <p className="timeline-event-description">Winner Announcement at 3:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
