import journalEntry from "./entryComponent.js"

let allJournalEntries = []

const journalMaker = {
    renderJournalEntries (allJournalEntries) {
        console.log("rendering entries")
        console.log(allJournalEntries)
        for (const entry of allJournalEntries) {
            const journalHTMLRepresentation = journalEntry.makeJournalEntryComponent(entry)
            const journalArticleElement = document.querySelector(".entryLog")
            journalArticleElement.innerHTML += journalHTMLRepresentation
        }
        
    }  
}

export default journalMaker