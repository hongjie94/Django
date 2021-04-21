document.addEventListener('DOMContentLoaded', function () {

    // Show the appetizers and hide other views
    document.querySelector('#appetizers_view').style.display = 'block';
    document.querySelector('#appetizers').style.color = 'red';
    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#combo_view').style.display = 'none';

    // Use buttons to toggle between views
    document.querySelector('#appetizers').addEventListener('click', () => load_appetizers());
    document.querySelector('#soups').addEventListener('click', () => load_soups());
    document.querySelector('#chow_mein').addEventListener('click', () => load_chow_mein());
    document.querySelector('#chop_suey').addEventListener('click', () => load_chop_suey());
    document.querySelector('#fr').addEventListener('click', () => load_fr());
    document.querySelector('#lo_mein').addEventListener('click', () => load_lo_mein());
    document.querySelector('#side').addEventListener('click', () => load_side());
    document.querySelector('#beef').addEventListener('click', () => load_beef());
    document.querySelector('#pork').addEventListener('click', () => load_pork());
    document.querySelector('#chicken').addEventListener('click', () => load_chicken());
    document.querySelector('#seafood').addEventListener('click', () => load_seafood());
    document.querySelector('#s_s').addEventListener('click', () => load_s_s());
    document.querySelector('#vegetable').addEventListener('click', () => load_vegetable());
    document.querySelector('#chow_fun').addEventListener('click', () => load_chow_fun());
    document.querySelector('#canton').addEventListener('click', () => load_canton());
    document.querySelector('#hunan').addEventListener('click', () => load_hunan());
    document.querySelector('#efy').addEventListener('click', () => load_efy());
    document.querySelector('#suggestions').addEventListener('click', () => load_suggestions());
    document.querySelector('#combo').addEventListener('click', () => load_combo());

    document.querySelector('#appetizers_m').addEventListener('click', () => load_appetizers());
    document.querySelector('#soups_m').addEventListener('click', () => load_soups());
    document.querySelector('#chow_mein_m').addEventListener('click', () => load_chow_mein());
    document.querySelector('#chop_suey_m').addEventListener('click', () => load_chop_suey());
    document.querySelector('#fr_m').addEventListener('click', () => load_fr());
    document.querySelector('#lo_mein_m').addEventListener('click', () => load_lo_mein());
    document.querySelector('#side_m').addEventListener('click', () => load_side());
    document.querySelector('#beef_m').addEventListener('click', () => load_beef());
    document.querySelector('#pork_m').addEventListener('click', () => load_pork());
    document.querySelector('#chicken_m').addEventListener('click', () => load_chicken());
    document.querySelector('#seafood_m').addEventListener('click', () => load_seafood());
    document.querySelector('#s_s_m').addEventListener('click', () => load_s_s());
    document.querySelector('#vegetable_m').addEventListener('click', () => load_vegetable());
    document.querySelector('#chow_fun_m').addEventListener('click', () => load_chow_fun());
    document.querySelector('#canton_m').addEventListener('click', () => load_canton());
    document.querySelector('#hunan_m').addEventListener('click', () => load_hunan());
    document.querySelector('#efy_m').addEventListener('click', () => load_efy());
    document.querySelector('#suggestions_m').addEventListener('click', () => load_suggestions());
    document.querySelector('#combo_m').addEventListener('click', () => load_combo());
});

// Load appetizers 
function load_appetizers() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'block';
    document.querySelector('#appetizers').style.color = 'red';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load soups 
function load_soups() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'block';
    document.querySelector('#soups').style.color = 'red';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load chow mein
function load_chow_mein() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'block';
    document.querySelector('#chow_mein').style.color = 'red';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load chop suey
function load_chop_suey() {

    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'block';
    document.querySelector('#chop_suey').style.color = 'red';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load fired rice
function load_fr() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'block';
    document.querySelector('#fr').style.color = 'red';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load lo mein
function load_lo_mein() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'block';
    document.querySelector('#lo_mein').style.color = 'red';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load side
function load_side() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'block';
    document.querySelector('#side').style.color = 'red';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load beef
function load_beef() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'block';
    document.querySelector('#beef').style.color = 'red';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load pork
function load_pork() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'block';
    document.querySelector('#pork').style.color = 'red';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load chicken
function load_chicken() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'block';
    document.querySelector('#chicken').style.color = 'red';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load seafood
function load_seafood() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'block';
    document.querySelector('#seafood').style.color = 'red';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load sweet and sour 
function load_s_s() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'block';
    document.querySelector('#s_s').style.color = 'red';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load vegetable dishes
function load_vegetable() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'block';
    document.querySelector('#vegetable').style.color = 'red';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load chow fun or rice noddle
function load_chow_fun() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'block';
    document.querySelector('#chow_fun').style.color = 'red';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';
};

// Load canton dishes
function load_canton() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'block';
    document.querySelector('#canton').style.color = 'red';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load hunan dishes
function load_hunan() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'block';
    document.querySelector('#hunan').style.color = 'red';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';



};

// Load egg foo yong
function load_efy() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'block';
    document.querySelector('#efy').style.color = 'red';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load suggestions
function load_suggestions() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'block';
    document.querySelector('#suggestions').style.color = 'red';

    document.querySelector('#combo_view').style.display = 'none';
    document.querySelector('#combo').style.color = 'black';

};

// Load combo
function load_combo() {

    document.querySelector('.menu_center').style.flexBasis = '';
    document.querySelector('.menu_right').style.flexBasis = '';

    document.querySelector('#top').style.display = 'none';
    document.querySelector('.menu_div').style.display = 'block';

    document.querySelector('#appetizers_view').style.display = 'none';
    document.querySelector('#appetizers').style.color = 'black';

    document.querySelector('#soups_view').style.display = 'none';
    document.querySelector('#soups').style.color = 'black';

    document.querySelector('#chow_mein_view').style.display = 'none';
    document.querySelector('#chow_mein').style.color = 'black';

    document.querySelector('#chop_suey_view').style.display = 'none';
    document.querySelector('#chop_suey').style.color = 'black';

    document.querySelector('#fr_view').style.display = 'none';
    document.querySelector('#fr').style.color = 'black';

    document.querySelector('#lo_mein_view').style.display = 'none';
    document.querySelector('#lo_mein').style.color = 'black';

    document.querySelector('#side_view').style.display = 'none';
    document.querySelector('#side').style.color = 'black';

    document.querySelector('#beef_view').style.display = 'none';
    document.querySelector('#beef').style.color = 'black';

    document.querySelector('#pork_view').style.display = 'none';
    document.querySelector('#pork').style.color = 'black';

    document.querySelector('#chicken_view').style.display = 'none';
    document.querySelector('#chicken').style.color = 'black';

    document.querySelector('#seafood_view').style.display = 'none';
    document.querySelector('#seafood').style.color = 'black';

    document.querySelector('#s_s_view').style.display = 'none';
    document.querySelector('#s_s').style.color = 'black';

    document.querySelector('#vegetable_view').style.display = 'none';
    document.querySelector('#vegetable').style.color = 'black';

    document.querySelector('#chow_fun_view').style.display = 'none';
    document.querySelector('#chow_fun').style.color = 'black';

    document.querySelector('#canton_view').style.display = 'none';
    document.querySelector('#canton').style.color = 'black';

    document.querySelector('#hunan_view').style.display = 'none';
    document.querySelector('#hunan').style.color = 'black';

    document.querySelector('#efy_view').style.display = 'none';
    document.querySelector('#efy').style.color = 'black';

    document.querySelector('#suggestions_view').style.display = 'none';
    document.querySelector('#suggestions').style.color = 'black';

    document.querySelector('#combo_view').style.display = 'block';
    document.querySelector('#combo').style.color = 'red';

};

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}    





