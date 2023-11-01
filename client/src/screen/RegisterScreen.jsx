import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/registerAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [role, setRole] = useState('user')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userRegister = useSelector(state => state.register)
    const { loading, error, userInfo } = userRegister
    useEffect(() => {
        if (userInfo) {
            setTimeout(() => {
                navigate(redirect)
            }, 5000)

        }
    }, [navigate, redirect, userInfo])
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password, role))
        }
    }
    return (
        <FormContainer>
            <h1>
                Sign Up
            </h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error.message}</Message>}
            {userInfo && <Message variant='success'>Register Success</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='username'
                        placeholder='Enter username'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='role'>
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                        as='select'
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value='3'>User</option>
                        <option value='1'>Admin</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>
        </FormContainer>
    )
}

export default RegisterScreen