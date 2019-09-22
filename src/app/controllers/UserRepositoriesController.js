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
        `https://api.github.com/users/${username}/repos`
      );

      const response = data.map(repo => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
      }));

      return res.json(response);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Erro ao consultar API do Github!' });
    }
  },
};
