fetch("https://fakestoreapi.com/products")
    .then(resp=>resp.json())
    .then(data=>{
        //build my user interface with the data
        listProducts(data)})

        function listProducts(products){
            document.querySelector(".products").innerHTML = ""  //this clears all the ul (all products)
            //add a li for each product in the array provided/fetched/filtered
            products.forEach(prod => {
                let liElement = document.createElement("li")
                liElement.innerHTML=`
                    <img src="${prod.image}" alt="${prod.title}">
                    <h2>${prod.title}</h2>
                    <p>${prod.description.substring(0,70)}... <a>   </p>
                    <span>ksh. ${prod.price*130}</span> 
                `
                document.querySelector(".products").append(liElement)
            });
        }
