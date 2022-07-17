let Products = [
    {
        id: 1,
        productName: "Makaron",
        price: 10,
        description: "There are many things are needed to start Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-2.png"
    },
    {
        id: 2,
        productName: "Salat assarti",
        price: 16,
        description: "There are many things are needed to start Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-3.png"
    },
    {
        id: 3,
        productName: "Classic Salat",
        price: 24,
        description: "There are many things are needed to start Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-5.png"
    },
    {
        id: 4,
        productName: "Burger",
        price: 11,
        description: "There are many things are needed to start Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png"
    },
    {
        id: 5,
        productName: "Chiken",
        price: 34,
        description: "There are many things are needed to start Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-6.png"
    },
    {
        id: 6,
        productName: "Gril",
        price: 20,
        description: "There are many things are needed to start Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-7.png"
    }
]
let selectProduct = [];
function drawProduct() {
    let a = Products.map((item, index) => `
    <div class="card">
        <img src="${item.img}" alt="">
        <div class="d-flex" style="justify-content: space-between; padding: 0 10px;">
            <h5>${item.productName} </h5>
            <h5>${item.price}$</h5>
        </div>
        <h6>${item.description}</h6>
        <div class="d-flex responsReting" style="justify-content: space-between; padding: 0 10px;" class="icons">
            <div>
                ${selectProduct.some((a) => a.id === item.id) ? ` <button class="bg-danger" onclick="deleteProduct(${item.id})">-</button>` : `<button onclick="addCard(${item.id})">+</button>`}
            </div>
            <div class="mt-4">
                ${item.reting}
            </div>
        </div>
    </div>
    `)
    $(".maincards").html(a)
}
function addCard(id) {
    Products.filter(item => {
        if (item.id === id) {
            return selectProduct.push(item)
        }
        drawProduct()
    })
    $("#count").text(selectProduct.length)
}
function drawSelectProduct() {
    let a = selectProduct.map((item, index) => `
    <tr>
        <th> ${index + 1} </th>
        <th> <img src=${item.img}  width=80 /> </th>
        <th>
            ${item.productName}
        </th>
        <th> ${item.price} </th>
        <th>
            <button class="btn btn-danger" onclick="deleteProduct(${item.id})"> Delete </button>
        </th>
    </tr>
    `)
    let totalPrice = selectProduct.reduce((a, sh) => {
        return a += sh.price;
    }, 0)
    $("#total").text(totalPrice + "$")
    $("#tbody").html(a)
}
function openModal() {
    $(".Modal").toggleClass("d-block")
    drawSelectProduct()
}
function openThanku() {
    $(".Thanku").toggleClass("d-block")
    drawSelectProduct()
    deleteProduct()
}

$("#cloththanky").click(function () {
    $(".Thanku").toggleClass("d-block")
    $("#count").text(selectProduct.length = "0")
    drawSelectProduct()
    deleteProduct()
});
$("#buy").click(function () {
    $(".Modal").toggleClass("d-block")
    drawSelectProduct()
});
$("#cancel").click(function () {
    $(".Modal").toggleClass("d-block")
    $("#count").text(selectProduct.length = "0")
    drawSelectProduct()
    deleteProduct()
});
function deleteProduct(id) {
    selectProduct.filter((item, index) => {
        if (item.id === id) {
            selectProduct.splice(index, 1)
        }
    })
    $("#count").text(selectProduct.length)
    drawProduct()
    drawSelectProduct()
}
$("#btnMenu").click(function () {
    $("nav").toggleClass("addForMenu")
})
drawProduct()