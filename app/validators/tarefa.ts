import vine from "@vinejs/vine";
import { Status } from "../../contracts/enum/status.js";

export const criarTarefa = vine.compile(
    vine.object({
        titulo: vine.string(),
        status: vine.enum(Status),
        descricao: vine.string().optional(),
        prazo: vine.string(),
        nivel_energia_fisica: vine.number(),
        nivel_energia_mental: vine.number(),
        num_categoria: vine.number(),
        num_recompensa: vine.number()
    })
)