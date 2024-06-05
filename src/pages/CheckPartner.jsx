import React, { useEffect, useState } from 'react'

import PartySuggestionsComponent from '../components/DataPartners/PartySuggestionsComponent'
import CompanyData from '../components/DataPartners'
import { fetchCompanyData } from '../services/api'

import 'react-dadata/dist/react-dadata.css'

function CheckPartner() {
    const [value, setValue] = useState(null)
    const [companyData, setCompanyData] = useState('')
    const [financesData, setFinancesData] = useState('')
    const [inn, setInn] = useState('')
    useEffect(() => {
        if (inn) {
            fetchCompanyData(inn)
                .then(({ companyData, financesData }) => {
                    setCompanyData(companyData)
                    setFinancesData(financesData)
                })
                .catch(error => {
                    setCompanyData(null)
                    setFinancesData(null)
                    console.error('Error fetching company data:', error)
                })
        }
    }, [inn])
    useEffect(() => {
        setInn(value?.data?.inn || '')
    }, [value])

    return (
        <div className="container">
            <h2>Зачем проверять контрагентов</h2>
            <div className="partner-info">
                <div className="box__partner">
                    <h3> Вычислить фирму-однодневку.</h3>
                    <p>
                        Компанию могут зарегистрировать, только чтобы взять с заказчиков аванс и исчезнуть. У такой фирмы нет активов и
                        предпринимательской деятельности — только юрлицо и красивый сайт.
                    </p>
                </div>
                <div className="box__partner">
                    <h3>Получить обещанные платеж или услугу.</h3>
                    <p>
                        Подрядчики не всегда выполняют условия договора. К примеру, вы наняли строительную фирму, которая сделала
                        некачественный ремонт и отказалась платить неустойку. Возможно, это случилось не в первый раз и предыдущие заказчики
                        судились с фирмой. Проверить можно через сервис.
                    </p>
                </div>
                <div className="box__partner">
                    <h3> Не связаться с банкротом.</h3>
                    <p>
                        Если вы поставили товар компании в состоянии банкротства, она может не выплатить вам деньги. Придется начинать
                        процедуру возврата долгов. Это долго и сложно: долги отдают по очереди, которую определяет арбитражный суд в
                        соответствии с законом. Ждать очереди можно годами.
                    </p>
                </div>
            </div>
            <h2>Проверка Контрагентов</h2>
            <PartySuggestionsComponent value={value} onChange={setValue} />
            <CompanyData value={value} companyData={companyData} financesData={financesData} />
        </div>
    )
}

export default CheckPartner
