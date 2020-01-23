// emulation server

let userData = {
    name: 'Vasya',
    surname: 'Pupkin'
}

export const getUserData = async () => userData

export const getProfile = async () => ({
    country: 'USA'
})

export const saveUserData = async (data) => {
    if(userData = data)     
    console.log('200OK')
    return true
}