import type { NextApiRequest, NextApiResponse } from "next";
import SOURCE from "../../MG_PER_ML";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(SOURCE);
}
