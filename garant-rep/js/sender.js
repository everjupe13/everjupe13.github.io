let formSender;
let formSenderModal;

$(document).ready(function () {

    formSender = new Vue({
        methods: {
            async send(formData) {
                return new Promise((resolve, reject) => {

                    axios
                        .post('../wp-content/themes/urbancleaning/assets/backend/rest/?action=send_form', JSON.stringify(formData))
                        .then(function (response) {
                            costAppSuccess.openModal();
                            console.log('success');
                            resolve("ok");
                        })
                        .catch(function (error) {
                            costAppError.openModal();
                            console.log('error');
                            reject("error");
                        });

                });
            }
        }
    });

    formSenderModal = new Vue({
        methods: {
            async send(formData) {
                return new Promise((resolve, reject) => {

                    axios
                        .post('../wp-content/themes/urbancleaning/assets/backend/modal/?action=send_form', JSON.stringify(formData))
                        .then(function (response) {
                            modalAppSuccess.openModal();
                            resolve("ok");
                        })
                        .catch(function (error) {
                            modalAppError.openModal();
                            reject("error");
                        });

                });
            }
        }
    });
});