export default class AnswerModel{
    #value: string
    #right: boolean
    #revealed: boolean

    constructor(value: string, right = false, revealed = false){
        this.#value = value
        this.#right = right
        this.#revealed = revealed
    }

    static correct(valor: string) {
        return new AnswerModel(valor, true)
    }
    
    static wrong(valor: string) {
        return new AnswerModel(valor, false)
    }

    get value() {
        return this.#value
    }

    get right(){
        return this.#right
    }

    get revealed(){
        return this.#revealed
    }

    toObject(){
       return {
        value: this.#value,
        right: this.#right,
        revealed: this.#revealed
       }
    }
}