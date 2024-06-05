import axios from 'axios'

const API_KEY = 'lhGppBEPlM0uY3oG'

export const fetchCompanyData = async inn => {
    try {
        const [companyResponse, financesResponse] = await Promise.all([
            axios.get('https://api.checko.ru/v2/company', {
                params: {
                    key: API_KEY,
                    inn: inn,
                },
            }),
            axios.get('https://api.checko.ru/v2/finances', {
                params: {
                    key: API_KEY,
                    inn: inn,
                    extended: true,
                },
            }),
        ])

        return {
            companyData: companyResponse.data,
            financesData: financesResponse.data,
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
