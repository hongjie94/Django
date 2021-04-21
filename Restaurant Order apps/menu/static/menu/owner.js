document.addEventListener('DOMContentLoaded', function () {


});


function orderAccept(order_num) {

    fetch(`/status/${order_num}`, {
    method: 'POST',
    body: JSON.stringify({
        status: "Preparing"

        })
    })
}


function orderCancel(order_num) {

    const yes = confirm("Are you sure you wish to Cancel this Order?")

            if (yes) {

                fetch(`/status/${order_num}`, {
                method: 'POST',
                body: JSON.stringify({
                    status: "Order Canceled"

                    })
                })
                setTimeout(function () { window.location.href = ""; }, 500);

            }



}


function orderComplete(order_num) {

    $(function () {
        //Reference the CheckBoxes and determine Total Count of checked CheckBoxes.

        var checked = $("#cb input[type=checkbox]:checked").length;
        var checkBox = true;
        var num_item = document.querySelectorAll(".d-flex").length;
        if (checked == num_item) {
            fetch(`/status/${order_num}`, {
                method: 'POST',
                body: JSON.stringify({
                    status: "Order Ready"

                })
                })
            setTimeout(function () { window.location.href = "owner"; }, 500);
        }
        else {
            alert("Please Make Sure All Order Items In List Are Checked!");
            return checkBox = false;
        }
    });

}

