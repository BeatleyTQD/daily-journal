/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML
*/

const journalEntry = {
    makeJournalEntryComponent (journalEntry) {
        const journalHTMLRepresentation =
        `   <h2>${journalEntry.concept}</h2>
            <div>${journalEntry.content}</div>
            <div>${journalEntry.date}</div>    
        `
        return journalHTMLRepresentation
    }
}

export default journalEntry