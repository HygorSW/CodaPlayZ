
const clientId = '864869bc18a44add9a5269d78fc8c4d7';
const clientSecret = '5337f5077a464628aba070ec057b58c8';

async function pegarToken(req, res) {
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();

    if (data.access_token) {
      res.json({ access_token: data.access_token });
    } else {
      res.status(400).json({ erro: 'Não foi possível obter o token', detalhes: data });
    }
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao obter token', detalhes: erro.message });
  }
}

module.exports = {
  pegarToken
};
