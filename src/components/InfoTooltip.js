import React from "react"
import successPicture from "../images/successPicture.svg";
import accessDenied from "../images/accessDenied.svg";


const InfoTooltip = ({ isOpen, onClose, loggedIn }) => {

    const loginInfo = {
        success: 'Вы успешно зарегистрировались',
        denied: 'Что-то пошло не так! Попробуйте еще раз'
    }

    return (
        <div className={`popup ${isOpen ? `popup_opened` : ""}`}>
            <button
                className="popup__close-button"
                type="button"
                onClick={onClose}
            ></button>
            <img className="popup__image-login" src={loggedIn ? successPicture : accessDenied} />
            <h2 className="popup__text">
                {loggedIn ? loginInfo.success : loginInfo.denied}
            </h2>
        </div>
    )
}


export default InfoTooltip