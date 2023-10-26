'use client'

import { useState } from "react"

function Login() {
    const [user, setUser] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    console.log(user);

        

    return (
        <form onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" value={ user } onChange={ (e) => setUser(e.target.value) } />
            <button type="submit">Sign In</button>
        </form>
      )
    }

export default Login