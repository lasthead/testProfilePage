// emulation server

let userData = {
    name: 'Vasya',
    surname: 'Pupkin'
}

let profile = {
    country: 'USA'
}

export const getUserData = async () => userData

export const getProfile = async () => profile

export const saveUserData = async (data) => {
    if(userData = data)     
    console.log('200OK')
    return true
}

export const saveProfile = async (data) => {
    if(profile = data)     
    console.log('200OK')
    return true
}