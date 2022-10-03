export default async function handler(req, res) {
  // henter ut id sendt med requesten
  const { id } = req.query
  switch (req.method) {
    case 'PUT':
      // henter ut verdien som skal oppdatere. Detter er kun eksemepl
      const { valueToUpdate } = req.body
      const recipe2 = await db.updateUnique(id)
      res.status(204).end()
    // res.status(200).json({success: true, data: recipe})
    case 'DELETE':
      const recipe3 = await db.deleteUnique(id)
      res.status(204).end()
      break
    case 'GET':
      // logikk for å finne et element
      const recipe = await db.findUnique(id)
      res.status(200).json({ success: true, data: recipe })
      break
    default:
      req.status(405).end()
      break
  }
}
