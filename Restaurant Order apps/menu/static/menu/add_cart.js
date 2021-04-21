document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#count').innerHTML = 1;
    document.querySelector('#minus').addEventListener('click', () => minusCount());
    document.querySelector('#add').addEventListener('click', () => addCount());

});

let counter = 1;
let adding_box = document.querySelector('#adding_box');

// addAppetizer to cart
function loadCart(id) {
    document.querySelector('#cf_rn').style.display = 'none';
    document.querySelector('#item_num11').style.display = 'none';
    document.querySelector('#combo_c18').style.display = 'none';
    document.querySelector('#combo_c1').style.display = 'none';
    document.querySelector('#combo_c2').style.display = 'none';
    document.querySelector('#combo_c4').style.display = 'none';
    document.querySelector('#combo_c5').style.display = 'none';
    document.querySelector('#combo_c7').style.display = 'none';
    document.querySelector('#combo_c8').style.display = 'none';
    document.querySelector('#combo_c10').style.display = 'none';
    document.querySelector('#combo_c11').style.display = 'none';
    document.querySelector('#combo_c12').style.display = 'none';
    document.querySelector('#combo_c13').style.display = 'none';
    document.querySelector('#combo_c15').style.display = 'none';
    document.querySelector('#combo_c16').style.display = 'none';
    document.querySelector('#combo_c17').style.display = 'none';
    document.querySelector('#item_num11').style.display = 'none';
    document.querySelector('#item_num12').style.display = 'none';
    document.querySelector('#price').style.display = 'none';
    document.querySelector('#pt').style.display = 'none';
    document.querySelector('#qt').style.display = 'none';
    document.querySelector('.duo_size').style.display = 'none';
    document.querySelector('.lb_size').style.display = 'none';


    document.querySelector('.menu_center').style.flexBasis = '39%';
    document.querySelector('.menu_right').style.flexBasis = '35%';
    document.querySelector('.menu_right').style.overflow = 'hidden';
    document.querySelector('.menu_right').style.overflowY = 'scroll';
    let top = document.querySelector('#top');
    let menu = document.querySelector('.menu_div');

    counter = 1;

    document.querySelector('#count').innerHTML = "1";

    fetch(`/order/${id}`)
        .then(response => response.json())
        .then(order => {
            let price = `${order['price']}`
            let pt = `${order['pt_price']}`
            let qt = `${order['qt_price']}`
            let name = `${order['name']}`
            let item_num = `${order['item_num']}`


            document.querySelector('#oap_num_name').innerHTML = name;

            if (price == 'null' && item_num == "6" || item_num == "14") {

                document.querySelector('#pt').innerHTML = "(S)" + "$" + pt;
                document.querySelector('#qt').innerHTML = "(L)" + "$" + qt;
                document.querySelector('#pt').style.display = 'block';
                document.querySelector('#qt').style.display = 'block';
                document.querySelector('.duo_size').style.display = 'flex';
                document.querySelector('#price').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (price == 'null' && item_num == "7") {
                document.querySelector('#pt').innerHTML = "(8)" + "$" + pt;
                document.querySelector('#qt').innerHTML = "(16)" + "$" + qt;
                document.querySelector('#pt').style.display = 'block';
                document.querySelector('#qt').style.display = 'block';
                document.querySelector('.duo_size').style.display = 'flex';
                document.querySelector('#price').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (price == 'null' && item_num == "10") {
                document.querySelector('#pt').innerHTML = "(15)" + "$" + pt;
                document.querySelector('#qt').innerHTML = "(30)" + "$" + qt;
                document.querySelector('#pt').style.display = 'block';
                document.querySelector('#qt').style.display = 'block';
                document.querySelector('.duo_size').style.display = 'flex';
                document.querySelector('#price').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "12") {
                document.querySelector('#item_num12').style.display = 'flex';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "11") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'flex';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "19" || item_num == "58"
                || item_num == "73" || item_num == "82") {

                document.querySelector('#oap_num_name').innerHTML = "🌶 " + " " + name;
                document.querySelector('#pt').innerHTML = "(Pt)" + "$" + pt;
                document.querySelector('#qt').innerHTML = "(Qt)" + "$" + qt;
                document.querySelector('#pt').style.display = 'block';
                document.querySelector('#qt').style.display = 'block';
                document.querySelector('.duo_size').style.display = 'flex';
                document.querySelector('#price').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "94" || item_num == "95"
                || item_num == "96" || item_num == "97"
                || item_num == "98" || item_num == "99") {

                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'flex';

            }

            else if (item_num == "99a" || item_num == "H1" ||
                item_num == "H2" || item_num == "H3" ||
                item_num == "H4" || item_num == "H6" ||
                item_num == "H7" || item_num == "H7a" ||
                item_num == "H8" || item_num == "H9" ||
                item_num == "H10" || item_num == "H11" ||
                item_num == "H12" || item_num == "H14" ||
                item_num == "H14a" || item_num == "H21" ||
                item_num == "H22" || item_num == "H23") {

                document.querySelector('#oap_num_name').innerHTML = "🌶" + " " + name;
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';

                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "91" || item_num == "93" ||
                item_num == "C14" || item_num == "C19" ||
                item_num == "C21" || item_num == "C23" ||
                item_num == "C25") {

                document.querySelector('#oap_num_name').innerHTML = "🌶" + " " + name;
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (price == 'null') {
                document.querySelector('#pt').innerHTML = "(Pt)" + "$" + pt;
                document.querySelector('#qt').innerHTML = "(Qt)" + "$" + qt;
                document.querySelector('#pt').style.display = 'block';
                document.querySelector('#qt').style.display = 'block';
                document.querySelector('.duo_size').style.display = 'flex';
                document.querySelector('#price').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C1") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c1').style.display = 'flex';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';

            }

            else if (item_num == "C2") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C4") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C5") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C7") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }
            else if (item_num == "C8") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C10") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';

            }

            else if (item_num == "C11") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C12") {
                document.querySelector('#oap_num_name').innerHTML = "🌶" + " " + name;
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }
            else if (item_num == "C13") {
                document.querySelector('#oap_num_name').innerHTML = "🌶" + " " + name;
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C15") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C16") {

                document.querySelector('#oap_num_name').innerHTML = "🌶" + " " + name;
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C17") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C18") {
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'flex';

                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else if (item_num == "C3" || item_num == "C6" ||
                item_num == "C9" || item_num == "C14" ||
                item_num == "C20" || item_num == "C22" ||
                item_num == "C24" || name == "Fortune Cookies") {

                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }
            else if (item_num == "S1" || item_num == "S2" ||
                item_num == "S3" || item_num == "S4" ||
                item_num == "S5" || item_num == "S6" ||
                item_num == "S7" || item_num == "S9" ||
                item_num == "S10" || item_num == "S12" ||
                item_num == "S14" || item_num == "S15") {

                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';
                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }

            else {
                document.querySelector('#price').innerHTML = "$" + price;
                document.querySelector('#price').style.display = 'block';
                document.querySelector('#pt').style.display = 'none';
                document.querySelector('#qt').style.display = 'none';
                document.querySelector('#item_num12').style.display = 'none';
                document.querySelector('#item_num11').style.display = 'none';

                document.querySelector('#combo_c18').style.display = 'none';
                document.querySelector('#combo_c1').style.display = 'none';
                document.querySelector('#combo_c2').style.display = 'none';
                document.querySelector('#combo_c4').style.display = 'none';
                document.querySelector('#combo_c5').style.display = 'none';
                document.querySelector('#combo_c7').style.display = 'none';
                document.querySelector('#combo_c8').style.display = 'none';
                document.querySelector('#combo_c10').style.display = 'none';
                document.querySelector('#combo_c11').style.display = 'none';
                document.querySelector('#combo_c12').style.display = 'none';
                document.querySelector('#combo_c13').style.display = 'none';
                document.querySelector('#combo_c15').style.display = 'none';
                document.querySelector('#combo_c16').style.display = 'none';
                document.querySelector('#combo_c17').style.display = 'none';
                document.querySelector('#cf_rn').style.display = 'none';
            }
        });

    menu.style.display = 'none';
    top.style.display = 'block';
};


function addCount() {
    counter++;
    document.querySelector('#count').innerHTML = counter;
};

function minusCount() {
    counter--;

    if (counter < 1) {
        counter = 1;
    }

    else {
        document.querySelector('#count').innerHTML = counter;
    }
};

function addToCart(username) {

    var addCart_qty = document.querySelector('#count').innerHTML;

    var name = document.getElementById('oap_num_name').innerText.split("(").shift();

    var price = document.getElementById("price").innerHTML.split("$").pop();

    if (name == "Barbecued Spare Ribs" || name == "Bar-B-Q Boneless Ribs") {

        if (document.getElementById('pt_price').checked) {
            var size = "S";
            var price = document.getElementById('pt').innerHTML.split("$").pop();
        }

        else {
            var size = "L";
            var price = document.getElementById('qt').innerHTML.split("$").pop();
        }
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: size,
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name']
                        + "(" + size + ")";

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })


        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Dim Sum") {

        if (document.getElementById('pt_price').checked) {
            var size = "8";
            var price = document.getElementById('pt').innerHTML.split("$").pop();
        }
        else {
            var size = "16";
            var price = document.getElementById('qt').innerHTML.split("$").pop();
        }
        total = (price * addCart_qty).toFixed(2)


        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: size,
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name']
                        + "(" + size + ")";

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Fried Baby Shrimp") {

        if (document.getElementById('pt_price').checked) {
            var size = "15";
            var price = document.getElementById('pt').innerHTML.split("$").pop();
        }
        else {
            var size = "30";
            var price = document.getElementById('qt').innerHTML.split("$").pop();
        }
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: size,
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {
                for (item in user) {
                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name']
                        + "(" + size + ")";

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Fried or Steamed Dumpling ") {


        var dumpling = document.getElementById("dumpling");
        name = dumpling.value;
        var price = document.getElementById("price").innerHTML.split("$").pop();
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {
                for (item in user) {
                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Bar-B-Q Satay Steak or Chicken Stick ") {

        var stick = document.getElementById("bbq_stick");
        name = stick.value;
        var price = document.getElementById("price").innerHTML.split("$").pop();
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";
        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {
                for (item in user) {
                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Vegetable Chow Fun or Rice Noodles" || name == "Roast Pork Chow Fun or Rice Noodles" ||
        name == "Chicken Chow Fun or Rice Noodles" || name == "Shrimp Chow Fun or Rice Noodles" ||
        name == "Beef Chow Fun or Rice Noodles" || name == "House Special Chow Fun or Rice Noodles") {

        var sub_name = document.getElementById('oap_num_name').innerText;
        full_name = sub_name.split("Chow Fun or Rice Noodles").shift()
        var chowFun = document.getElementById("chowfun_rn");
        name = full_name + (chowFun.value);

        var price = document.getElementById("price").innerHTML.split("$").pop();
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {
                for (item in user) {
                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }


    else if (name == "House Special Chow Mein") {

        var price = document.getElementById("price").innerHTML.split("$").pop();
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";
        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {
                for (item in user) {
                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }
    else if (price == 0) {

        if (document.getElementById('pt_price').checked) {
            var size = "Pt";
            var price = document.getElementById('pt').innerHTML.split("$").pop();
        }
        else {
            var size = "Qt";
            var price = document.getElementById('qt').innerHTML.split("$").pop();
        }
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: size,
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name']
                        + "(" + size + ")";

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Chicken or Roast Pork Chow Mein") {
        var cor_cm = document.getElementById("combo1");
        name = (cor_cm.value);
        total = (price * addCart_qty).toFixed(2)
        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Beef or Shrimp Chow Mein") {
        var cor_cm = document.getElementById("combo2");
        name = (cor_cm.value);


        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }
    else if (name == "Chicken or Roast Pork w. Broccoli") {
        var corb = document.getElementById("combo5");
        name = (corb.value);

        var newname = (name + "(Combo)")
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: newname
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Chicken or Roast Pork w. Chinese Vegetables") {
        var cor = document.getElementById("combo3");
        name = (cor.value);
        var newname = (name + "(Combo)")
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: newname
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Chicken or Roast Pork w. Mushroom") {
        var cor = document.getElementById("combo7");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Sweet & Sour Chicken or Pork") {

        var cor = document.getElementById("combo8");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Chicken or Roast Pork Egg Foo Young") {

        var cor = document.getElementById("combo10");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Chicken or Roast Pork Lo Mein") {

        var cor = document.getElementById("combo11");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "🌶 Chicken or Pork with Garlic Sauce") {
        var cor = document.getElementById("combo12");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "🌶 General Tso's or Sesame Chicken") {
        var cor = document.getElementById("combo13");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }
    else if (name == "Boneless Spare Ribs or Chicken") {
        var cor = document.getElementById("combo15");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }
    else if (name == "🌶 General Tso's or Sesame Chicken") {
        var cor = document.getElementById("combo13");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "🌶 Hot & Spicy Shrimp or Beef") {
        var cor = document.getElementById("combo16");
        name = (cor.value);

        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Shrimp or Beef w. Broccoli") {
        var cor = document.getElementById("combo17");
        name = (cor.value);
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Shrimp or Beef Lo Mein") {
        var cor = document.getElementById("combo18");
        name = (cor.value);
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "🌶 Orange flavor Chicken" && price == Number(8.00) ||
        name == "🌶 Shrimp with Garlic Sauce" && price == Number(8.00) ||
        name == "🌶 Kung Pao Chicken" && price == Number(7.20) ||
        name == "🌶 Kung Pao Shrimp" && price == Number(7.65) ||
        name == "🌶 Double Delight w. Garlic Sauce" && price == Number(8.00)
    ) {

        var swl = name + "(Combo)"
        var newname = (name + "(Combo)")
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: swl
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else if (name == "Chicken w. Cashew Nuts" && price == Number(7.20) ||
        name == "Shrimp w. Cashew Nuts" && price == Number(7.65) ||
        name == "Four Seasons" && price == Number(8.00) ||
        name == "Pepper Steak w. Onion" && price == Number(7.30) ||
        name == "BBQ Spare Ribs" && price == Number(8.30) ||
        name == "Shrimp w. Lobster Sauce" && price == Number(7.65)) {

        var swl = name + "(Combo)"
        var newname = (name + "(Combo)")
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: swl
            })
        })
        document.querySelector('#adding_box').innerHTML = "";

        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {

                for (item in user) {

                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');

                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        let sub = document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        let tax = document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        let tt = document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })
        setTimeout(function () { window.location.href = "menu"; }, 500);
    }

    else {

        var price = document.getElementById("price").innerHTML.split("$").pop();
        total = (price * addCart_qty).toFixed(2)

        fetch('/addCart', {
            method: 'POST',
            body: JSON.stringify({
                quantity: addCart_qty,
                item_size: " ",
                total: Number(total),
                price: Number(price),
                item_name: name
            })
        })
        document.querySelector('#adding_box').innerHTML = "";
        fetch(`/cart/${username}`)
            .then(response => response.json())
            .then(user => {
                for (item in user) {
                    adding_box = document.querySelector('#adding_box');

                    let div = document.createElement("div");
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    size = user[item]['item_size'];
                    p1.innerHTML = "<i class='fas fa-times'></i> "
                        + user[item]['quantity'] + " "
                        + user[item]['item_name'];

                    p2.innerHTML = "$" + user[item]['total'];
                    div.classList.add('added_item');
                    adding_box.appendChild(div);
                    div.appendChild(p1);
                    div.appendChild(p2);
                }
                fetch(`/check/${username}`)
                    .then(response => response.json())
                    .then(check => {

                        var check_tax = check['tax']
                        var allTotal = Number(check['sub_total'])
                        var check_ft = check['final_total']

                        // console.log("check_tax" + check_tax)
                        // console.log("check_sub" + allTotal)
                        // console.log("check_ft" + check_ft)

                        // console.log("allTotal" + Number(allTotal))
                        // console.log("price" + Number(price))
                        // console.log("your new price!!" + Number(Number(price) * Number(addCart_qty)))
                        // console.log("your total is  out " + parseFloat(allTotal + Number(price)))

                        allTotal = parseFloat(allTotal + Number(Number(price) * Number(addCart_qty)));
                        // console.log("your new total is!!" + Number(allTotal))

                        document.querySelector('#stt').innerHTML = "$" + allTotal.toFixed(2);

                        document.querySelector('#tax').innerHTML = "$" + (allTotal * 0.08).toFixed(2);

                        document.querySelector('#t_t').innerHTML = "$" + (allTotal + (allTotal * 0.08)).toFixed(2);

                        fetch('/addTotal', {
                            method: 'POST',
                            body: JSON.stringify({
                                sub_total: allTotal.toFixed(2),
                                tax: Number((allTotal * 0.08).toFixed(2)),
                                final_total: (allTotal + (allTotal * 0.08)).toFixed(2)
                            })
                        })
                    })
            })

            setTimeout(function () { window.location.href = "menu"; }, 500);
    }
}




