const container = document.getElementById("container");
const prevBTN = document.getElementById("prevPage");
const nextBTN = document.getElementById("nextPage");
let pageNum = 1;
let products = [];

fetch("https://kassal.app/api/v1/products?page=1", {
    method: "GET",
    headers: {
        Authorization: "Bearer YTzc29dgYRKS0pMRtLeakhxiVSwUZe56i9ki9OCm",
    },
})
    .then((resp) => resp.json())
    .then((productResult) => {
        products = productResult;
        products.data.map((product) => {
            displayProduct(product);
        });
    })
    .catch((error) => {
        console.error("Error fetching product data:", error);
    });

function displayProduct(data) {
    const prodDiv = document.createElement("div");
    const prodName = document.createElement("h2");
    prodName.innerText = data.name;
    const prodImg = document.createElement("img");
    prodImg.src = data.image;
    prodDiv.appendChild(prodName);
    prodDiv.appendChild(prodImg);
    container.appendChild(prodDiv);
}

nextBTN.addEventListener("click", function () {
    container.innerHTML = "";
    fetch(`https://kassal.app/api/v1/products?page=${pageNum}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer YTzc29dgYRKS0pMRtLeakhxiVSwUZe56i9ki9OCm",
        },
    })
        .then((resp) => resp.json())
        .then((productResult) => {
            products = productResult;
            products.data.map((product) => {
                displayProduct(product);
                pageNum++;
            });
        })
        .catch((error) => {
            console.error("Error fetching product data:", error);
        });
});

prevBTN.addEventListener("click", function () {
    container.innerHTML = "";
    fetch(`https://kassal.app/api/v1/products?page=${pageNum}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer YTzc29dgYRKS0pMRtLeakhxiVSwUZe56i9ki9OCm",
        },
    })
        .then((resp) => resp.json())
        .then((productResult) => {
            products = productResult;
            products.data.map((product) => {
                displayProduct(product);
                pageNum--;
            });
        })
        .catch((error) => {
            console.error("Error fetching product data:", error);
        });
});
