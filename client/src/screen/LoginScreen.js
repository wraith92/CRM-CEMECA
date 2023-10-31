import React,{useEffect,useState} from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { Form,Button,Row,Col } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/authAction";

const LoginScreen = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const auth=useSelector(state=>state.auth);
    const {loading,error,user}=auth;
    const redirect=location.search ? location.search.split('=')[1] : '/';
    useEffect(()=>{
        if(user){
            navigate(redirect)
        }
    },[navigate,redirect,user])
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(username,password));
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error !== undefined && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='username'
                        placeholder='Enter username'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer ?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );  
}
export default LoginScreen;