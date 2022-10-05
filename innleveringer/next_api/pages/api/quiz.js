const quiz = [
  {
    title: 'Which pokemon did Ash Ketchum get first?',
    answers: [
      { answer: 'Bulbasaur' },
      {
        answer: 'Charmander',
      },
      {
        answer: 'Squirtle',
      },
      {
        answer: 'Pikachu',
        correct: true,
      },
    ],
    helper: {
      text: 'It is yellow',
    },
  },
  {
    title: 'How many pokemons are there in gen1??',
    answers: [
      { answer: '149' },
      {
        answer: '151',
        correct: true,
      },
      {
        answer: '1241',
      },
      {
        answer: '154',
      },
    ],
    helper: {
      text: 'The total amount of pokemons in all generations combines are 905',
    },
  },
  {
    title: 'What are the first 4 Regions of Pokémon?',
    answers: [
      { answer: 'Kanto, Johto, Hoen, Alola' },
      {
        answer: 'Kanto, Johto, Unova, Kalos',
      },
      {
        answer: 'Kanto, Johto, Hoen, Sinnoh',
        correct: true,
      },
      {
        answer: 'Alol, Galar, Hisui, Paldea',
      },
    ],
    helper: {
      text: 'It is yellow',
    },
  },
  {
    title: "What is the name of Ash Ketchum's home town?",
    answers: [
      { answer: 'Pallet Town', correct: true },
      {
        answer: 'Viridian City',
      },
      {
        answer: 'Pewter City',
      },
      {
        answer: 'Cerulean City',
      },
    ],
    helper: {
      text: 'It is yellow',
    },
  },
]

export default function handler(req, res) {
  if (req.method === 'POST') {
    // tar i mot data som sendes med forespørselen
    const data = req.body
    console.log(data)

    // legger til data i quiz listen vår
    quiz.push(data)

    res.status(201).json({ success: true, data: quiz })
  } else {
    res.status(200).json({ success: true, data: quiz })
  }
}
