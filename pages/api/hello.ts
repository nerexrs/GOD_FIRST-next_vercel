//GOD FIRST 
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

//ya estaba configurado pero pues ts nos permite crear nuestros propios tipos y también con el <> le especificamos
//como un segundo tipo que reciben al parecer los parametros de ese tipo, ejemplo aca el res su json recibe la data