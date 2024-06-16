import { IFetchOptions } from '@/interfaces/utils/API'

const fetchData = async (url: string, options?: IFetchOptions) => {
  try {
    const response = await fetch(url, {
      method: options?.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: options?.body ? JSON.stringify(options.body) : null,
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}

export default fetchData
