import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/registerAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import GenericForm from "../components/GenericForm";
import { fields } from "../data/GFRegisterFields";

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
    const submitHandler = (formData) => {
        const { password, confirmPassword } = formData;
    
        if (password !== confirmPassword) {
          setMessage('Passwords do not match');
        } else {
          // Use formData.role instead of the role state
          dispatch(register(formData.username, formData.email, formData.password, formData.role));
          console.log(formData);
        }
      };
    const AddUserForm = ({ onSubmit }) => {
        return <GenericForm fields={fields} onSubmit={onSubmit} />;
      };
    return (
        <FormContainer>
            <h1>
                Sign Up
            </h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error.message}</Message>}
            {userInfo && <Message variant='success'>Register Success</Message>}
            {loading && <Loader />}
            <AddUserForm fields={fields} onSubmit={submitHandler} />
        </FormContainer>
    )
}

export default RegisterScreen