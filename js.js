function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        }).then((product) => {
            product.forEach(element => {
                const productsInner = document.querySelector(".products__inner");
                const info = document.createElement("div");
                const divImg = document.createElement("div");
                const photo = document.createElement("img");
                const div1 = document.createElement("div");
                const h2 = document.createElement("h2");
                const h3 = document.createElement("h3");
                const text = document.createElement("div");
                const p = document.createElement("p");

                productsInner.style.display = "flex";
                productsInner.style.flexWrap = "wrap";
                productsInner.appendChild(info);

                info.className = ("container");
                info.style.width = "350px";
                info.style.display = "flex";
                info.style.flexDirection = "column";
                info.style.backgroundColor = "fff";
                info.style.border = "5px solid #dce0e1";
                info.style.margin = "50px auto";
                info.style.backgroundColor = "white";
                info.style.textAlign = "center";
                info.style.borderRadius = "5px";
                info.style.padding = "1em";

                info.appendChild(divImg);

                photo.style.width = "200px";
                photo.style.height = "250px";
                photo.style.objectFit = "contain";
                divImg.appendChild(photo);

                div1.className = ("div-1");
                div1.style.height = "60px";
                div1.style.display = "flex";
                div1.style.borderBottom = "3px solid rgb(0, 0, 0)";
                div1.style.justifyContent = "space-between";
                div1.style.alignItems = "center";
                divImg.appendChild(div1);

                h2.style.fontSize = "15px";
                h2.style.textAlign = "left"
                div1.appendChild(h2);

                h3.style.fontSize = "15px";
                div1.appendChild(h3);

                info.appendChild(text);

                text.appendChild(p);

                photo.src = element.img;
                h2.textContent = element.title;
                h3.textContent = element.price;
                p.textContent = element.desc;
                
            });
        })
}
products()