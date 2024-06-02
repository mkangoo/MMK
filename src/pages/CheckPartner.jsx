import { useState } from 'react'
import { PartySuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

function CheckPartner() {
    const [value, setValue] = useState('')
    console.log(value)
    return (
        <div className="container">
            <h2>Проверка контрагентов</h2>
            <div className="check">
                <div className="check__input">
                    <PartySuggestions token="fbdf41f0f1c61a68f2dc892abfaa827082ecdec1" value={value} onChange={setValue} />
                </div>
                {value && (
                    <div className="check__result">
                        <h3>Информация о контрагенте:</h3>
                        <p>
                            <strong>Название:</strong> {value.data.name.full_with_opf}
                        </p>
                        <p>
                            <strong>ИНН:</strong> {value.data.inn}
                        </p>
                        <p>
                            <strong>ОГРН:</strong> {value.data.ogrn}
                        </p>
                        <p>
                            <strong>КПП:</strong> {value.data.kpp}
                        </p>
                        <p>
                            <strong>ОКВЭД</strong> {value.data.okved}
                        </p>
                        <p>
                            <strong>Адрес:</strong> {value.data.address.value}
                        </p>
                        <p>
                            <strong>Статус:</strong> {value.data.state.status}
                        </p>
                        <p>
                            <strong>Дата регистрации:</strong> {new Date(value.data.state.registration_date).toLocaleDateString()}
                        </p>
                        <p>
                            <strong>Руководитель:</strong> {value.data.management.name}, {value.data.management.post}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckPartner
