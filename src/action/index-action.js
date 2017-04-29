export const selectedUser = (user) => {
    console.log('you clicked on user' , user.first);
    return {
        type: 'USER-SELECTED',
        payload: user
    }
}