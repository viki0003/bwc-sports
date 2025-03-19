import React, { useState } from 'react';
import './style.css';

const testimonials = [
    { id: 1, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    { id: 2, author: "John D.", location: "Brooklyn", feedback: "Training with Coach Carlos has significantly improved my speed and endurance. Highly recommend!"},
    { id: 3, author: "Sophia L.", location: "Manhattan", feedback: "The personalized coaching approach really made a difference in my technique."},
    { id: 4, author: "Michael B.", location: "Queens", feedback: "Great sessions with Coach Carlos! Very insightful and motivating."},
    { id: 5, author: "Olivia R.", location: "Bronx", feedback: "My son enjoys every session and has improved tremendously."},
    { id: 6, author: "William C.", location: "Jersey City", feedback: "Top-notch training! Coach Carlos knows exactly how to push athletes to their best."},
];

export default function Testimonial() {
    const [pageIndex, setPageIndex] = useState(0);
    const itemsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1300 ? 2 : 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerView);

    const handlePaginationClick = (index) => {
        setPageIndex(index);
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-slider">
                <div className="testimonial-wrapper">
                    <div 
                        className="testimonial-list"
                        style={{ transform: `translateX(-${pageIndex * 100}%)`, display: 'flex', transition: 'transform 0.5s ease-in-out' }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial">
                                <h1 className="testimonial-author">{testimonial.author}</h1>
                                <h4 className="testimonial-location">{testimonial.location}</h4>
                                <p className="testimonial-feedback">{testimonial.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <span key={i} className={`dot ${i === pageIndex ? 'active' : ''}`} onClick={() => handlePaginationClick(i)}></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
