// export const GET = async ({ params }) => {
//   const { theme } = await params
//   const newCookie = `theme=${theme}`
//   return Response.json(
  //     { message: 'Theme Changed' },
//     { headers: { 'Set-Cookie': newCookie } }
//   )
// }

export const GET = async (request,{params}) => {
  const {theme} = await params;
    const newCookie = `theme=${theme}`

  console.log(theme)
  return Response.json({}, {
    headers: {
      'Set-Cookie': newCookie
    }
  })
}
