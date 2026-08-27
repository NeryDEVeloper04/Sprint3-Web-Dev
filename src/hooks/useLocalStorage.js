import { useState, useEffect } from "react";

// Hook genérico: funciona como useState, mas persiste o valor no
// localStorage sob a chave informada. Usado pelo login (usuário logado)
// e pelas estatísticas de disparo simulado da câmera.
export function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const armazenado = window.localStorage.getItem(key);
      return armazenado !== null ? JSON.parse(armazenado) : valorInicial;
    } catch (erro) {
      console.error(`Erro ao ler "${key}" do localStorage:`, erro);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valor));
    } catch (erro) {
      console.error(`Erro ao salvar "${key}" no localStorage:`, erro);
    }
  }, [key, valor]);

  return [valor, setValor];
}
