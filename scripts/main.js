import API from "./data.js"
import journalMaker from "./entryList.js"
import createJournalEntry from "./createEntry.js"
import updateJournalFields from "./updatedJournalFields.js"

// import journalGrabber from "./journalGrabber.js"  --think this is the direction to go


API.getJournalEntries()
.then((response) => {
    journalMaker.renderJournalEntries(response)
})

document.querySelector("#submit").addEventListener("click", clickEvent => {
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#conceptCovered").value
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

//Mood filtering///////////////////////////////////////////
const moodFilterSelection = document.getElementsByName("mood")

moodFilterSelection.forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        const mood = event.target.value
        console.log("Mood Filter Selection:", mood)
        API.getJournalEntries()
        .then((response) => {
            let filteredMoodChoice = response.filter(filteredMood => {
                return filteredMood.mood === mood
            })
        journalMaker.renderJournalEntries(filteredMoodChoice)
        })
    })
});


//////////////////////////////////////////////////////////

//Delete Button/////////////////////////////////////////////
const entryLog = document.querySelector("#entryLog");

const entryListener = () => {
    entryLog.addEventListener("click", event => {
        console.log("delete listener")
        if (event.target.id.startsWith("deleteEntry--")) {
            const entryToDelete = event.target.id.split("--")[1]
            console.log(entryToDelete)
            API.deleteJournalEntry(entryToDelete)
            .then(API.getJournalEntries)
            .then(journalMaker.renderJournalEntries)
        } else if (event.target.id.startsWith("editEntry--")) {
            const entryToEdit = event.target.id.split("--")[1];
            console.log(entryToEdit);
            API.getSingleEntry(entryToEdit)
            .then(journalEntry => updateJournalFields(journalEntry))
        }
    })
}

entryListener()