const { PrismaClient } = require('@prisma/client')
const { NextResponse } = require('next/server')


const prisma = new PrismaClient()

export async function GET() {
    return new NextResponse('Hello World')      
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })