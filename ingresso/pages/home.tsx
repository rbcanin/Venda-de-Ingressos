import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "@/styles/home-styles";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica se o token está presente no localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // Se não houver token, redireciona para a tela de login
      router.push("/login");
    } else {
      setIsAuthenticated(true); // Se houver token, o usuário está autenticado
    }
  }, [router]);

  return (
    <S.Home>
      <div className="container">
        <div className="sub-container">
          {isAuthenticated ? (
            <>
              <h1>Página Inicial</h1>
              <p>Você está autenticado!</p>

              <Link className="button" href="/events">
                Ver Eventos
              </Link>

              <button
                onClick={() => {
                  // Remove o token do localStorage ao fazer logout
                  localStorage.removeItem("token");
                  router.push("/login");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </S.Home>
  );
};

export default Home;
