import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
    const user = {
        name: 'Alex Johnson',
        age: 28,
        dob: 'June 15, 1995',
        email: 'alex.johnson@example.com',
        phone: '(123) 456-7890',
        address: '123 Main St, Anytown, USA',
        occupation: 'Software Developer',
        hobbies: ['Hiking', 'Photography', 'Reading'],
        bio: 'Passionate about technology and outdoor activities. Always looking to learn new things and take on challenging projects.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    };

    return (
        <div className="user-info">
            <h2>User Information</h2>
            <div className="user-profile">
                <div className="user-image">
                    <img src={user.image} alt={user.name} />
                </div>
                <div className="user-details">
                    <h3>{user.name}</h3>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Date of Birth:</strong> {user.dob}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Occupation:</strong> {user.occupation}</p>
                    <p><strong>Hobbies:</strong> {user.hobbies.join(', ')}</p>
                </div>
            </div>
            <div className="user-bio">
                <h3>Bio</h3>
                <p>{user.bio}</p>
            </div>
        </div>
    );
};

export default UserInfo;