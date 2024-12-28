import './BhiveAmenities.css';

function BhiveAmenities() {
    const features = [
        { image: '/public/images/events2.png', name: 'Community Events' },
        { image: '/public/images/gym.png', name: 'Gym Facilities' },
        { image: '/public/images/wifi.png', name: 'High-Speed WiFi' },
        { image: '/public/images/tea_cafe.png', name: 'Cafe & Tea Bar' },
        { image: '/public/images/affordable.png', name: 'Affordable' },
        { image: '/public/images/lounges.png', name: 'Comfort Lounges' },
        { image: '/public/images/quickBooking.png', name: 'Quick Booking' },
        { image: '/public/images/sports.png', name: 'Sports Area' },
    ];

    return (
        <div className="amenities">
            <h2 className="advantagesQuestion">Why choose us?</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <div className="image-container">
                            <img src={feature.image} alt={feature.name} />
                        </div>
                        <span className="featureName">{feature.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BhiveAmenities;
