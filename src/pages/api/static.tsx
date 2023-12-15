import type { NextApiRequest, NextApiResponse } from "next";
import SSOT from "../../business/SSOT";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(SSOT);
}
