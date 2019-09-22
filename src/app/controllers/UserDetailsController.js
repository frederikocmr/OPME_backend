import axios from 'axios';

module.exports = {
  async index(req, res) {
    const { username } = req.params;

    if (!username) {
      return res
        .status(400)
        .json({ error: 'O parâmetro de usuário é obrigatório!' });
    }

    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );

      const response = {
        id: data.id,
        login: data.login,
        profile_url: data.url,
        avatar_url: data.avatar_url,
        login_creation: data.created_at,
      };

      return res.json(response);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Erro ao consultar API do Github!' });
    }
  },
};
