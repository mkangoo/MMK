import React, { useState } from 'react'
import { PartySuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'
import axios from 'axios'

function CheckPartner() {
    const [value, setValue] = useState(null)
    const [inn, setInn] = useState('')
    const [error, setError] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    const handleInputChange = e => {
        setInn(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const response = await axios.get(`https://api.checko.ru/v2/company`, {
                params: {
                    key: 'lhGppBEPlM0uY3oG',
                    inn: inn,
                },
            })
            setCompanyData(response.data)
            setError(null)
        } catch (err) {
            setError('Ошибка при выполнении запроса')
            setCompanyData(null)
        }
    }

    return (
        <div className="container">
            <div className="search-inn">
                <h2>Проверка контрагентов</h2>

                <PartySuggestions token="fbdf41f0f1c61a68f2dc892abfaa827082ecdec1" value={value} onChange={setValue} />
            </div>
            {value && (
                <div className="check__result">
                    <h3>Информация о контрагенте:</h3>
                    <ul>
                        <li>
                            <strong>Название:</strong> {value.data.name.full_with_opf}
                        </li>
                        <li>
                            <strong>ИНН:</strong> {value.data.inn}
                        </li>
                        <li>
                            <strong>ОГРН:</strong> {value.data.ogrn}
                        </li>
                        <li>
                            <strong>КПП:</strong> {value.data.kpp}
                        </li>
                        <li>
                            <strong>ОКВЭД:</strong> {value.data.okved}
                        </li>
                        <li>
                            <strong>Адрес:</strong> {value.data.address.value}
                        </li>
                        <li>
                            <strong>Статус:</strong> {value.data.state.status}
                        </li>
                        <li>
                            <strong>Дата регистрации:</strong> {new Date(value.data.state.registration_date).toLocaleDateString()}
                        </li>
                        <li>
                            <strong>Руководитель:</strong> {value.data.management.name}, {value.data.management.post}
                        </li>
                    </ul>
                </div>
            )}
            <div className="search-inn">
                <div className="search__title">
                    <h2>Проверка по ИНН</h2>
                </div>
                <form onSubmit={handleSubmit} className="check__input">
                    <div>
                        <input type="text" value={inn} onChange={handleInputChange} placeholder="Введите ИНН" />
                    </div>
                </form>
            </div>
            {error && <div className="error">{error}</div>}
            {companyData && (
                <div className="company-data">
                    <h3>Информация о компании:</h3>
                    <ul>
                        <li>
                            <strong>Сайт:</strong>
                            <br /> {companyData.data.Контакты?.ВебСайт || 'Нет данных'}
                        </li>
                        <li>
                            <strong>Почта:</strong>
                            {companyData.data.Контакты?.Емэйл?.map((mail, index) => <p key={index}>{mail}</p>) || 'Нет данных'}
                        </li>
                        <li>
                            <strong>Номера для связи:</strong>
                            {companyData.data.Контакты?.Тел?.map((phone, index) => <p key={index}>{phone}</p>) || 'Нет данных'}
                        </li>
                        <li>
                            <strong>Дата Регистрации:</strong> {companyData.data.ДатаРег || 'Нет данных'}
                        </li>
                        <li>
                            <strong>Санкции:</strong>
                            {companyData.data.СанкцииСтраны?.map((country, index) => <p key={index}>{country}</p>) || 'Нет данных'}
                        </li>
                    </ul>
                    <h3>Сотрудничество:</h3>
                    {companyData.data.СвязУчред && companyData.data.СвязУчред.length > 0 && (
                        <div className="partner__text">
                            {companyData.data.СвязУчред.map((obj, index) => (
                                <ul key={index}>
                                    <li>
                                        <strong>ОГРН:</strong> {obj.ОГРН}
                                    </li>
                                    <li>
                                        <strong>ИНН:</strong> {obj.ИНН}
                                    </li>
                                    <li>
                                        <strong>КПП:</strong> {obj.КПП}
                                    </li>
                                    <li>
                                        <strong>Полное наименование:</strong> {obj.НаимПолн}
                                    </li>
                                    <li>
                                        <strong>ОКВЭД:</strong> {obj.ОКВЭД}
                                    </li>
                                    <li>
                                        <strong>Статус:</strong> {obj.Статут}
                                    </li>
                                    <li>
                                        <strong>Юр Адрес:</strong> {obj.ЮрАдрес}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CheckPartner
