// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { numberOne, numberTwo, method } = req.body
    let sum = 0
    if (method === 'divide') {
      sum = numberOne / numberTwo
    }
    console.log(sum)
    // console.log(Number(req.body.numberOne) + Number(req.body.numberTwo))
    res.status(201).json({ sum })
  } else {
    res.status(200).json({ sum })
  }
}
