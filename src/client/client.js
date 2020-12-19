import VueCookies from "vue-cookies";
import axios from "axios";

export default {
    get: function(path) {
        let url = `${process.env.VUE_APP_API_URL}/${path}`

        const token = VueCookies.get('accessToken')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get(`${url}`, config)
    },
    put:  function(path, data) {
        let url = `${process.env.VUE_APP_API_URL}/${path}`

        const token = VueCookies.get('accessToken')
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            validateStatus: function (status) {
                return status >= 200 && status < 400
            }
        };
        return axios.put(`${url}`, data, config)
    },
    post: function(path, data) {
        let url = `${process.env.VUE_APP_API_URL}/${path}`

        const token = VueCookies.get('accessToken')
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            validateStatus: function (status) {
                return status >= 200 && status < 400
            }
        };
        return axios.post(`${url}`, data, config)
    },
}
