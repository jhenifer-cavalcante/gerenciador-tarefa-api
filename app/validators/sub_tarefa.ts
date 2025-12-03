import vine from "@vinejs/vine";
import { Status } from "../../contracts/enum/status.js";
import { Frequencia } from "../../contracts/enum/frequencia.js";

export const criarSubTarefa = vine.compile(
    vine.object({
        titulo: vine.string(),
        status: vine.enum(Status),
        descricao: vine.string().optional(),
        ordem: vine.string().optional(),
        frequencia: vine.enum(Frequencia),
        nivel_energia_fisica: vine.number(),
        nivel_energia_mental: vine.number(),
        num_tarefa: vine.number(),
        num_motivacao: vine.number()
    })
)

export const atualizarSubTarefa = vine.compile(
    vine.object({
        titulo: vine.string().optional(),
        status: vine.enum(Status).optional(),
        descricao: vine.string().optional(),
        ordem: vine.number().optional(),
        frequencia: vine.enum(Frequencia).optional(),
        nivel_energia_fisica: vine.number().optional(),
        nivel_energia_mental: vine.number().optional(),
        num_tarefa: vine.number().optional(),
        num_motivacao: vine.number().optional(),
        ativo: vine.boolean().optional()
    })
)