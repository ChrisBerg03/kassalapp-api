const container = document.getElementById("container");

let products = [];

fetch("https://kassal.app/api/v1/products", {
    method: "Get",
    headers: {
        Authorization: "Bearer YTzc29dgYRKS0pMRtLeakhxiVSwUZe56i9ki9OCm",
    },
})
    .then((resp) => {
        return resp.json();
    })
    .then((productResult) => {
        products = productResult;

        for (const prod of products) {
            display(...prod);
        }
    });

function displayProducts(prod) {
    const prodDiv = document.createElement("div");
    const prodName = document.createElement("h2");
    prodName.innerText = prod.name;
    const prodImg = document.createElement("img");
    prodDiv.appendChild(prodName);
    prodDiv.appendChild(prodImg);
}
