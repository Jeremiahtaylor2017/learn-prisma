import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.user.createMany({
    //     data: [{
    //         name: "Zuko",
    //         age: 2,
    //         email: "zuko@test.com"
    //     }, {
    //         name: "Law",
    //         age: 28,
    //         email: "law@test.com"
    //     }]
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         // name: { notIn: ["Jeremiah", "Camille"] },
    //         // age: { gt: 20 }
    //         // email: { contains: "@test.com" }
    //         // NOT: {
    //         //     email: { startsWith: "jeremiah" }
    //         // }
    //         // AND: [
    //         //     {
    //         //         email: {
    //         //             startsWith: "jeremiah"
    //         //         }
    //         //     },
    //         //     {
    //         //         email: {
    //         //             endsWith: "@test.com"
    //         //         }
    //         //     }
    //         // ]
    //         // userPreference: {
    //         //     emailUpdates: true
    //         // }
    //         writtenPosts: {
    //             every: {
    //                 title: "Test"
    //             }
    //         }
    //     }
    // })

    // const posts = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is: {
    //                 age: 27
    //             }
    //         }
    //     }
    // })

    // const preference = await prisma.userPreference.create({
    //     data: {
    //         emailUpdates: true
    //     }
    // })

    // const user = await prisma.user.update({
    //     where: {
    //         email: "jeremiah@admin.com"
    //     },
    //     data: {
    //         userPreference: {
    //             connect: {
    //                 id: 'ebcf3f81-57a9-407b-a972-c7f8f5479bf7'
    //             }
    //         }
    //     }
    // })

    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Jeremiah"
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // })

    const user = await prisma.user.delete({
        where: {
            email: "zuko@test.com"
        }
    })

    console.log(user);
}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })