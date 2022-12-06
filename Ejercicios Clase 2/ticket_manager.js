class TicketManager {
    
    #precioBaseDeGanancia
    constructor () {
        this.events = []
        this.#precioBaseDeGanancia = 0.15

    }

    getEvents = () => {return this.events}
    
    //Consigue el siguiente ID
    getNextID = () => {
        const count = this.events.length
        if (count == 0) return 1

        const lastEvent = this.events[count-1]
        const lastID = lastEvent.id
        const nextID = lastID + 1

        return nextID
    }

    addEvent = (name, place, price, capacity, date) => {
        const id = this.getNextID()
        
        const event = {
            id,
            name,
            place,
            priceBase: price,
            price: price * (1 + this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date ?? New Date().toLocaleDateString(),
            participants: []
        }

        this.event.push(event)
    }

    addParticipant = (eventID, userID) => {
        const event = this.events.find(event => event.id == eventID)
        if(event == undefined) return -1

        if(!event.participants.includes(userID))  {
            event.participants.push(userID)
            return 1
        }
        return -1
    }

    ponerEventoEnGira = (eventID, placeNew, dateNew) => {
        const event = this.events.find(event => event.id == eventID)
        const { name, priceBase, capacity } = event
        
        this.addEvent(name, placeNew, priceBase, capacity, dateNew)
    }
}

const manager = new TicketManager ()
manager.addEvent("Metallica", "Moscu", 300, null, null)
manager.addEvent("Guns N Roses", "Portland", 250, null, null)

(manager.addParticipant(1, 333))
(manager.addParticipant(1, 444))
(manager.addParticipant(1, 333))
(manager.addParticipant(2, "Jorge Gutiérrez"))
(manager.addParticipant(2, "Carlos Gómez"))

manager.ponerEventoEnGira(1, "Buenos Aires", null)

console.log(manager.events);

