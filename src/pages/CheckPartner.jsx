import React, { useEffect, useState } from 'react'

import PartySuggestionsComponent from '../components/CheckPartner/PartySuggestionsComponent'
import CompanyData from '../components/CheckPartner/CompanyData'
import { fetchCompanyData } from '../services/api'

import 'react-dadata/dist/react-dadata.css'

function CheckPartner() {
    const [value, setValue] = useState(null)
    const [companyData, setCompanyData] = useState('')
    const [inn, setInn] = useState('')

    console.log(companyData)
    useEffect(() => {
        if (inn) {
            fetchCompanyData(inn)
                .then(data => setCompanyData(data))
                .catch(() => setCompanyData(''))
        }
    }, [inn])

    useEffect(() => {
        setInn(value?.data?.inn || '')
    }, [value])

    return (
        <div className="container">
            <div className="partner-info">
                <h2>Зачем проверять контрагентов</h2>
                <div className="partner-info__text">
                    <p>
                        ФНС требует от бизнеса проверять контрагентов до начала сотрудничества. Эту практику называют должной
                        осмотрительностью. Проверка снимает с компании подозрения налоговой в обмане и помогает избежать убытков.
                    </p>
                    <p>Вот случаи, в которых вам поможет сервис проверки контрагентов.</p>
                    <p>
                        <strong> Вычислить фирму-однодневку.</strong> Компанию могут зарегистрировать, только чтобы взять с заказчиков аванс
                        и исчезнуть. У такой фирмы нет активов и предпринимательской деятельности — только юрлицо и красивый сайт.
                    </p>
                    <p>
                        <strong> Получить обещанные платеж или услугу.</strong> Подрядчики не всегда выполняют условия договора. К примеру,
                        вы наняли строительную фирму, которая сделала некачественный ремонт и отказалась платить неустойку. Возможно, это
                        случилось не в первый раз и предыдущие заказчики судились с фирмой. Проверить можно через сервис.
                    </p>
                    <p>
                        <strong> Не связаться с банкротом.</strong> Если вы поставили товар компании в состоянии банкротства, она может не
                        выплатить вам деньги. Придется начинать процедуру возврата долгов. Это долго и сложно: долги отдают по очереди,
                        которую определяет арбитражный суд в соответствии с законом. Ждать очереди можно годами.
                    </p>
                </div>
            </div>
            <h2>Проверка Контрагентов</h2>
            <PartySuggestionsComponent value={value} onChange={setValue} />
            <CompanyData value={value} companyData={companyData} />
        </div>
    )
}

export default CheckPartner
