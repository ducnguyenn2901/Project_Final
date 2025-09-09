import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage("Chưa có tài khoản, vui lòng đăng ký!");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      setMessage(`Đăng nhập thành công, chào mừng ${storedUser.username}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      setTimeout(() => navigate("/"), 1500);
    } else {
      setMessage("Thông tin đăng nhập không đúng!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setMessage("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newUser = { username, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setMessage("Đăng ký thành công!");
    setTimeout(() => setIsLogin(true), 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>{isLogin ? "Đăng nhập" : "Đăng ký"}</h2>

        {message && <div className="auth-message">{message}</div>}

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <div className="form-group">
              <label>Tên người dùng</label>
              <input
                type="text"
                placeholder="Nhập tên..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <div className="switch-mode">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
          >
            {isLogin
              ? "Chưa có tài khoản? Đăng ký"
              : "Đã có tài khoản? Đăng nhập"}
          </button>
        </div>
      </div>
    </div>
  );
}
