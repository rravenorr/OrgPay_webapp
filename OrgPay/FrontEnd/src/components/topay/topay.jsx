// topay.jsx
import React, { useState } from 'react';
import "./topay.css";

const Note = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [amount, setAmount] = useState('');
    const [isEditing, setIsEditing] = useState(true); // State to toggle editing

    const handleSave = () => {
        onSave({ title, details, amount });
        setTitle('');
        setDetails('');
        setAmount('');
        setIsEditing(false);
    };

    return (
        <div className="noteContainer">
            <div className='note'>
                {isEditing ? (
                    <React.Fragment>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Details"
                        ></textarea>
                        <div className='note-footer'>
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Amount"
                            />
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h3>{title}</h3>
                        <p>{details}</p>
                        <small>{amount}</small>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default Note;
