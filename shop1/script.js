
let currUser = localStorage.getItem('currUser');
if (currUser) {
    let colors = ["red", "black", "blue", "green"];
    let sizes = ["xs", "sm", "md", "lg", "xl"];
    let products = [];

    try {
        products = JSON.parse(localStorage.getItem("products"));
        console.log("Parsed products:", products);
    } catch (error) {
        console.error("Error parsing products from localStorage:", error);
        // Optionally, you can clear the invalid data from localStorage
        localStorage.removeItem("products");
    }

    if (products.length > 0) 
     {
        let products = JSON.parse(localStorage.getItem("products"));
        console.log(products);

        let mens = products.filter((item) => item.category == "men's clothing");
        console.log(mens);

        //innerHtml += `
       //   <button onclick='addToCart(${product.id})'><button/>
       // `

        
    } else {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                let newData = data.map((item) => {
                    item.colors = colors.slice(Math.floor(Math.random() * 4));
                    item.sizes = sizes.slice(Math.floor(Math.random() * 4));
                    return item; // Return the modified item
                });
                console.log("Modified data:", newData);
                localStorage.setItem("products", JSON.stringify(newData));
            })
            
    }
} else {
    // Take the user back to login
    window.location.href = "http://127.0.0.1:5500/shopping_cart_application/shop/login.html";
}
