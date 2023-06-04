import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Despesa } from "./despesa.entity";

export class DespesaController {
  public async create(req: Request, res: Response) {
    try {
      await AppDataSource.manager.insert(Despesa, req.body);

      res.status(201).json({ mensagem: "Registro cadstrado com sucesso!" });
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async findAll(req: Request, res: Response) {
    const despesas = await AppDataSource.manager.find(Despesa);

    res.status(200).json({ dados: despesas });
  }

  public async findOne(req: Request, res: Response) {
    const despesas = await AppDataSource.manager.findOneBy(Despesa, {
      id: +req.params.id,
    });

    res.status(200).json({ dados: despesas });
  }

  public async update(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      await AppDataSource.manager.update(Despesa, { id }, req.body);

      res.status(201).json({ mensagem: "Registro alterado com sucesso!" });
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      await AppDataSource.manager.delete(Despesa, { id });

      res.status(201).json({ mensagem: "Registro deletado com sucesso!" });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
