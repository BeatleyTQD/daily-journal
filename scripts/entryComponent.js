/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML
*/

const journalEntry = {
    makeJournalEntryComponent (journalEntry) {
        const journalHTMLRepresentation =
        `   <div>
            <div>${journalEntry.date}</div>
            <div>${journalEntry.concept}</div>
            <div>${journalEntry.content}</div>
            <div>${journalEntry.mood}</div>
            <button id="editEntry--${journalEntry.id}">Edit</button>
            <button id="deleteEntry--${journalEntry.id}">Delete</button>
            </div>     
        `
        return journalHTMLRepresentation
    }
}
export default journalEntry