document.addEventListener('DOMContentLoaded', function () {



});

function deleteCart(cartId) {
    fetch(`/deleteCart/${cartId}`)
        .then(response => response.json())
        .then(cart => {
            for (carts in cart) {
                var item_name = cart[carts]["item_name"]
            }
            const yes = confirm("Are you sure you wish to delete " + item_name + " from your order? ")

            if (yes) {
                fetch(`/deleteCart/${cartId}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        cartId: cartId
                    })
                })

                if (window.location.href == "http://127.0.0.1:8000/menu") {
                    setTimeout(function () { window.location.href = "menu"; }, 500);
                }

                else {
                    setTimeout(function () { window.location.href = "orderview"; }, 500);
                }
            }
        })
}
