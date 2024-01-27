let courses = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "py course",
        price: 2000
    },
    {
        itemName: "php course",
        price: 5000
    },
    {
        itemName: "Mobile Dev course",
        price: 10000
    },
]

let totalPrice = courses.reduce((acc, course) => acc + course.price ,0)
console.log(totalPrice);