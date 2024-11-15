

const apiUrl = process.env.API_URL;
export async function fetchPost(controller, action) {

    return {
        get: `${apiUrl}/${controller}``${action?`/${action}`:''} `
    }
}