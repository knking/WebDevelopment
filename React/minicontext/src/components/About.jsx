import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


function About() {
    const {user} = useContext(UserContext)

    if (!user) return <div>About</div>

    return <div>About {user.password}</div>
}

export default About