import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import MovieService from "../API/MovieService"
import { Button } from "../components/Button/Button"
import { Context } from "../context"
import styled from "styled-components"

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 320px;
    margin: 0 auto;
    padding: 20px;
    color: grey;

    input {
        width: 100%;
        height: 30px;
        border: 2px solid black;
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }
`

export const Login: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [user, setUser] = useContext(Context)
    const navigate = useNavigate()

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value

        if (name === "username") {
            setUsername(value)
        } else {
            setPassword(value)
        }
    }

    const handleSubmit = async () => {
        setError(false)
        try {
            const requestToken = await MovieService.getRequestToken()
            const sessionId = await MovieService.authenticate(requestToken.request_token, username, password)
            setUser({ sessionId: sessionId.session_id, username })
            navigate(`/`)
        } catch (error) {
            setError(true)
        }
    }

    return (
        <Wrapper>
            {error && <h1>Error</h1>}
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} name="username" onChange={handleInput} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={password} onChange={handleInput} />
            <Button text={"Login"} onClick={handleSubmit} />
        </Wrapper>
    )
}
