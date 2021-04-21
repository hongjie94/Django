document.addEventListener('DOMContentLoaded', function () {

});

function placeOrder(username) {
        let total = Number(document.querySelector('#t_t').innerHTML.split('$').pop())
        if (total > 0) {

            fetch('/placeorder', {
            method: 'POST',
            body: JSON.stringify({
                order: true
            })
            })
            document.querySelector('#loader').style.display = 'block';
            document.querySelector('#myDiv').style.display = 'none';
            setTimeout(function () { window.location.href = "history"; }, 500);
        }

        else{
            alert("Your Cart is empty please add item to yor cart before placing your order")
        }

}


