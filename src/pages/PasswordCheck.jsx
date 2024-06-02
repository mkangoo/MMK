import React, { useState } from 'react'

import SimpleSlider from '../components/SimpleSlider'

import stage1 from '../assets/img/stage1.png'
import stage2 from '../assets/img/stage2.png'
import stage3 from '../assets/img/stage3.png'
import stage4 from '../assets/img/stage4.png'

function PasswordCheck() {
    const [password, setPassword] = useState('')
    const [validationMessage, setValidationMessage] = useState('')

    const validatePassword = pwd => {
        const minLength = 10
        const hasLowerCase = /[a-z]/.test(pwd)
        const hasUpperCase = /[A-Z]/.test(pwd)
        const hasDigit = /\d/.test(pwd)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd)

        if (pwd.length < minLength) {
            return 'Пароль должен содержать не менее 10 символов.'
        }
        if (!hasLowerCase) {
            return 'Пароль должен содержать хотя бы одну маленькую букву.'
        }
        if (!hasUpperCase) {
            return 'Пароль должен содержать хотя бы одну большую букву.'
        }
        if (!hasDigit) {
            return 'Пароль должен содержать хотя бы одну цифру.'
        }
        if (!hasSpecialChar) {
            return 'Пароль должен содержать хотя бы один специальный символ.'
        }
        return 'Пароль надежен и валиден.'
    }

    const handlePasswordChange = e => {
        const newPassword = e.target.value
        setPassword(newPassword)
        if (newPassword.length > 0) {
            const validationMsg = validatePassword(newPassword)
            setValidationMessage(validationMsg)
        } else {
            setValidationMessage('')
        }
    }

    const passwordItems = [
        { title: '12 символов', img: stage1 },
        { title: '18 символов', img: stage2 },
        { title: '19 символов', img: stage3 },
        { title: '25 символов', img: stage4 },
    ]

    return (
        <div className="container">
            <div className="password-info">
                <h2>Проверка стойкости пароля</h2>
            </div>
            <div className="password-container">
                <label htmlFor="password-input">Введите пароль:</label>
                <div className="password__input">
                    <input id="password-input" type="text" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="validation-message">{validationMessage}</div>
            </div>
            <div className="example-password">
                <SimpleSlider items={passwordItems} />
            </div>
        </div>
    )
}

export default PasswordCheck
