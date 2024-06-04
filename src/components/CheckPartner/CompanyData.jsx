import React from 'react'

import { formatDate } from '../../utils/formatData'
import PartnerShip from '../PartnerShip'

const CompanyData = ({ value, companyData }) => {
    return (
        <>
            {value && (
                <div className="search__data">
                    <h2>Информация о контрагенте:</h2>
                    <ul>
                        <li>
                            <strong>Название:</strong> <p>{value.data.name.full_with_opf}</p>
                        </li>
                        <li>
                            <strong>ИНН:</strong>
                            <p>{value.data.inn}</p>
                        </li>
                        <li>
                            <strong>ОГРН:</strong>
                            <p>{value.data.ogrn}</p>
                        </li>
                        <li>
                            <strong>КПП:</strong>
                            <p>{value.data.kpp}</p>
                        </li>
                        <li>
                            <strong>ОКВЭД:</strong>
                            <p>{value.data.okved}</p>
                        </li>
                        <li>
                            <strong>Адрес:</strong>
                            <p>{value.data.address.value}</p>
                        </li>
                        <li>
                            <strong>Статус:</strong>
                            <p>{value.data.state.status}</p>
                        </li>
                        <li>
                            <strong>Дата регистрации:</strong>
                            <p>{formatDate(value.data.state.registration_date)}</p>
                        </li>
                        <li>
                            <strong>Руководитель:</strong>
                            <p>
                                {value.data.management.name}, {value.data.management.post}
                            </p>
                        </li>
                    </ul>
                    {companyData && (
                        <>
                            <ul>
                                <li>
                                    <strong>Сайт:</strong>
                                    <p>{companyData.data.Контакты?.ВебСайт || 'Нет данных'}</p>
                                </li>
                                <li>
                                    <strong>Почта:</strong>
                                    {companyData.data.Контакты?.Емэйл?.map(mail => <p key={mail}>{mail}</p>) || 'Нет данных'}
                                </li>
                                <li>
                                    <strong>Номера для связи:</strong>
                                    {companyData.data.Контакты?.Тел?.map(phone => <p key={phone}>{phone}</p>) || 'Нет данных'}
                                </li>
                                <li>
                                    <strong>Дата Регистрации:</strong>
                                    <p>{companyData.data.ДатаРег || 'Нет данных'}</p>
                                </li>
                                <li>
                                    <strong>Санкции:</strong>
                                    {companyData.data.СанкцииСтраны?.map(country => <p key={country}>{country}</p>) || 'Нет данных'}
                                </li>
                            </ul>
                        </>
                    )}
                    <PartnerShip companyData={companyData} />
                </div>
            )}
        </>
    )
}

export default CompanyData
