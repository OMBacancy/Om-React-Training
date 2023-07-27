import {useState} from 'react';

export default function Input() {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setMessage(event.target.value);
    };

    return (
        <div>
            <h3><u>Enter your message here: </u></h3>
            <input
                type="text"
                id="message"
                onChange={handleChange}
            />
            <h3><u>Message: </u></h3>
            <h1>{message}</h1>
        </div>
    );
}