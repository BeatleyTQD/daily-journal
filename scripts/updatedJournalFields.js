const updateJournalFields = (journalEntry) => {
    let hidddenJournalId = document.querySelector("#journalId")
    let dateInput = document.querySelector("#journalDate")
    let conceptInput = document.querySelector("#conceptCovered")
    let contentInput = document.querySelector("#journalEntryContent")
    let moodInput = document.querySelector("#mood")

    hidddenJournalId.value = journalEntry.id;
    dateInput.value = journalEntry.date;
    conceptInput.value = journalEntry.concept;
    contentInput.value = journalEntry.content;
    moodInput.value = journalEntry.mood;
}

export default updateJournalFields;


