import React, { useState } from 'react';
import './style.css';

const testimonials = [
    { id: 1, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    { id: 2, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    { id: 3, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    { id: 4, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    { id: 5, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    { id: 6, author: "Emma K.", location: "Staten Island", feedback: "Coach Carlos has been incredible in helping my daughter develop her confidence in sprinting. His energy and attention to detail make every session engaging."},
    
];

export default function Testimonial() {
    const [index, setIndex] = useState(0);
    const itemsPerView = 3; // Number of visible testimonials

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - (itemsPerView - 1)));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + testimonials.length - (itemsPerView - 1)) % (testimonials.length - (itemsPerView - 1)));
    };

    return (
        <div className="testimonial-container">
            
            <div className="testimonial-slider">
                <button className="prev-btn" onClick={prevSlide}>&#10094;</button>

                <div className="testimonial-wrapper">
                    <div className="testimonial-container" style={{ transform: `translateX(-${index * 464}px)` }}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial">
                                <h1 className="testimonial-author">{testimonial.author}</h1>
                                <h4 className="testimonial-location">{testimonial.location}</h4>
                                <p className="testimonial-feedback">{testimonial.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="next-btn" onClick={nextSlide}>&#10095;</button>

                <div className="pagination">
                    {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, i) => (
                        <span key={i} className={`dot ${i === Math.floor(index / itemsPerView) ? 'active' : ''}`} onClick={() => setIndex(i * itemsPerView)}></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
