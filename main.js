async function getpromise() {

    try {
        let vada = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(vada);
        let vadaKeldi = await vada.json ()
        console.log(vadaKeldi);

        vadaKeldi.forEach(workers => { 
        
            let parentBox = document.createElement("parent") 
            let box = document.createElement("div") 
            let h1 = document.createElement("h1") 
            let p = document.createElement("p") 
            let p2 = document.createElement("p2") 
            let p3 = document.createElement("p3") 
            let img = document.createElement("img") 

            h1.innerHTML = `Name: ${workers.name}`
            p.innerHTML = `Username: ${workers.username}`
            p2.innerHTML = `Email: ${workers.email}`
            p3.innerHTML = `City: ${workers.address.city}`
         
            parentBox.style.alignItems = "center"
            box.style.border = `5px solid #ffe6a7` 
            box.style.textAlign = `center` 
            box.style.color = `#ffe6a7` 
            box.style.backgroundColor = `#99582a` 
            box.style.width = `290px` 
            box.style.height = `220px` 
            body.style.display = `flex` 
            body.style.gap = `90px` 
            body.style.flexWrap = `wrap` 
            body.style.marginLeft = `70px` 
            body.style.marginTop = `50px` 
            p3.style.paddingTop = `30px`
            p2.style.width = `350px`
            h1.style.marginTop = `20px`
            h1.style.fontSize = `20px`
            box.style.justifyContent = `center`
            parentBox.style.margin = `0 auto`
        
         
            box.style.display = `flex`; 
            box.style.flexDirection = `column`; 
            box.style.alignItems = `center`;
            img.style.paddingTop = `30px`
        
        
            box.appendChild(h1) 
            box.appendChild(p) 
            box.appendChild(p2) 
            box.appendChild(p3) 
            box.appendChild(img) 
            parentBox.appendChild(box) 
            body.appendChild(parentBox) 
            console.log(body); 
         
        });

    } catch {
        console.error("uydegilari rozi bo'madi");

    }
}

getpromise()

let body = document.querySelector("body") 