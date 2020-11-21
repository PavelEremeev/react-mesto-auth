import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import * as mestoAuth from "../mestoAuth"

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
        e.preventDefault();
        const { email, password } = data;

        if (password === password) {
            mestoAuth.register(email, password).then((res) => {
                if (res.statusCode !== 400) {
                    setMessage('');
                    history.push('/signin');
                } else {
                    setMessage(errorMessage.somethingWrong)
                }
            })
        }
    }

    return (
        <section className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__text">Регистрация</h2>
                <input
                    className="login__input"
                    placeholder="Email"
                    required
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    type="email"
                ></input>
                <input
                    className="login__input"
                    placeholder="Пароль"
                    required
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    type="password"
                ></input>
                <button type="submit" className="login__submit-button">Зарегистрироваться</button>
                <div className="login__container">
                    <h4 className="login__subtext">Уже зарегистрированы?</h4>
                    <Link to="/signin" className="login__link">Войти</Link>
                </div>
            </form>
        </section>
    )
}

export default Register