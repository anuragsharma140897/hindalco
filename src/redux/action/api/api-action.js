

export const HitApi = (json, api) => {
    const MyPromiss = new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-auth': 'token' },
            body: JSON.stringify(json)
        };
        fetch(api, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result) {
                        resolve(result)
                    }
                },
                (error) => {
                    resolve(error)
                }
            )
    })

    return MyPromiss;
}