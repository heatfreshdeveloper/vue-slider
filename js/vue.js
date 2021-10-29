Vue.config.devtools = true;

    const vueApp = new Vue({
        el: "#app",
        data: {
            listaImmagini: [
                {
                  url: 'img/01.jpg',
                  titolo: 'Svezia',
                  descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                  url: 'img/02.jpg',
                  titolo: 'Svizzera',
                  descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                  url: 'img/03.jpg',
                  titolo: 'Gran Bretagna',
                  descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                  url: 'img/04.jpg',
                  titolo: 'Germania',
                  descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                  url: 'img/05.jpg',
                  titolo: 'Paradise',
                  descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                }
            ],
            immagineCorrente: 0
        },

        methods: {
            onPrevClick() {
                let nuovoIndex = this.immagineCorrente - 1;
          
                if (nuovoIndex < 0) {
                  nuovoIndex = this.listaImmagini.length - 1;
                }
          
                this.immagineCorrente = nuovoIndex
            },
          
            onNextClick() {
                let nuovoIndex = this.immagineCorrente + 1;
          
                if (nuovoIndex > this.listaImmagini.length - 1) {
                  nuovoIndex = 0;
                }
          
                this.immagineCorrente = nuovoIndex
            }
        }
    });