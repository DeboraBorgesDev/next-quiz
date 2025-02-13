const URL_BASE = 'http://localhost:3000/api'


export function getQuestionsIds() {
    return fetch(`${URL_BASE}/questionnaire`)
}

export function getQuestion(id: number) {
    return fetch(`${URL_BASE}/questions/${id}`)
}