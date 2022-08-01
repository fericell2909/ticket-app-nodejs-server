const TicketList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;
        // 
        this.ticketlist = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: mensaje-to-server
            socket.on('solicitar-ticket', (data,callback) => {
                // console.log('nuevo ticket backend');
                callback(this.ticketlist.crearTickcet())
            })
            

            socket.on('siguiente-ticket-trabajar', ({agente, escritorio},callback) => {
                // console.log('nuevo ticket backend');
                callback(this.ticketlist.asignarTicket(agente,escritorio))
            })
        
        });


        
    }


}


module.exports = Sockets;