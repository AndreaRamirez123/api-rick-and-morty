async function consumirApiFetch(url) {
    console.log('consumirApiFetch()');
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("[ERROR] ", error);
    }
}