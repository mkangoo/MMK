import React from 'react'

const PartnerShip = ({ companyData }) => {
    if (!companyData || !companyData.data) {
        return null
    }

    const { СвязУчред } = companyData.data

    if (!СвязУчред || СвязУчред.length === 0) {
        return []
    }

    return (
        <div className="partner__data">
            <h3>Сотрудничество:</h3>
            <div className="partner__text">
                {СвязУчред.map((obj, index) => (
                    <ul key={index}>
                        <li>
                            <strong>Полное наименование:</strong> {obj.НаимПолн}
                        </li>
                        <li>
                            <strong>Юр Адрес:</strong> {obj.ЮрАдрес}
                        </li>
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
                            <strong>ОКВЭД:</strong> {obj.ОКВЭД}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default PartnerShip
