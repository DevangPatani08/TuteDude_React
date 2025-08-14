import React from 'react';

const DEFAULT_IMAGE = "https://placehold.co/150x150/cbd5e1/475569?text=No+Image";

const Profile = ({ person = {} }) => {
    const {
        image = DEFAULT_IMAGE,
        name = "Jhon Doe",
        age = "45",
        dob = "26/05/1979",
        bio = "Open to work, UI/UX Designer",
        email = "jhon.due@gmail.com",
        phone = "+91-12345-67890"
    } = person;
    
    return (
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden m-38 p-6 sm:p-8 max-w-sm mx-auto border border-gray-100">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md transform transition-transform duration-300 hover:scale-105">
                <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt={`Profile of ${name}`} onError={(e) => { e.target.onerror = null; e.target.src = DEFAULT_IMAGE; }} />
            </div>
            <div className="text-center mt-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">{name}</h2>
                <p className="mt-2 text-lg text-gray-600">
                    Age: <span className="font-semibold text-gray-800">{age}</span>
                </p>
                <p className="text-md text-gray-500">
                    DOB: <span className="font-medium text-gray-700">{dob}</span>
                </p>
            </div>
            <div className="mt-6 text-center text-gray-700 leading-relaxed">
                <p>{bio}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 w-full text-center">
                <p className="text-md text-gray-700 flex items-center justify-center space-x-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a>
                </p>
                <p className="text-md text-gray-700 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href={`tel:${phone}`} className="text-indigo-600 hover:underline">{phone}</a>
                </p>
            </div>
        </div>
    );
};

export default Profile;