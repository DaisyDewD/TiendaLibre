import { NextApiRequest, NextApiResponse } from "next";
import { tycs } from "../db";
import { TyC, TyCsAPIResponse } from "../../../types";
import TYCS from "../../tycs";
import { defaultLocale } from "../../../locale/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse<TyCsAPIResponse>){
    const { lang } = req.query as { lang: string };
    // Simular la llamada a una base de datos
  const tycsByLanguage = tycs[lang as string] ?? tycs[defaultLocale]
 /*  res.status(200).json(tycsByLanguage[tycs]); */
}

