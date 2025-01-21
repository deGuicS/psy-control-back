import { uowRunner } from "@/shared/database/knex";
import { FastifyRequest, FastifyReply } from "fastify";

export default async function pinghandler(
  req: FastifyRequest,
  res: FastifyReply,
) {
  let isOnline = false;

  await uowRunner(async (uow) => {
    const result = await uow.raw("select true as online");
    isOnline = result.rows.length > 0;
  });
  res.status(200).send(`Pong: database is online: ${isOnline}`);
}
