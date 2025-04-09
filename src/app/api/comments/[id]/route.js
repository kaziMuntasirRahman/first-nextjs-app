export const PATCH = async (request, { params }) => {
  console.log('PATCH request is being hit..')
  const { id } = await params
  return Response.json({ message: 'Received comments patch request for id: ' , id})
}
