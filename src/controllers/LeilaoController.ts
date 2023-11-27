import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.produto !== "" && dados.datalimite !== "" && dados.dono && dados.listaDeLances !== ""){
            const newleilao = await LeilaoService.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLeiloes(req: Request, res: Response){
        const leiloes = LeilaoService.listLeiloes();

        res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update leilao');
    }

    async findLeilao(req: Request, res: Response){
        res.send('Find leilao');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Delete leilao');
    }
}

export default new LeilaoController;