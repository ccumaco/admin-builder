import { IUploadPhoto } from 'src/interfaces/services/photo.interface'
export const uploadPhoto = async ({ photo }: IUploadPhoto) => {
  try {
    const formData = new FormData()
    formData.append('file', photo)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}
