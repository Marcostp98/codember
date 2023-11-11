import fs from 'fs'

const filePath = './Challenge-02/input.txt'

/*
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/

export const minicompiler = () => {
    const data = fs.readFileSync(filePath, 'utf8')
    const content = data.toString('utf8')
    let currentNumber = 0
    let result = ''
    const array = content.split('')
    array.forEach((elem) => {
        if (elem === '&') {
            result += currentNumber
        }
        if (elem === '*') {
            currentNumber = currentNumber * currentNumber
        }
        if (elem === '#') {
            currentNumber += 1
        }
        if (elem === '@') {
            currentNumber -= 1
        }
    })

    return result
}
