navigator.serviceWorker.register('./sw.js');
let eventInstall;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();

    eventInstall = e;
    app.btnVisible = true;

  });

const app = new Vue({
    el: '#app',
    data: {
        btnVisible: false,
        notas: [
            { text: 'Notas 1'},
            { text: 'Notas 2'},
            { text: 'Notas 3'},

        ]
    }, 
    methods: {
        instalar(){
            console.log('Instaladon app')
            eventInstall.prompt();
            eventInstall.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('La aplicación fue instalada con éxito');
                app.btnVisible = false
              }
            });
        }
    }
})