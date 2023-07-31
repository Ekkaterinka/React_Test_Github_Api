export const searchUser = async (search:any) => {
    const params = new
        URLSearchParams({ q: search, sort: 'repositories'});

    const response = await
        fetch(`${import.meta.env.VITE_APP_SEARCH_URL}?${params}`);
        console.log(import.meta.env.VITE_APP_SEARCH_URL)
    if (!response.ok) {
        throw new
            Error(response.statusText);
            
    }
    return await response.json();
}

export const detailsUser = async (login:any) => {
    const response = await
        fetch(`${import.meta.env.VITE_APP_URL}/${login}`);
    console.log(`${import.meta.env.VITE_APP_URL}/${login}`)
    if (!response.ok) {
        throw new
            Error(response.statusText);

    }
    return await response.json();
}


