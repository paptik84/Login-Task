import axios from "axios"
import { API_VERSION, BASE_URL, CONTENT_TYPE, PATH_HEAD } from "../../constants/axiosURLs"
import { IForm, ILoginResponse } from "../../shared/types/types"

const axiosLogin = async (data: IForm) => {
    await axios.post<ILoginResponse>(`${BASE_URL}/${API_VERSION}/${PATH_HEAD}/login`, {
        email: data.email,
        password: data.password
    }, {
        headers: {
            'Content-Type': CONTENT_TYPE
        }
    }).then(res => {
        localStorage.setItem('accessToken', res.data.access_token)
        localStorage.setItem('refreshToken', res.data.refresh_token)
        return res
    })
}

export default axiosLogin