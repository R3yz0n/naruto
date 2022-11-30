import React, { useState } from 'react'

const InputField = (p) => {
    const [email, setEmail] = useState({ email: '' });

    const addEmail = (e) => {

        setEmail({ ...email, [e.target.name]: e.target.value });



    }

    return <input type={p.type} value={email.email} onChange={addEmail} name={p.placeholder.toLowerCase()} placeholder={p.placeholder} className={p.style} />



}

export default InputField;