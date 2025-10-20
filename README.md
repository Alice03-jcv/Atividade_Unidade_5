Atividade pronta.
// Função para buscar o endereço via CEP
  const setCep = async (cep) => {
    try {
      const cleanCep = cep.replace();

      if (cleanCep.length !== 8) {
        message.warning("CEP inválido. Deve conter 8 números.");
        return;
      }

      const url = `https://viacep.com.br/ws/${cleanCep}/json/`;
      const resposta = await fetch(url);
