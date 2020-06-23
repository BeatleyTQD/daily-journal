import journalEntry from "./entryComponent.js"


const journalMaker = {
    renderJournalEntries (allJournalEntries) {
        const journalArticleElement = document.querySelector("#entryLog")
        journalArticleElement.innerHTML = ""
        for (const entry of allJournalEntries) {
            const journalHTMLRepresentation = journalEntry.makeJournalEntryComponent(entry)
            journalArticleElement.innerHTML += journalHTMLRepresentation
        }       
    }  
}

export default journalMaker