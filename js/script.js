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
    });
