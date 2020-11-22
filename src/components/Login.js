import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as mestoAuth from "../mestoAuth"

const errorMessage = { somethingWrong: 'Что-то пошло не так! :(' }

const Login = ({ handleLogin }) => {
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
        e.preventDefault();
        const { email, password } = data;

        if (!email || !password) {
            return;
        }
        mestoAuth.authorize(email, password)
            .then((data) => {
                if (!data) {
                    setMessage(errorMessage.somethingWrong)
                }
                if (data.jwt) {
                    setData({ email: '', password: '' });
                    setMessage('');
                    handleLogin(data.token)
                    history.push('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="login" >
            <form className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__text">Вход</h2>
                <input
                    className="login__input"
                    placeholder="Email"
                    required
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                ></input>
                <input
                    className="login__input"
                    placeholder="Пароль"
                    required
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                ></input>
                <button type="submit" className="login__submit-button">Войти</button>
            </form>
        </section>
    )
}

export default Login 