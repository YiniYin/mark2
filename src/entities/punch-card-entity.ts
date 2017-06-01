
export class PunchCardEntity {
    punchCards
    hours

    constructor(punchCards) {
        this.punchCards = this.process(punchCards)
        this.hours = this.getHours()
    }

    private process(punchCards) {
        punchCards = punchCards || []

        enum Day {
            Sunday,
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday
        }

        punchCards.forEach((card, index) => {
            let punches = []

            for (let i = 0; i < 12; i++) {
                punches[i] = card[i] || 0
            }

            card.punches = punches

            card.day = Day[index]
        })

        return punchCards
    }

    private getHours() {
        let hours = []

        for (let i = 8; i <= 20; i++) {
            hours[i] = i
        }

        return hours
    }
}