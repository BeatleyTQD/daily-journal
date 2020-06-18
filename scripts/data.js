const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => {
                return response.json()
            })
    },
    saveJournalEntry (newEntry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    }
}
            
    
 export default API



