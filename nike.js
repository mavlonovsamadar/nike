fetch("http://localhost:3000/data")
.then(res => res.json())
.then(data => {
    data.forEach(elem => {
        //console.log(elem.name);
     let div = document.createElement('div');
     div.classList.add("col-3")
div.innerHTML = `
<div class="card" style="width: 18rem;">
          <img src=${elem.img} height="200" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">Size: ${elem.description}</p>
            <p class="card-text">Price: ${elem.price}$</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
`

   let row = document.querySelector('.cards');
   row.appendChild(div)

    });
})  