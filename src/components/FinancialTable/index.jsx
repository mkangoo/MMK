import { financialIndicators } from './keysDataMapping'

function FinancialTable({ data }) {
    if (!data || Object.keys(data).length === 0) {
        return <div>Данные не загружены</div>
    }

    const years = [2017, 2018, 2019, 2020, 2021]
    const getValue = value => {
        if (value && typeof value === 'object') {
            return value['СумОтч'] !== undefined ? value['СумОтч'] : 'N/A'
        }
        return 'N/A'
    }

    return (
        <div className="financial-table">
            <h2>Финансовые показатели</h2>
            <table>
                <thead>
                    <tr>
                        <th>Наименование показателя</th>
                        {years.map(year => (
                            <th key={year}>{year}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(financialIndicators).map(([key, indicator]) => (
                        <tr key={key}>
                            <td>{indicator}</td>
                            {years.map(year => (
                                <td key={year}>{getValue(data[year] && data[year][key])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FinancialTable
