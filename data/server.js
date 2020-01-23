// emulation server

export const userData = async () => ({
    name: 'Vasya',
    surname: 'Pupkin'
})

export const profile = async () => ({
    country: 'USA'
})

export const endpointSave = async (data) => {
    console.log('200OK')
    return true
}