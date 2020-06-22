const url = "http://localhost:8088/entries"

const API = {
    getJournalEntries () {
        return fetch(`${url}`)
            .then(response => {
                return response.json()
            })
    },
    saveJournalEntry (newEntry) {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    deleteJournalEntry (id) {
        return fetch(`${url}/${id}`, {
                method: "DELETE"
        }).then(response => response.json());
    },
    getSingleEntry (id) {
        return fetch(`${url}/${id}`)
        .then(response => response.json());
    },
    updateJournalEntry (id, updatedJournalFields) {
        return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
        	},
        	body: JSON.stringify(updatedSweetObj)
            })
        }
    }

            
    
 export default API



