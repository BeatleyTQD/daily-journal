/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
let allJournalEntries = []

// const getJournalData = () => {
// // Pulling data from API 
// return fetch("http://localhost:3000/entries").then(
//     response => response.json()).then({entries) => {
//        allJournalEntries = entries
//     })
// }

const getJournalEntry = () => {
    return fetch("http://localhost:3000/entries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayJournalEntries) => {
                // 100 percent sure the data is back
                allJournalEntries = arrayJournalEntries
            }
        )
}



/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML
*/
const makeJournalEntryComponent = (journalEntry) => {
    const journalHTMLRepresentation =
    `   <h2>${journalEntry.concept}</h2>
        <div>${journalEntry.content}</div>
        <div>${journalEntry.date}</div>    
    `
    return journalHTMLRepresentation
}


/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = () => {
    for (const entry of allJournalEntries) {
        const journalHTMLRepresentation = makeJournalEntryComponent(entry)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
    
}

// Invoke the render function

getJournalEntry().then(
    () => {
        renderJournalEntries()
    }
)