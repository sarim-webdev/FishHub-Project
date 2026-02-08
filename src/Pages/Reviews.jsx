import React, { useEffect, useState } from "react";

const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 500; 
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 5; 

            if (start >= end) {
                start = end;
                clearInterval(timer);
            }

            setCount(start);
        }, stepTime);

        return () => clearInterval(timer);
    }, [end]);

    return <h2>{count}+</h2>;
};

const reviews = [
    {
        rating: 5,
        text: "Extremely fresh fish. Packaging was perfect and delivery was very fast.",
        name: "Priya Sharma",
        role: "Home Chef, Mumbai",
    },
    {
        rating: 5,
        text: "Hilsa quality is authentic. Tastes exactly like Kolkata market fish.",
        name: "Rajiv Chatterjee",
        role: "Food Blogger, Delhi",
    },
    {
        rating: 4,
        text: "Salmon fillets were clean and fresh. Slight delay in delivery but good service.",
        name: "Anjali Mehta",
        role: "Interior Designer, Bangalore",
    },
    {
        rating: 5,
        text: "Best seafood website. Will order again for sure.",
        name: "Arjun Verma",
        role: "Restaurant Owner, Pune",
    },
];

const Stars = ({ count }) => {
    return (
        <div className="stars">
            {[...Array(5)].map((_, i) => (
                <span key={i}>{i < count ? "⭐" : "☆"}</span>
            ))}
        </div>
    );
};

const Reviews = () => {
    const avg =
        (
            reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1);

    return (
        <div className="reviews-container">
            <h1 className="reviews-title">Customer Reviews</h1>
            <div className="review-summary-box">

                <div className="summary-left">
                    <h1 className="avg-number">{avg}</h1>
                    <Stars count={Math.round(avg)} />
                    <p>{reviews.length} Verified Reviews</p>
                </div>
                <div className="summary-right">
                    {[5, 4, 3, 2, 1].map(num => {
                        const percent =
                            (reviews.filter(r => r.rating === num).length / reviews.length) * 100;
                        return (
                            <div key={num} className="bar-row">
                                <span>{num} ⭐</span>
                                <div className="bar">
                                    <div
                                        className="fill"
                                        style={{ width: percent + "%" }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="reviews-grid">
                {reviews.map((r, i) => (
                    <div key={i} className="review-card">
                        <h4>{r.name}</h4>
                        <p className="review-text">"{r.text}"</p>
                        <span>{r.role}</span>
                        <Stars count={r.rating} />
                    </div>
                ))}
            </div>
            <div className="top-products">
                <h2 className="top-title">Top Rated Products</h2>

                <div className="top-grid">

                    <div className="top-card">
                        <Counter end={320} />
                        <h4>Pomfret</h4>
                    </div>

                    <div className="top-card">
                        <Counter end={280} />
                        <h4>Hilsa</h4>
                    </div>

                    <div className="top-card">
                        <Counter end={250} />
                        <h4>Salmon</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
