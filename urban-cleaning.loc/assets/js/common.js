window.onload = function () {

    new WOW().init();

    window.setTimeout(function () {

        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        console.log('preloading task complete');

    }, 500);

};

    // Smooth scroll
    $(".header-nav a[href^='#']").on('click', function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });

    // Link regular expression
    var number = $('#phone_link').attr('href');
    number = number.replace(/[^A-Za-z0-9_:+]/g, '').trim();
    $('.link').attr('href', number);

    // Slider owl carousel
    $("#slider .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
        }
    });

    // Mobile hamburger nav menu logic

    $('.header-nav__close').on('click', function() {

        if ($('.header-nav').hasClass('active')) {

            $('.header-nav').removeClass('active');

        } else {

            $('.header-nav').addClass('active');

        }

    });


    // Mobile catalogue block (accordion)
    $('.catalogue__item').on('click', function() {

        if ($(this).hasClass('catalogue__open')) {

            $(this).removeClass('catalogue__open');

        } else {

            $(this).addClass('catalogue__open');

        }

    });

    // Accordion footer
    const headers = document.querySelectorAll(".accordion__header");

    headers.forEach((header) => {
        const content = header.parentElement.children[1];

        // 32 = margin (top & bottom), 3 = border (top & bottom)
        const height = content.children[0].offsetHeight + 32 + 3;

        content.setAttribute("style", `--height: ${height}px`);

        header.addEventListener("click", () => {
            header.parentElement.classList.toggle("accordion--open");
        });
    });

        let formApp;
        let sliderApp;
        let modalApp;
        let modalAppSuccess;
        let modalAppError;
        let costApp;
        let costAppModal;
        let costAppSuccess;
        let costAppError;

            formApp = new Vue({
                el: "#form",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                    },
                    submitForm() {
                        console.log('submit');

                        if (this.formIsValid && !this.sending) {

                            this.sending = true;
                            let self = this;

                            let formData = {
                                name: this.name,
                                phone: this.phone,
                            };

                            formSenderModal.send(formData)
                                .then(function() {
                                    //
                                })
                                .catch(function () {

                                })
                                .finally(function () {
                                    self.name = "";
                                    self.phone = "";
                                    self.sending = false;
                                    ym(68613937,'reachGoal','zvonok');
                                });
                        }
                    },
                },
                computed: {
                    formIsValid() {
                        return (this.name.length > 1 && this.phone.length === 18);
                    },
                }
            });
        
            sliderApp = new Vue({
                el: "#slider-modal",
                data: {
                    imageUrl: "",
                },
                methods: {
                    openModal(imageUrl = false) {
                        this.imageUrl = imageUrl ? imageUrl : '';
                        $.fancybox.open({
                            src: '#slider-modal',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                },  
            });

            modalApp = new Vue({
                el: "#modal-app",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                        $.fancybox.open({
                            src: '#modal-app',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                    submitForm() {
                        if (this.formIsValid && !this.sending) {

                            this.sending = true;
                            let self = this;

                            let formData = {
                                name: this.name,
                                phone: this.phone,
                            };

                            formSenderModal.send(formData)
                                .then(function() {
                                    //
                                })
                                .catch(function () {

                                })
                                .finally(function () {
                                    self.name = "";
                                    self.phone = "";
                                    self.sending = false;
                                    ym(68613937,'reachGoal','zvonok');
                                });
                        }
                    },
                },
                computed: {
                    formIsValid() {
                        return (this.name.length > 1 && this.phone.length === 18);
                    },
                }
            });

            modalAppSuccess = new Vue({
                el: "#modal-app-success",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                        $.fancybox.open({
                            src: '#modal-app-success',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                },
            });

            modalAppError = new Vue({
                el: "#modal-app-error",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                        $.fancybox.open({
                            src: '#modal-app-error',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                },
            });

            let local;
            let additional;
            let chemistry;
            costApp = new Vue({
                el: "#computation",
                data: {
                    area: "1",
                    previouslySelectedArea: "1",
                    kind: "1",
                    previouslySelectedKind: "1",
                    extra_1: false,
                    extra_2: "1",
                    chem: [],
                    square: "30",
                    name: "",
                    phone: "",
                    sending: false,
                    items: [
                        "Удаление пыли и грязи с полов, подоконников",
                        "Сухая чистка ковров (пылесосом Заказчика)",
                        "Удаление пыли с горизонтальных поверхностей (не заставленная часть)",
                        "Удаление пыли с поверхности мебели снаружи",
                        "Влажная и сухая уборка орг. техники",
                        "Удаление пыли с дверных блоков",
                    ],
                    itemsSec: [
                        "Очистка зеркальных поверхностей",
                        "Удаление пыли с розеток и выключателей",
                        "Уборка ванной комнаты и туалета",
                        "Влажная протирка мебели ",
                        "Мытье раковины, смесителей",
                        "Выведение извести с сантехники, ванной/душевой/туалета/биде",
                    ],
                },
                methods: {
                    increaseNum() {
                        
                        if (this.extra_1 == true && this.extra_2 < "10") {

                            return this.extra_2++;

                        }

                    },
                    decreaseNum() {

                        if (this.extra_1 == true && this.extra_2 > "1") {

                            return this.extra_2--;

                        }

                    },
                    disableNum() {

                        return this.extra_2 = "1";

                    },                
                    submitForm(loc_name, loc_phone) {
                        // console.log('submit form function has started!/');
                        if (!this.sending) {

                            this.sending = true;
                            let self = this;

                            let formData = {
                                name: loc_name,
                                phone: loc_phone,
                            };

                            switch(this.area) {
                                case '1':
                                    formData['area'] = 'Квартира';
                                    break;
                                case '2':
                                    formData['area'] = 'Коттедж';
                                    break;
                                case '3':
                                    formData['area'] = 'Офис';
                                    break;
                                case '4':
                                    formData['area'] = 'Коммерческие помещения';
                                    break;
                                case '':
                                    formData['area'] = 'не выбрано';
                                    break;
                                default :
                                    formData['area'] = 'не выбрано';
                                    break;
                            }

                            switch(this.kind) {
                                case '1':
                                    formData['kind'] = 'Текущая уборка';
                                    break;
                                case '2':
                                    formData['kind'] = 'Генеральная уборка';
                                    break;
                                case '3':
                                    formData['kind'] = 'Уборка после ремонта';
                                    break;
                                case '4':
                                    formData['kind'] = 'Регулярная уборка';
                                    break;
                                case '':
                                    formData['kind'] = 'не выбрано';
                                    break;
                                default:
                                    formData['kind'] = 'не выбрано';
                            
                            }

                            if (this.extra_1) {

                                formData['extra_1'] = 'Да';
                                formData['extra_2'] = this.extra_2;

                            } else {

                                formData['extra_1'] = 'Нет';
                                formData['extra_2'] = '';

                            }

                            formData['chem'] = this.chem;

                            for (let i = 0; i < 4; i++) {

                                switch (this.chem[i]) {
                                    case '1':
                                        formData['chem'][i] = 'Матрацы'; 
                                        break;
                                    case '2':
                                        formData['chem'][i] = 'Шторы'; 
                                        break;
                                    case '3':
                                        formData['chem'][i] = 'Диваны'; 
                                        break;
                                    case '4':
                                        formData['chem'][i] = 'Ковры'; 
                                        break;
                                }

                            }

                            formData['square'] = this.square;

                            // console.log(formData);

                            formSender.send(formData)
                                .then(function() {
                                    //
                                })
                                .catch(function () {

                                })
                                .finally(function () {
                                    self.name    = '';
                                    self.phone   = '';
                                    self.sending = false;
                                    self.area    = '1';
                                    self.kind    = '1';
                                    self.extra_1 = false;
                                    self.extra_2 = '1';
                                    self.chem    = [];
                                    self.square  = '30';
                                    ym(68613937,'reachGoal','cost_sum');
                                });
                        }
                    },
                    forwardLis: function() {
                        $(this).prev().click();
                        this.items = [
                            "Удаление пыли и грязи с полов, сухая чистка ковров",
                            "Удаление пыли с горизонтальных поверхностей, со стен, потока и карнизов",
                            "Удаление пыли с поверхности мебели снаружи и внутри ",
                            "Влажная и сухая уборка орг. Техники, кондиционеров",
                            "Удаление пыли с дверных блоков, протирание подоконников",
                            "Удаление пыли с плинтусов, полов (мебель отодвигается)",
                            "Очистка зеркальных поверхностей",
                            "Влажная и сухая уборка осветительных приборов, розеток и выключателей",
                            "Влажная протирка мебели",
                        ];
                        this.itemsSec = [
                            "Уборка ванной комнаты и туалета",
                            "Мытье отопительных труб и батарей",
                            "Мытье ванной, душевой кабины, раковины и смесителей",
                            "Выведение извести с сантехники, ванной/душевой/туалета/биде",
                            "Влажная уборка стиральной машины",
                            "Влажная уборка стен по периметру",
                            "Влажная протирка мебели",
                            "Вынос мусора до 10 кг",
                        ];
                    },
                    backLis: function() {
                        $(this).prev().click();
                        this.items = [
                            "Удаление пыли и грязи с полов, подоконников",
                            "Сухая чистка ковров (пылесосом Заказчика)",
                            "Удаление пыли с горизонтальных поверхностей (не заставленная часть)",
                            "Удаление пыли с поверхности мебели снаружи",
                            "Влажная и сухая уборка орг. техники",
                            "Удаление пыли с дверных блоков",
                        ];
                        this.itemsSec = [
                            "Очистка зеркальных поверхностей",
                            "Удаление пыли с розеток и выключателей",
                            "Уборка ванной комнаты и туалета",
                            "Влажная протирка мебели ",
                            "Мытье раковины, смесителей",
                            "Выведение извести с сантехники, ванной/душевой/туалета/биде",
                        ];                       
                    },
                    forwardClick: function() {
                        $(this).prev().click();
                    },
                    checkClick: function(index, group) {
                        if (group === 'area') {
                            this.previouslySelectedArea = this.area;
                            if ((index === this.previouslySelectedArea)) {
                                this.area = '';
                            }
                        } else if (group === 'kind') {
                            this.previouslySelectedKind = this.kind;
                            if ((index === this.previouslySelectedKind)) {
                                this.kind = '';
                            }
                        }
                    },
                },
                computed: {


                    sum: function() {

                        // Windows Counter coefficient
                        if (this.extra_1) {

                            additional = parseInt(this.extra_2, 10) * 200;

                        } else if (this.extra_1 == false) {

                            additional = 0;

                        }
                        
                        // Chemestry additional coefficient
                        chemistry = 0;
                        for (i = 0; i < this.chem.length; i++) {

                            if (this.chem[i] !== "") {

                                switch (this.chem[i]) {
                                    case '1':
                                        chemistry = chemistry + 800;
                                        break;
                                    case '2':
                                        chemistry = chemistry + 1000;
                                        break;
                                    case '3':
                                        chemistry = chemistry + 1000;
                                        break;
                                    case '4':
                                        chemistry = chemistry + 900;
                                        break;

                                }

                            }

                        }

                        // Main block calculation
                        if (this.area == '' || this.kind == '') {

                            local = additional + chemistry;
                            return local;

                        } else if (this.kind == "2" || this.kind == "3") {

                            local = parseInt("145" * this.square, 10) + additional + chemistry;
                            return local;

                        } else {

                            if (this.square == "30") {

                                local = parseInt("1990", 10) + additional + chemistry;
                                return local;
                                
                            } else if (this.square == "60") {

                                local = parseInt("2990", 10) + additional + chemistry;
                                return local;  

                            } else if (this.square == "100") {

                                local = parseInt("3990", 10) + additional + chemistry;
                                return local; 

                            } else if (this.square == "200") {

                                local = parseInt("7990", 10) + additional + chemistry;
                                return local;                                
 
                            } else if (this.square == "300") {

                                local = parseInt("11990", 10) + additional + chemistry;
                                return local;                                

                            } else if (this.square == "400") {

                                local = parseInt("15990", 10) + additional + chemistry;
                                return local;                                

                            } 

                        }

                    }

                },
                
            });

            costAppModal = new Vue({
                el: "#cost-app-modal",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                        $.fancybox.open({
                            src: '#cost-app-modal',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                    fetchForm() {
                        if (this.formIsValid && !this.sending) {

                            this.sending = true;
                            let self = this;
                            // console.log('data for sumbit:');
                            // console.log(this.name);
                            // console.log(this.phone);
                            costApp.submitForm(this.name, this.phone);

                            self.name = "";
                            self.phone = "";
                            self.sending = false;

                        }
                    },
                },
                computed: {
                    formIsValid() {
                        return (this.name.length > 1 && this.phone.length === 18);
                    },
                }
            });

            costAppSuccess = new Vue({
                el: "#cost-app-success",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                        $.fancybox.open({
                            src: '#cost-app-success',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                },
            });

            costAppError = new Vue({
                el: "#cost-app-error",
                data: {
                    name: "",
                    phone: "",
                    sending: false,
                },
                methods: {
                    openModal() {
                        this.name = '';
                        this.phone = '';
                        $.fancybox.open({
                            src: '#cost-app-error',
                            opts: {
                                closeExisting: true,
                                touch: false,
                            },
                        });
                    },
                },
            });