const updateJournalFields = (journalEntry) => {
    let hidddenJournalId = document.querySelector("#journalId")
    let dateInput = document.querySelector("#journalDate")
    let conceptInput = document.querySelector("#conceptCovered")
    let contentInput = document.querySelector("#journalEntryContent")
    let moodInput = document.querySelector("#mood")

    hidddenJournalId = journalEntry.id;
    dateInput = journalEntry.dateInput;
    conceptInput = journalEntry.concept;
    contentInput = journalEntry.content;
    moodInput = journalEntry.mood;
}

export default updateJournalFields;


