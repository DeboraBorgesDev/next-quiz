import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #title: string
    #answers: AnswerModel[]
    #right: boolean

    constructor(id: number, title: string, answers: AnswerModel[], right = false){
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

    get answered() {
        for (let answer of this.#answers){
            if(answer.revealed) return true
        }

        return false
    }

    toObject() {
        return {
            id: this.#id,
            title: this.#title,
            answers: this.#answers.map(answer => answer.toObject()),
            right: this.#right
        }
    }


}