import React, { useState, useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineContainer = document.querySelector('.timeline-container');
      if (timelineContainer) {
        const timelineContainerTop = timelineContainer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (timelineContainerTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
        
        // Calculate the progress based on scroll position
        const timelineEvents = document.querySelectorAll('.timeline-event');
        const lastEvent = timelineEvents[timelineEvents.length - 1];
        const lastEventTop = lastEvent.getBoundingClientRect().top;
        const containerHeight = timelineContainer.clientHeight;
        const progress = Math.min(1, Math.max(0, 1 - (lastEventTop + containerHeight) / containerHeight));
        setProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once to initialize the progress

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`timeline-container ${isVisible ? 'visible' : ''}`}>
      <h2 className="timeline-heading">Event Timeline</h2>
      <div className="progress-tracker">
        <div className="progress-bar" style={{ height: `${progress * 100}%` }} />
      </div>
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
