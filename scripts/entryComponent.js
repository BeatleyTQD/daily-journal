/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML
*/

const journalEntry = {
    makeJournalEntryComponent (journalEntry) {
        const journalHTMLRepresentation =
        `   <h2>${journalEntry.date}</h2>
            <h3>${journalEntry.concept}</h3>
            <div>${journalEntry.content}</div>
            <div>${journalEntry.mood}</div>     
        `
        return journalHTMLRepresentation
    }
}

export default journalEntry