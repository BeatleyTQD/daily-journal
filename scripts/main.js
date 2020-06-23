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
    //checks to see that all fields are filled, if not alerts user to complete it and resubmit
    const hiddenJournalId = document.querySelector("#journalId");
    const journalDateInput = document.querySelector("#journalDate").value;
    const journalConceptInput = document.querySelector("#conceptCovered").value;
    const journalEntryInput = document.querySelector("#journalEntryContent").value;
    const journalMoodInput = document.querySelector("#mood").value;

    if (hiddenJournalId.value !== "") {

        API.updateJournalEntry(hiddenJournalId.value, createJournalEntry(journalDateInput, journalConceptInput, journalEntryInput, journalMoodInput))
        .then(() => {
            return API.getJournalEntries()})
        .then((response) => {
            clearEntryForm()
            return journalMaker.renderJournalEntries(response);
        })
    } else {
            if (journalDateInput !== "" && journalConceptInput !== "" && journalEntryInput !== "" && journalMoodInput !== "") {
                let newEntry = createJournalEntry(journalDateInput, journalConceptInput, journalEntryInput, journalMoodInput)
                //saves and immediately refreshes page to display new entry
                API.saveJournalEntry(newEntry)
                .then(() => {
                    return API.getJournalEntries()
                })
                .then((allObjectsFromAPI) => {
                    return journalMaker.renderJournalEntries(allObjectsFromAPI)
                })
            }
            else (alert("Please fill out entire form and resubmit!"));}
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

// export default {
const entryListener = () => {
    entryLog.addEventListener("click", event => {
        if (event.target.id.startsWith("deleteEntry--")) {
            const entryToDelete = event.target.id.split("--")[1]
            console.log("entry to delete", entryToDelete)
            API.deleteJournalEntry(entryToDelete)
            .then(API.getJournalEntries)
            .then(journalMaker.renderJournalEntries)
        } else if (event.target.id.startsWith("editEntry--")) {
            const entryToEdit = event.target.id.split("--")[1];
            console.log("entry to edit", entryToEdit);
            API.getSingleEntry(entryToEdit)
            .then(journalEntry => updateJournalFields(journalEntry))
        }
    })
}
// }


const clearEntryForm = () => {
    document.querySelector("#journalId").value = "";
    document.querySelector("#journalDate").value = "";
    document.querySelector("#conceptCovered").value = "";
    document.querySelector("#journalEntryContent").value = "";
    document.querySelector("#mood").value = "";
}


entryListener()