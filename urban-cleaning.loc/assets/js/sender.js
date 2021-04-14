let formSender;
let formSenderModal;

formSender = new Vue({
    methods: {
        async send(formData) {
            return new Promise((resolve, reject) => {

                axios
                    .post('', JSON.stringify(formData))
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
                    .post('', JSON.stringify(formData))
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
