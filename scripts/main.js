import API from "./data.js"
import journalMaker from "./entryList.js"

API.getJournalEntries().then((res)=> {
    console.log(res)
    journalMaker.renderJournalEntries(res)
})

