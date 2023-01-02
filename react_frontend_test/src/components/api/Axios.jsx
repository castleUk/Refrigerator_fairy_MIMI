import axios from 'axios';

const Token = localStorage.getItem('accessToken');
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;
    if (status === 403) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await axios({
          method: 'post',
          url: `/refresh`,
          data: { accessToken, refreshToken },
        });
        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;
        originalRequest.headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + newAccessToken,
        };
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        return await axios(originalRequest);
      } catch (err) {
        new Error(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;