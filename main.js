var app = new Vue(
    {
      el: '#root',
      data: {
        variabiledinamica : 0,
        inputMessage : '',
        contacts: [
            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            }
        ]
      
     },

      methods: {
        // cliccando su un utente restituisce la chat dell'utente cliccato
        changeChat(index){
            this.variabiledinamica = index;
        }, 

        getLastHourContacts(element){
            let lastDate = element.messages[ element.messages.length-1].date;
            lastDate = lastDate.split(' ');
            
            return lastDate[1];
        },

        // prova per mettere ultimo ora del messaggio nell'header della parte destra
        // getLastHourContactsHeader(){
        //     let lastDateHeader = this.contact[ messages].date;
        //     lastDateHeader = lastDateHeader.split(' ');
            
        //     return lastDateHeader[1];
        // },

        getLastHourMessages(element){
            let date = element.date;
            date = date.split(' ');

            return date[1];
        },

        sentMessage(){
            let getMessage = this.contacts[this.variabiledinamica].messages;
            getMessage.push( {
                    date: '10/01/2020 15:50:00',
                    message: this.inputMessage,
                    status: 'sent'
                    }
            )

            setTimeout( () => {
                getMessage.push(
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'ok',
                        status: 'received'
                    }
                )
            },3000)
            }
        }

     }
 );