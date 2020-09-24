function formValidation() {


    const formFeedbackWrap = $1('.mn-contact-feedback');
    const form = $1('.mn-contact-frm');

    new JustValidate('.mn-contact-frm', {
        rules: {
            cmrName: {
                required: true,
            },
            cmrEmail: {
                required: true,
                email: true,
            },
            cmrNumber: {
                required: true,
            },
            cmrMessage: {
                required: true,
            }
        },
        messages: {
            cmrName: 'Please Enter Your Name',
            cmrEmail: 'An Email Address Is Required',
            cmrNumber: 'Please Add Your Phone Number ',
            cmrMessage: 'A Message Is Required'
        },
        submitHandler: function (form, values, ajax) {

            ajax({
                url: '/site-partials/form-handler.php',
                method: 'POST',
                data: values,
                async: true,
                callback: function (response) {
                    formFeedbackWrap.innerHTML = response;
                    form.reset();

                },
                error: function () {
                    formFeedbackWrap.innerHTML = ' There was a problem with your submission, please try again';
                }
            });
        }
    });

}

module.exports = formValidation;