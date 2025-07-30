import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import ProfileForm from '../components/Profile/ProfileForm';

const ProfilePage = () => {
    const { user, totalExpenses, savings } = useFinance();
    const [isEditing, setIsEditing] = useState(false);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(amount).replace('INR', user.currency);
    };

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            {!isEditing ? (
                <div className="profile-info">
                    <div className="profile-details">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Currency:</strong> {user.currency}</p>
                    </div>
                    <div className="profile-stats">
                        <h3>Lifetime Statistics</h3>
                        <p><strong>Total Expenses:</strong> {formatCurrency(totalExpenses)}</p>
                        <p><strong>Total Savings:</strong> {formatCurrency(savings)}</p>
                    </div>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <ProfileForm user={user} onClose={() => setIsEditing(false)} />
            )}
        </div>
    );
};

export default ProfilePage;