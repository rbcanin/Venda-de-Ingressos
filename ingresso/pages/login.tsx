import { useState } from "react";
import { useRouter } from "next/router";

import * as S from "@/styles/login-styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "test@test.com" && password === "senha123") {
      const fakeToken = "1234567890abcdef"; // Token fake
      localStorage.setItem("token", fakeToken); // Armazena o token

      router.push("/home");
    } else {
      alert("Suas credenciais são inválidas, tente novamente");
    }
  };

  return (
    <S.Login>
      <div>
        <div className="form">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </S.Login>
  );
};

export default Login;
