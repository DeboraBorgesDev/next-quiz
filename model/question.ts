export default class QuestionModel {
    #id: number
    #title: string
    #answers: any[]
    #right: boolean

    constructor(id: number, title: string, answers: any[], right = false){
        this.#id = id
        this.#title = title
        this.#answers = answers
        this.#right = right
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }

    get answers(){
        return this.#answers
    }

    get right(){
        return this.#right
    }


}