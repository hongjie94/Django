document.addEventListener('DOMContentLoaded', function() {


});

// Edit function
function edit(id) {

    // Get the div for edit
    let edit = document.querySelector(`#edit_${id}`);

    // Get the button for edit
    let edit_b = document.querySelector(`#edit_b${id}`);

    // Show div and button
    edit.style.display = 'block';
    edit_b.style.display = 'block';

    // When edit button is clicked
    edit_b.addEventListener('click', () => {

        // Update post content in db
        fetch('/edit/' + id , {
            method: 'PUT',
            body: JSON.stringify({
                post: edit.value
            })
          });

        // hide div and button
        edit.style.display = 'none';
        edit_b.style.display = 'none';

        // display the update content
        document.querySelector(`#post_${id}`).innerHTML = edit.value;
    });

    // When edit display previous post content
    edit.value = document.querySelector(`#post_${id}`).innerHTML;
}


// like and unlike function
function like(id) {

    let like_button = document.querySelector(`#like${id}`);
    let like_count = document.querySelector(`#like_count${id}`);

    

    // If the heart color is gray 
    if (like_button.style.color == 'gray') {
        fetch('/like/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                like: true
            })
        })

        // Get the number of likes
        fetch('/like/'+ id)
            .then(response => response.json())
            .then(post => {
                numberLikes = post.number_likes;
            });
       
        // change the heart to red 
        like_button.style.color = 'red';
        
        // Reset the number of like in html
        like_count.innerHTML = (numberLikes * 1);

    }

    // If is heart color is red 
    else {

        // Set the  heart color the gray
        like_button.style.color = 'gray';
        fetch('/like/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                like: false
            })
        });
        
         // Reset the number of like in html
        like_count.innerHTML = (numberLikes * 1);
    }
    return false;
}