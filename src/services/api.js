import axios from 'axios'

export const fetchCompanyData = async inn => {
    const response = await axios.get('https://api.checko.ru/v2/company', {
        params: {
            key: 'lhGppBEPlM0uY3oG',
            inn: inn,
        },
    })
    return response.data
}
