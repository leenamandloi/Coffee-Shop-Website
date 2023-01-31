 let navbar = document.querySelector('.navbar');

 document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
 }

 let cartItem = document.querySelector('.cart-items-container');

 document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
 }

 let searchForm = document.querySelector('.search-form');

 document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
 }

 window.onscroll=()=>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
 }

 const err = await axios.get('<https://test.org/status/404>').
  catch(err => err);

err.message; // 'Request failed with status code 404'