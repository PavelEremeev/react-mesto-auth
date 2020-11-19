import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
                    handleLogin(data.user)
                    history.push('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="signin">
            <form className="signin__form" onSubmit={handleSubmit}>
                <h2 className="popup__text popup__text_signin">Вход</h2>
                <input
                    className="popup__input popup__input_signin"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={handleChange}
                    type="email"
                ></input>
                <input
                    className="popup__input popup__input_signin"
                    placeholder="Пароль"
                    required
                    value={data.password}
                    onChange={handleChange}
                    type="password"
                ></input>
                <button type="submit" className="popup__submit-button popup__submit-button_signin">Войти</button>
            </form>
        </section>
    )
}

export default Login 