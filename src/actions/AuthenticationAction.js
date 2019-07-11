export const modifyEmail = (text) => {
    return {
        type: 'modify_email',
        payload: text
    }
};

export const modifyPassword = (text) => {
    return {
        type: 'modify_password',
        payload: text
    }
}
