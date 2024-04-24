import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Event Timeline</h2>
      <div className="timeline">
      <div className="timeline-event">
          <h3 className="timeline-event-header">Opening Ceremony</h3>
          <p className="timeline-event-description">Reporting time at 12:00 am</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Hacknovate Begins</h3>
          <p className="timeline-event-description">Hacknovate Begins at 12:30 am</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Top 20 teams Final Presentation</h3>
          <p className="timeline-event-description">Pitching round at 1:30 pm</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Lunch Break</h3>
          <p className="timeline-event-description">Lunch Break at 2:30 pm</p>
        </div>
        <div className="timeline-event">
          <h3 className="timeline-event-header">Judges Evaluation and Result Declaration</h3>
          <p className="timeline-event-description">Winner Declaration at 4:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
