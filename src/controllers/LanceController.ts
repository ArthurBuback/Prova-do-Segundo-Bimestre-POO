import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceServices";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.valor !== 0){
            const newlance = await LanceService.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLances(req: Request, res: Response){
        const lances = LanceService.listLances();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })
    }

    async updateLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async findLance(req: Request, res: Response){
        res.send('Find lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}

export default new LanceController;