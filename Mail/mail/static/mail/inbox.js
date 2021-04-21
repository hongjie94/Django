document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  load_mailbox('inbox');
});

function compose_email() {

  // Show compose view and hide other views
  document.querySelector('#view_mails').style.display = 'none';
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';
  
  // Clear out composition fields
  document.querySelector('#compose-recipients').value = '';
  document.querySelector('#compose-subject').value = '';
  document.querySelector('#compose-body').value = '';

  // Prevent redirecting the webpage when submitting compose form
  document.querySelector('#compose-form').onsubmit = (event) => { event.preventDefault();

  // Post request emails passing value for recipients, subject and body
  fetch('/emails',{
    method: 'POST',
    body: JSON.stringify({
        recipients: document.querySelector('#compose-recipients').value,
        subject: document.querySelector('#compose-subject').value,
        body: document.querySelector('#compose-body').value
        })
    })
      // Display alert for result when submit
      .then(response => response.json())
      .then(result => {
          alert(result.message)
          load_mailbox('sent')
      });
  }
}

// Load mailbox 
function load_mailbox(mailbox) {

 
  // Show the mailbox and hide other views
  document.querySelector('#view_mails').style.display = 'block';
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';
  
  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

  // Clear view_mails content
  view_mails.innerHTML = '';
  
  // GET request to get all emails
  fetch(`/emails/${mailbox}`)
    .then(response => response.json())
    .then(emails => {

     console.log("`${mailbox}`= "+`${mailbox}`)

      // Iterate emails to get each email
      for (email in emails) {
        console.log("email = "+ email)
         console.log("emails = " +emails)

        // Define mail, id, sender, subject and time
        var mail = document.createElement("div"); 
        var id = document.createElement('p');
        var sender = document.createElement('p');
        var recipients = document.createElement('p');    
        var subject = document.createElement('p');
        var time = document.createElement('p');
        
        // Hide id  
        id.classList.add('id')
        id.innerHTML = emails[email]['id'];
        id.style.display = 'none';  
        
        // add subject in to el
        subject.innerHTML = emails[email]['subject'];

        // Show recipients
        recipients.innerHTML = "To: " + emails[email]['recipients'];
        
        // Show sender
        sender.innerHTML = "From: " + emails[email]['sender'];

        // Show time
        time.innerHTML = emails[email]['timestamp'];

        // If email has been read show background color lightgray
        if (emails[email]['read'] == true) {
            mail.style.backgroundColor = 'lightgray';  
        }

        // If not read show background color white
        else {
          mail.style.backgroundColor = 'white';
        }
        
        // Add a class name mail
        mail.classList.add('mail')
      

        // Class name for mail
        sender.classList.add('sender')

        // Class name for recipients text
        recipients.classList.add('recipients')
      
        // Class name for subject text
        subject.classList.add('subject')
      
        // Styles for time text
        time.classList.add('time')
        
        
        // Save all
        view_mails.appendChild(mail);
        mail.appendChild(subject);
        mail.appendChild(sender);
        mail.appendChild(recipients);
        mail.appendChild(time);
        mail.appendChild(id);

        // When click run load_email
        subject.addEventListener('click', () => view_email());
        sender.addEventListener('click', () => view_email());
        recipients.addEventListener('click', () => view_email());
        time.addEventListener('click', () => view_email()); 
    }
  })
}


// Load clicked mail
function view_email() {

  event.stopImmediatePropagation();

  // Show the clicked mail and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'none';
  view_mails = document.querySelector('#view_mails');
  view_mails.style.display = 'block';

  // Get what is clicked
  var get = event.target;

  // If tag name is div get its parent inset of children 
  if (!(get.tagName == 'div')) {
    get = get.parentElement;
  }
  
  // Get mail id 
  var c = get.children;
  var id = c[4].innerHTML;

  // Insure when clicked each mail the id correct 
  console.log(id);

  // Clear  
  view_mails.innerHTML = '';

  fetch(`/emails/${id}`)
  .then(response => response.json())
  .then(email => {

    // Create div for mail
    var div = document.createElement('div');

    // Create hr element
    var hr =  document.createElement('hr');

    //Create br element
    var br = document.createElement('br');

    // Add bootstrap class to div
    div.classList.add('form-group');

    // Create a button element for replying email 
    var reply = document.createElement('button');
    reply.classList.add('btn');
    reply.classList.add('btn-sm');   
    reply.classList.add('btn-outline-primary'); 
    reply.classList.add('margin_rp');
    
    // Add bootstrap and custom css to archive button
    var archive_b = document.createElement('button');
    archive_b.classList.add('btn');
    archive_b.classList.add('btn-sm');   
    archive_b.classList.add('btn-outline-primary'); 
    archive_b.classList.add('margin_ab'); 

    // Create subject in h4 element
    var subject = document.createElement('h4');
    subject.innerText = email['subject'];
    
    // Create sender in p element and add css
    var sender = document.createElement('p');
    sender.innerText = 'From: ' + `${email['sender']}`;
    sender.style.fontSize =  '18px';
    sender.style.marginBottom = '2em';

    // Create recipients and add css
    var recipients = document.createElement('p');
    recipients.innerText =  'To: ' + `${email['recipients']}`;
    recipients.style.fontSize =  '17px';
    recipients.style.marginBottom = '5px';

    // Create body in p element
    var body = document.createElement('p');
    body.innerText = email['body'];

    // Create time in p element add css
    var time = document.createElement('p');
    time.innerText =  email['timestamp'];
    time.style.fontSize =  '15px';

    // Add css to div where holds all the elements
    div.style.backgroundColor = 'white';
    div.style.minHeight = '38em';
    div.style.borderRadius = '5px';
    div.style.padding = '20px';

    // Adding another div inside of view_mail div
    view_mails.appendChild(div);

    // Adding reply button inside of view_mail div   
    view_mails.appendChild(reply);

    // Adding all elements to div including the archive button
    div.appendChild(sender);
    div.appendChild(recipients);
    div.appendChild(time); 
    div.appendChild(archive_b); 
    div.appendChild(br);
    div.appendChild(subject); 
    div.appendChild(hr);
    div.appendChild(body);

    // Set the button text to Reply and add bootstrap class name
    reply.innerText = 'Reply';
    reply.classList.add('btn-primary');

    // Add archive/unarchive functions to archive button
    var archive = email['archived'];

    if (archive) {
      archive_b.innerText = 'Unarchived';
    }
    else {
      archive_b.innerText = 'Archived';
    }

    // When archive button is click set archived/unarchived
    archive_b.addEventListener('click', () => {
      
      // Change api while button was clicked
      fetch(`/emails/${id}`, {
        method: 'PUT',
        body: JSON.stringify({   
          archived: !archive
        })
      });

      // load inbox
      load_mailbox('inbox');
    });
    

    // If read attribute in email are false set the read attribute to true
    if (email['read'] == false) {
      fetch(`/emails/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          read: true
        })
      })
}

  // When reply button is clicked show compose 
  reply.addEventListener('click', () => { compose_email(); 

  // Get current email content and pre-fill the composition form
  document.querySelector('#compose-recipients').value = email['sender'];
  document.querySelector('#compose-body').value = `On ${email['timestamp']} ${email['sender']} wrote:\n${email['body']}\n`;
  
  //  Ensure in rely subject line begins with Re:
  var subject = email['subject']
  if (subject.search('Re:') == 0) {
    document.querySelector('#compose-subject').value = `${email['subject']}`;
  }
  else {
    document.querySelector('#compose-subject').value = `Re: ${email['subject']}`;
  }
    })

  })
}