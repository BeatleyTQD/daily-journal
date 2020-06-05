let allJournalEntries = []

const renderJournalEntries = () => {
    for (const entry of allJournalEntries) {
        const journalHTMLRepresentation = makeJournalEntryComponent(entry)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
    
}