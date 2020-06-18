import API from "./data.js"
import journalMaker from "./entryList.js"
import createJournalEntry from "./createEntry.js"

// API.getJournalEntries()
// .then((res)=> {
//     journalMaker.renderJournalEntries(res)
// })

document.querySelector("#submit").addEventListener("click", clickEvent => {
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#conceptsCovered").value
    const content = document.querySelector("#journalEntryContent").value
    const mood = document.querySelector("#mood").value

    //checks to see that all fields are filled, if not alerts user to complete it and resubmit
    if (date !== "" && concept !== "" && content !== "" && mood !== "") {
        let newEntry = createJournalEntry(date, concept, content, mood)
        //saves and immediately refreshes page to display new entry
        API.saveJournalEntry(newEntry)
        .then(() => {
            return API.getJournalEntries()
        })
        .then((allObjectsFromAPI) => {
            return journalMaker.renderJournalEntries(allObjectsFromAPI)
        })
     }
    else (alert("Please fill out entire form and resubmit!"));
}   )


