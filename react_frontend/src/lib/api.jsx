//최초관리자 or 유저 등록 API 호출 함수
export const adminSetup = async (userId, userEmail, userPw, userPhone, userName) => {
  const data = {
    userId: userId,
    userPw: userPw,
    userEmail: userEmail,
    userName: userName,
    userPhone: userPhone
  };

  console.log(data);

  await fetch("http://localhost:8080/member/join", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//로그인 API 호출 함수
export const login = async (account) => {
  const loginInfo = {
    userId: account.userId,
    userPw: account.userPw,
  };

  console.log(loginInfo)
  const response = await fetch("http://localhost:8080/member/login", {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const accessToken = data.accessToken;
  const refreshToken = data.refreshToken;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);

  console.log(data);
};
