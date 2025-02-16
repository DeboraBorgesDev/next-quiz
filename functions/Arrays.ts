export function shuffleQuestions(elements: any[]): any[] {
    return elements.map(value => ({value, random: Math.random()}))
        .sort((obj1, obj2) => obj1.random - obj2.random)
        .map(value => value.value)
} 