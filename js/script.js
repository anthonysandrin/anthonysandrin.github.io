var contactButton = document.createElement('a');
contactButton.innerHTML = 'Contact';
var footer = document.getElementsByTagName('footer')[0];
footer.appendChild(contactButton);
var contact = document.getElementById('contact');
contact.classList.add('hidden');

contactButton.onclick = function() {
  contact.classList.toggle('hidden');
};
