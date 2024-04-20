import Aluno from '../models/Alunos';

class HomeController {
  async index(req, res) {
    res.json('index');
  }
}

export default new HomeController();
