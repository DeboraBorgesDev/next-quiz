import { shuffleQuestions } from "@/functions/Arrays"
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

    shuffleAnswers(): QuestionModel {
        let shuffledAnswers = shuffleQuestions(this.#answers)
        return new QuestionModel(this.#id, this.#title, shuffledAnswers, this.#right)
    }

    repplyWith(indice: number): QuestionModel {
        const correct = this.#answers[indice]?.right
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = indice === i
            const mustReveal = selectedAnswer || answer?.right
            return mustReveal ? answer.reveal() : answer
        })

        return new QuestionModel(this.#id, this.title, answers, correct)
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