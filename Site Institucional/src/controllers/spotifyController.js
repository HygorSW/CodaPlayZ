
const clientId = '2c1cdb1b3cec451c8bba713c6f27570d';
const clientSecret = '6a738184530a4f3db28a4709dc13f89b';

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
