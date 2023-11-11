import fs from 'fs'

const filePath = './Challenge-01/input.txt'

export const func = () => {
    const data = fs.readFileSync(filePath, 'utf8')
    const content = data.toString('utf8').toLowerCase()
    let result = ''
    const array = content.split(' ')

    const obj = {}

    array.forEach((elem) => {
        if (Object.keys(obj).includes(elem)) {
            obj[elem] = obj[elem] + 1
        } else {
            obj[elem] = 1
        }
    })

    for (const [key, value] of Object.entries(obj)) {
        result += key + value
    }

    return result
}
