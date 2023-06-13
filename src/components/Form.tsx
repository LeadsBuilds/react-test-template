import React, { useRef, useState } from "react";
import { useAddAttendee } from "../state/hooks/useAddAttendee";
import { useErrorMessage } from "../state/hooks/useErrorMessage";

const Form = () => {

    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const addToList = useAddAttendee();

    const errorMessage = useErrorMessage();

    const addAttendee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToList(name);
        setName('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={addAttendee}>
            <input
                ref={inputRef}
                value={name}
                onChange={e => setName(e.target.value)} 
                type="text" 
                placeholder="Type here the name of the attendees" />
            <button disabled={!name}>Add</button>
            {errorMessage && <p role="alert">{errorMessage}</p>}
        </form>
    );
}

export default Form;