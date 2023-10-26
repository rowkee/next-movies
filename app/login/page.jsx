'use client'

import { useState } from "react"

function Login() {
    const [user, setUser] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    console.log(user);

        

    return (
        <div >
            <label >Username</label>
            <input type="text" value={ user } onChange={ (e) => setUser(e.target.value) } />
            <button type="submit" onClick={handleSubmit}>Sign In</button>
        </div>
      )
    }

export default Login