// emulation server

let userData = {
    name: 'Vasya',
    surname: 'Pupkin',
    parent: {
        name: 'Ivan',
        surname: 'Ivanov',
        age: '20'
    }
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

export const saveParentData = async (data) => {
    userData.parent = data
}

export const saveProfile = async (data) => {
    if(profile = data)     
    console.log('200OK')
    return true
}