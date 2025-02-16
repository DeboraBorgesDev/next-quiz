const URL_BASE = 'https://next-quiz-weld.vercel.app/api'


export function getQuestionsIds() {
    return fetch(`${URL_BASE}/questionnaire`)
}

export function getQuestion(id: number) {
    return fetch(`${URL_BASE}/questions/${id}`)
}