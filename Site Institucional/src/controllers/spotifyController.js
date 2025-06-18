const querystring = require('querystring');
const fetch = require('node-fetch');

// const clientId = '2c1cdb1b3cec451c8bba713c6f27570d';
// const clientSecret = '6a738184530a4f3db28a4709dc13f89b';
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
exports.login = (req, res) => {
  const scope = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state',
    'app-remote-control',
  ].join(' ');

  const authUrl =
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
    });

  return res.redirect(authUrl);
};

exports.callback = async (req, res) => {
  const code = req.query.code;
  console.log('Callback recebido, código:', code);

  if (!code) {
    console.log('Código de autorização não recebido!');
    return res.status(400).json({ error: 'Authorization code não recebido' });
  }

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await tokenResponse.json();
    console.log('Resposta da API do Spotify:', data);

    if (tokenResponse.ok && data.access_token) {
      return res.redirect(`/player.html#access_token=${data.access_token}&refresh_token=${data.refresh_token}`);
    } else {
      console.log('Erro ao obter token:', data);
      return res.status(400).json({ error: 'Erro ao obter token', details: data });
    }
  } catch (error) {
    console.error('Erro na requisição de token:', error);
    return res.status(500).json({ error: 'Erro na requisição de token', details: error.message });
  }
};

exports.pegarToken = (req, res) => {
  // Implementação exemplo, ajuste conforme sua lógica
  res.json({ token: "exemplo-token" });
};

exports.transferPlayback = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const deviceIds = req.body.device_ids;

  if (!token || !deviceIds) {
    return res.status(400).json({ error: 'Token ou device_ids não fornecidos' });
  }

  try {
    const response = await fetch('https://api.spotify.com/v1/me/player', {
      method: 'PUT',
      body: JSON.stringify({ device_ids: deviceIds, play: false }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204) {
      return res.json({ message: 'Playback transferido com sucesso' });
    } else {
      const errorData = await response.json();
      return res.status(response.status).json({ error: 'Erro ao transferir playback', details: errorData });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro na requisição', details: error.message });
  }
};
