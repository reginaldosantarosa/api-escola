import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Reginaldo',
      sobrenome: 'Santa',
      email: 'reginaldo_00@hotmail.com',
      idade: 10,
      peso: 300,
      altura: 2.5,
    });
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
