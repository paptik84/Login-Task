import axios from "axios"
import { ICreatePayload, IForgetCreateResponse } from "../../shared/types/types"
import { API_VERSION, BASE_URL, CONTENT_TYPE, PATH_HEAD } from "../../constants/axiosURLs"

const axiosResetPass = async (data:ICreatePayload ) => {
 await axios.post<IForgetCreateResponse>(`${BASE_URL}/${API_VERSION}/${PATH_HEAD}/password-set`, {
    token: data.token,
    secret: data.secret,
    password: data.password,
    password_confirm: data.password_confirm
 }, {
    headers: {
        'Content-Type': CONTENT_TYPE
    }
 })
}

export default axiosResetPass