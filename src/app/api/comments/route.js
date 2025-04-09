export async function GET () {
  return await Response.json({ comments })
}

export async function POST (request) {
  const body = await request.json()
  const newComment = {
    id: 6,
    name: 'Henry',
    comment: 'Hello from the other side.'
  }

  comments.push(newComment)
  return Response.json({ comments })
}

const comments = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'This is a great article! Really enjoyed reading it.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'The points about JWT implementation were very helpful.'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    comment: 'Would love to see more examples like this.'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    comment: 'Clear and concise explanation. Thank you!'
  },
  {
    id: 5,
    name: 'Michael Brown',
    comment: 'How would this work with TypeScript?'
  }
]
