import { GOOGLE_API_URL } from "../config"

export const CreateGoogleMapsUrl = (address:string, city:string)=>{
    const fullAddress = `${address}, ${city}`
    return `${GOOGLE_API_URL}${encodeURIComponent(fullAddress)}`
}