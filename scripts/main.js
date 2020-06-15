import API from "./data.js"
import journalMaker from "./entryList.js"

API.getJournalEntries()
.then((res)=> {
    journalMaker.renderJournalEntries(res)
})

