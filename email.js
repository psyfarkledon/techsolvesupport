const publicKey = 'SheTWXOnL46Y5NI0_';
const serviceID = 'service_2umdvk8';
const templateID = 'template_7hnnhyf';

(function() {
    emailjs.init(publicKey);
})();

function sendEmail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}