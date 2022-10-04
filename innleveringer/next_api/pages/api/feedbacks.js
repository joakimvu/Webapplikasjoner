// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const feedbacks = []

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { feedback } = req.body

    feedbacks.push(feedback)
    res.status(201).json({ feedback })
  } else {
    res.status(200).json({ feedback })
  }
}
