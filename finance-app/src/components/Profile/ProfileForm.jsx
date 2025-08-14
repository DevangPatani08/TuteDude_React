import { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';

const ProfileForm = ({ user, onClose }) => {
    const { updateUser } = useFinance();
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        currency: user.currency
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
        onClose();
    };

    const currencies = [
        { symbol: '₹', name: 'Indian Rupee' },
        { symbol: '$', name: 'US Dollar' },
        { symbol: '€', name: 'Euro' },
        { symbol: '£', name: 'British Pound' },
        { symbol: '¥', name: 'Japanese Yen' }
    ];

    return (
        <div className="modal-overlay">
            <div className="modal card">
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Default Currency</label>
                        <select name="currency" value={formData.currency} onChange={handleChange} required >
                            {currencies.map(currency => (
                                <option key={currency.symbol} value={currency.symbol}>
                                    {currency.symbol} - {currency.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;