const querystring = require('querystring');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

function login(req, res) {
  const scope = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state',
    'app-remote-control'
  ].join(' ');

  const authUrl = 'https://accounts.spotify.com/authorize?' + querystring.stringify({
    response_type: 'code',
    client_id: clientId,
    scope,
    redirect_uri: redirectUri
  });

  res.redirect(authUrl);
}

async function callback(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ erro: 'Código de autorização não fornecido' });
  }

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await tokenResponse.json();

    if (data.access_token) {
      // Redireciona para o player.html com os tokens no hash da URL
      res.redirect(`/player.html#access_token=${data.access_token}&refresh_token=${data.refresh_token}`);
    } else {
      res.status(400).json({ erro: 'Erro ao obter token', detalhes: data });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro na requisição de token', detalhes: error.message });
  }
}

module.exports = { login, callback };