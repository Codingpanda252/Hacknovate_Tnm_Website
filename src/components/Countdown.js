import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-03-21') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="countdown-container">
            <h2 className="countdown-heading">Hackathon Begins In..</h2>
            <div className="timer">
                <div className="countdown-item" data-label="D">
                    <span className="countdown-value">{days}</span>
                    <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item" data-label="H">
                    <span className="countdown-value">{hours}</span>
                    <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item" data-label="M">
                    <span className="countdown-value">{minutes}</span>
                    <span className="countdown-label">Minutes</span>

                </div>
                <div className="countdown-item" data-label="S">
                    <span className="countdown-value">{seconds}</span>
                    <span className="countdown-label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
