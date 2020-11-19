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
        e.preventDefault();
        const { email, password } = data;

        if (password === confirmPassword) {
            mestoAuth.register(email, password).then((res) => {
                if (res.statusCode !== 400) {
                    setMessage(''),
                        history.push('/sign-in');
                } else {
                    setMessage(errorMessage.somethingWrong)
                }
            })
        }
    }

    return (
        <section className="signup">
            <form className="signup__form" onSubmit={handleSubmit}>
                <h2 className="signup__title">Регистрация</h2>
                <input
                    className="popup__input popup__input_signup"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={handleChange}
                    type="email"
                ></input>
                <input
                    className="popup__input popup__input_signup"
                    placeholder="Пароль"
                    required
                    value={data.password}
                    onChange={handleChange}
                    type="password"
                ></input>
                <button type="submit" className="popup__submit-button popup__submit-button_signup">Зарегистрироваться</button>
                <div className="signup__container">
                    <h6 className="signup__text">Уже зарегистрированы?</h6>
                    <Link to="/sign-in" className="signup__link">Вход</Link>
                </div>
            </form>
        </section>
    )
}

export default Register