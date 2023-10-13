export async function POST(req) {

    const { name, email, phone } = await req.json()
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('queryData')
    return Response.json({
        name, email, phone,
        query,
        message: "api test"
    })
}



