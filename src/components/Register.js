import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const errorMessage = { somethingWrong: 'Что-то пошло не так! :(' }



const Register = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        const { email, password } = data;

        if (password === confirmPassword) {
            mestoAuth.register(email, password).then((res) => {
                if (res.statusCode !== 400) {
                    setMessage(''),
                        history.push('/login');
                } else {
                    setMessage(errorMessage.somethingWrong)
                }
            })
        }
    }
}

export default Register