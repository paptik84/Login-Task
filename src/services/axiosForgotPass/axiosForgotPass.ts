import axios from "axios"
import { IForgetCreateResponse, IForm } from "../../shared/types/types"
import { API_VERSION, BASE_URL, CONTENT_TYPE, PATH_HEAD } from "../../constants/axiosURLs"

const axiosForgotPass = async (data: IForm) => {
    await axios.post<IForgetCreateResponse>(`${BASE_URL}/${API_VERSION}/${PATH_HEAD}/password-reset`, {
        email: data.email,
        redirect_url: "https://auth-qa.qencode.com/password-set"
    }, {
        headers: {
            'Content-Type': CONTENT_TYPE
        }
    })
}

export default axiosForgotPass