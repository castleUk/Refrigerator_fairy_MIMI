import axios from "axios";

//최초관리자 or 유저 등록 API 호출 함수
export const adminSetup = async (
  userId,
  userEmail,
  userPw,
  userPhone,
  userName
) => {
  const data = {
    userId: userId,
    userPw: userPw,
    userEmail: userEmail,
    userName: userName,
    userPhone: userPhone,
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/member/join",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

//로그인 API 호출 함수
export  const login = async (account) => {
  const loginInfo = {
    userId: account.userId,
    userPw: account.userPw,
  };

  console.log(loginInfo);
  try {
    const response = await axios.post(
      "http://localhost:8080/member/login",
      JSON.stringify(loginInfo),
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response);

    const data = await response.data;
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;

    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//냉장고 생성 호출

// export const characterCreate = async(charName) => {
//   const response = await fetch("http://localhost:8080/api/characterCreate",{
//     method : "POST"
//     body: JSON.stringify()
//   })

// }
