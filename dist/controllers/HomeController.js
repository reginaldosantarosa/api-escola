"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const novoAluno = await _Aluno2.default.create({
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

exports. default = new HomeController();
