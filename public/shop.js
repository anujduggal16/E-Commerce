
    
    function fetchProducts (done) {
        $.get('/api/products', function (data) {
            done(data)
        })
    }


    function addProduct (name, manuf, price, done) {
        $.post('/api/products', {
            name: name,
            manufacturer: manuf,
            price: price
        }, function (data) {
            done(data)
        })
    }

    function createProductCard (product) {
        return $(`
    <div class="col-sm-4" style=" margin-bottom: 28px ;">
        <div class="card text-center" style=" box-shadow: 1px 1px 3px #888; border: 1px solid gray; vpadding: 10px;" >
        <div class="center" >
        <img class="card-img-top "  src="images/phone1.jpg" alt="Image not found"  onerror="this.onerror=null;this.src='images/notfound.png';">
        </div>
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.manufacturer}</p>
            <p class="card-text"><b>Rs. ${product.price}</b></p>
            <div class="text-center">
                <button class="btn btn-warning btn-lg btn-block " id="${product.id}">Buy</button> 
                </div>
            </div>
        </div>
        </div>`
            )
    }

    $(function(){
     let productList = $('#product-list')
     
     fetchProducts(function(products){
         productList.empty()
         for(product of products){
             productList.append(createProductCard(product))
         }
     })
 
     $("#product-list").on('click','button',function(){
         window.alert("Product added to cart")
     })
     
 })