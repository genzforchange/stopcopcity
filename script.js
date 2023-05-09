$(document).ready(function() {
const contract = document.getElementById("contract")
const fund = document.getElementById("fund")
const local = document.getElementById("local")


  


const addresses = {
    "contract": "contact@oneatlas.com,mthurman@longeng.com,garrett.owen@oneatlas.com,jgriffin@longeng.com,jthompson@longeng.com,apankopp@longeng.com,mcamlic@longeng.com,rgonzalez@longeng.com,tseth@longeng.com,hwalrod@longeng.com,darren.moore@oneatlas.com,buddy.gratton@oneatlas.com,tonykenney@ls3p.com,marklevine@ls3p.com,neildawson@ls3p.com,lauramiller@ls3p.com,stevehepler@ls3p.com,ginnafrey@ls3p.com,jefffloyd@ls3p.com,maggiecarnevale@ls3p.com,jimhubbard@ls3p.com,marybethbranham@ls3p.com,richardgowe@ls3p.com,clyerla@specialtyfinishes.com,gwhite@specialtyfinishes.com,cwright@specialtyfinishes.com,cmevans@specialtyfinishes.com,ggunter@specialtyfinishes.com,info@banyanstreet.com,dsturner@mhpnyc.com,jmcdaniel@brasfieldgorrie.com,tmartindill@brasfieldgorrie.com,fzyryanov@brasfieldgorrie.com,tdaleo@brasfieldgorrie.com,msmith@brasfieldgorrie.com,jmodrich@brasfieldgorrie.com,bterry@brasfieldgorrie.com,rries@brasfieldgorrie.com,rfuchs@brasfieldgorrie.com,aluttrell@brasfieldgorrie.com,hthomas@brasfieldgorrie.com,jcase@brasfieldgorrie.com,elogan@brasfieldgorrie.com,molson@brasfieldgorrie.com,fsmith@brasfieldgorrie.com,hseawell@brasfieldgorrie.com,charp@brasfieldgorrie.com,mmeyer@brasfieldgorrie.com,tcarter@brasfieldgorrie.com,dkuemmerle@brasfieldgorrie.com,dcooper@brasfieldgorrie.com,kbrooks@brasfieldgorrie.com,jslayton@brasfieldgorrie.com,ahawkins@brasfieldgorrie.com,mkeller@brasfieldgorrie.com,ghunsberger@brasfieldgorrie.com,bfoster@brasfieldgorrie.com,thanley@brasfieldgorrie.com,mshoemaker@brasfieldgorrie.com,kschuchmann@brasfieldgorrie.com,drhoden@brasfieldgorrie.com,hbryant@brasfieldgorrie.com,ghaigh@brasfieldgorrie.com,bmorgan@brasfieldgorrie.com,oburke@brasfieldgorrie.com,lstoker@brasfieldgorrie.com,bmyers@brasfieldgorrie.com,kwhite@brasfieldgorrie.com,jhodges@brasfieldgorrie.com,mscott@brasfieldgorrie.com,bhaisten@brasfieldgorrie.com,aray@brasfieldgorrie.com,wwatanabe@brasfieldgorrie.com,bbrennan@brasfieldgorrie.com,wmclean@brasfieldgorrie.com,kbreeland@brasfieldgorrie.com,mhasamoh@brasfieldgorrie.com,rparker@brasfieldgorrie.com,skernan@brasfieldgorrie.com,mmcclure@brasfieldgorrie.com,rstewart@brasfieldgorrie.com,ecengic@brasfieldgorrie.com,mpringle@brasfieldgorrie.com,kwhitehead@brasfieldgorrie.com,tnester@brasfieldgorrie.com,thamby@brasfieldgorrie.com,agreenlee@brasfieldgorrie.com,pvann@brasfieldgorrie.com,cwaters@brasfieldgorrie.com,lsteinle@brasfieldgorrie.com,kbarriault@brasfieldgorrie.com,cwilliams@brasfieldgorrie.com,mwade@brasfieldgorrie.com,sglover@brasfieldgorrie.com,brice@brasfieldgorrie.com,sjohnson@brasfieldgorrie.com,cmcgeady@brasfieldgorrie.com,jwood@brasfieldgorrie.com,jelliott@brasfieldgorrie.com,awheeler@brasfieldgorrie.com,acarroll@brasfieldgorrie.com,gcumbie@brasfieldgorrie.com,jmckinney@brasfieldgorrie.com,apowell@brasfieldgorrie.com",
    "fund": "brown@woodruff.org,conway@woodruff.org,gaines@woodruff.org,johnson@woodruff.org,jones@woodruff.org,morgan@woodruff.org,patteson@woodruff.org,smith@woodruff.org,tablan@woodruff.org,voegtlin@woodruff.org,walton@woodruff.org,Mark.W.Elliott@wellsfargo.com,William.daley@wellsfargo.com,Bei.ling@wellsfargo.com,Lester.owens@wellsfargo.com,Saul.Beurden@wellsfargo.com,Scott.powell@wellsfargo.com,Steve.black@wellsfargo.com,Wayne.Hewett@wellsfargo.com,Maria.Morris@wellsfargo.com,Felicia.norwood@wellsfargo.com,Richard.payne@wellsfargo.com,Juan.pujadas@wellsfargo.com,Ronald.sargent@wellsfargo.com,julie.anderson@gapac.com,pat.boushka@gapac.com,Tye.Darland@gapac.com,David.Duncan@gapac.com,Chris.Graham@gapac.com,Jeff.Koeppel@gapac.com,info@richfoundationatlanta.org,carol@ups.com,leg1nmb@ups.com,ncesarone@ups.com,dford@ups.com,kgutmann@ups.com,lauralane@ups.com,bnewman@ups.com,bsubramanian@ups.com,kwarren@ups.com,wjohnson@ups.com,radkins@ups.com,evab@ups.com,mburns@ups.com,whewett@ups.com,ahwang@ups.com,kjohnson@ups.com,alivermore@ups.com,fmoison@ups.com,cshi@ups.com,rstokes@ups.com,kwarsh@ups.com,jay.davis@rndc-usa.com,ann.davis@mdc-usa.com",
    "local": "dshipman@atlantaga.gov,mbond@atlantaga.gov,mwestmoreland@atlantaga.gov,kwaites@atlantaga.gov,jwinston@atlantaga.gov,arfarokhi@atlantaga.gov,bdamos@atlantaga.gov,jdozier@atlantaga.gov,Lbakhtiari@atlantaga.gov,awan@atlantaga.gov,hshook@atlantaga.gov,mnorwood@atlantaga.gov,drhillis@atlantaga.gov,aboone@atlantaga.gov,mcoverstreet@atlantaga.gov,anlewis@atlantaga.gov,odie@atlantaga.gov,lygordon@atlantaga.gov,cenglish@atlantaga.gov,katta@atlantaga.gov,lburks@atlantaga.gov,jingram@atlantaga.gov,tpace@atlantaga.gov,awagner@atlantaga.gov,brthomas@atlantaga.gov,chiggs@atlbeltline.org,rmsmith@atlantaga.gov,eugene.jones@atlantahousing.org,dschierbaum@atlantaga.gov,jsankey@atlantaga.gov,balram.bheodari@atl.com,jrprince@atlantaga.gov,eldancy@atlantaga.gov,mcgood@atlantaga.gov,rsaintil@atlantaga.gov,mballa@atlantaga.gov,tmwilson@atlantaga.gov,dblonon@atlantaga.gov,twsmith@atlantaga.gov,ninarhickson@atlantaga.gov,jcutler@atlantaga.gov,jmajumdar@atlantaga.gov,awiggins@atlantaga.gov,manderson-bomar@atlantaga.gov,mbrowning@atlantaga.gov,eklementich@investatlanta.com,cbailey@atlantaga.gov,fdenbrok@atlantaga.gov,qabdur-rahim@atlantaga.gov,kenymitchell@atlantaga.gov,vibarra@atlantaga.gov,cfarley@atlantaga.gov"
}

// const gz4c_emails = {
//     "contract": "genzforchangespambot@gmail.com",
//     "fund": "genzforchangespambot2@gmail.com",
//     "local": "genzforchangespambot3@gmail.com"
// }

const subjects = {
    "contract": [
        "Stop Developing the Atlanta Police Training Facility",
        "Stop Developing the Atlanta Public Safety Training Center",
        "Stop Developing the Atlanta Public Safety Training Facility",
        "Stop Developing the Atlanta Police Training Center",
        "Stop Constructing the Atlanta Police Training Facility", 
        "Stop Constructing the Atlanta Public Safety Training Facility", 
        "Stop Constructing the Atlanta Public Safety Training Center", 
        "Stop Constructing the Atlanta Police Training Center", 
        "Halt Construction on the Atlanta Police Training Facility", 
        "Halt Construction on the Atlanta Public Safety Training Center",
        "Halt Construction on the Atlanta Public Safety Training Facility",
        "Halt Construction on the Atlanta Police Training Center",
        "Stop Development on the Atlanta Police Training Facility",
        "Stop Development on the Atlanta Public Safety Training Center",
        "Stop Development on the Atlanta Public Safety Training Facility",
        "Stop Development on the Atlanta Police Training Center"

    ],
    "fund": [
        "Stop Funding the Atlanta Police Training Facility",
        "Stop Funding the Atlanta Public Safety Training Center",
        "Stop Funding the Atlanta Public Safety Training Facility",
        "Stop Funding the Atlanta Police Training Center",
        "Stop Donating to the Atlanta Police Training Facility",
        "Stop Donating to the Atlanta Public Safety Training Center",
        "Stop Donating to the Atlanta Public Safety Training Facility",
        "Stop Donating to the Atlanta Police Training Center",
        "Halt Funding on the Atlanta Police Training Facility", 
        "Halt Funding on the Atlanta Public Safety Training Center",
        "Halt Funding on the Atlanta Public Safety Training Facility",
        "Halt Funding on the Atlanta Police Training Center"

    ],
    "local": [
        "Stop the Atlanta Police Training Facility",
        "Stop the Atlanta Public Safety Training Center",
        "Stop the Atlanta Public Safety Training Facility",
        "Stop the Atlanta Police Training Center",
        "Halt the Atlanta Police Training Facility",
        "Halt the Atlanta Public Safety Training Center",
        "Halt the Atlanta Public Safety Training Facility",
        "Halt the Atlanta Police Training Center",
        "Abandon the Atlanta Police Training Facility",
        "Abandon the Atlanta Public Safety Training Center",
        "Abandon the Atlanta Public Safety Training Facility",
        "Abandon the Atlanta Police Training Center"
    ]
}

const synonyms = {
    "concerned": ["concerned", "worried", "disturbed", "apprehensive", "nervous", "distressed", "alarmed"],
    "urging": ["urging", "pleading with", "calling on", "calling for"],
    "destroy": ["destroy", "ruin", "annihilate", "demolish", "kill", "eradicate", "devastate", "sabotage"],
    "crucial": ["crucial", "critical", "vital", "essential", "pivotal", "central", "paramount", "imperative"],
    "perpetuate": ["perpetuate", "uphold", "continue", "maintain", "extend", "expand", "prolong", "amplify"],
    "dangerous": ["dangerous", "threatening", "perilous", "hazardous", "destructive", "damaging"],
    "inflict": ["inflict", "impose", "administer", "deliver", "exact", "direct", "levy"],
  "writing": ["am writing", "write", "message", "am messaging", "write", "am writing", "email", "am emailing"],
  "express": ["voice", "express", "relay"],
   "anger": ["anger", "dissatisfaction", "frustration"],
  "stop": ["stop", "cease", "halt"],
  "facility": ["Public Safety Training Center", "Training Facility", "Training Center", "Public Safety Training Facility", "Police/Fire Training Facility", "Police/Fire Training Center"],
  "members": ["members", "citizens"],
  "country": ["nation", "country", "US", "United States"],
  "construction": ["development", "construction", "creation"],
}

const bodies = {
    "contract": [
        `As ${getSynonym('concerned')} ${getSynonym('members')} of the Atlanta community and across the ${getSynonym('country')}, we are ${getSynonym('urging')} you to immediately ${getSynonym("stop")} construction of the Atlanta ${getSynonym('facility')}. Your involvement in its development will ${getSynonym('destroy')} over 350 acres of precious forests, described by many as the lungs of Atlanta and ${getSynonym('crucial')} to the health and air quality of the community. Moreover, this facility will ${getSynonym('perpetuate')} the systemic violence placed on the Atlanta community. So far, this facility has resulted in the murder of a forest defender by police. For the sake of the safety and health of Atlanta, please drop your contracts.`,
        `I ${getSynonym('writing')} to you regarding the ${getSynonym('dangerous')} development of Atlanta’s ${getSynonym('facility')}, where police will be trained on how to ${getSynonym('inflict')} militant violence in their respective communities. Even more, this construction will ${getSynonym('destroy')} up to 380 acres of Atlanta forest, ${getSynonym('crucial')} for the health of the Atlanta community and ecosystem. Given your power in dictating the trajectory of this project, we are ${getSynonym('urging')} you to stop construction.`
    ],
    "fund": [
        `As ${getSynonym('concerned')} members of the Atlanta community and across the country, we are ${getSynonym('urging')} you to immediately cease investment in Atlanta Police Foundation until the Atlanta training facility project is halted completely. Your involvement in its development will ${getSynonym('destroy')} over 350 acres of precious forests, described by many as the lungs of Atlanta and ${getSynonym('crucial')} to the health and air quality of the community. Moreover, this facility will ${getSynonym('perpetuate')} the systemic violence placed on the Atlanta community. So far, this facility has resulted in the murder of a forest defender by police. For the sake of the safety and health of Atlanta, please drop your contracts.`,
        `We are writing to you regarding the ${getSynonym('dangerous')} development of Atlanta’s public safety training center, where police  will be trained on how to ${getSynonym('inflict')} militant violence in their respective communities. Even more, this construction will ${getSynonym('destroy')} up to 380 acres of Atlanta forest, ${getSynonym('crucial')} for the health of the Atlanta community and ecosystem. Given your power in dictating the trajectory of this project, we are ${getSynonym('urging')} you to remove all investments in Atlanta Police Foundation until the Atlanta training facility project is halted completely.`
    ],
    "local": [
        `As ${getSynonym('concerned')} members of the Atlanta community and across the country, we are ${getSynonym('urging')} you to immediately cease construction of the Atlanta training facility. Your involvement in its development will ${getSynonym('destroy')} over 350 acres of precious forests, described by many as the lungs of Atlanta and ${getSynonym('crucial')} to the health and air quality of the community. Moreover, this facility will ${getSynonym('perpetuate')} the systemic violence placed on the Atlanta community. So far, this facility has resulted in the murder of a forest defender by police. For the sake of the safety and health of Atlanta, please cancel your lease for the facility and stop taxpayer dollars from funding a project the community does not support.`,
        `We are writing to you regarding the ${getSynonym('dangerous')} development of Atlanta’s public safety training center, where police from all over the country will be trained on how to ${getSynonym('inflict')} militant violence in their respective communities. Even more, this construction will ${getSynonym('destroy')} over 350 acres of Atlanta forest, ${getSynonym('crucial')} for the health of the Atlanta community and ecosystem. Given your power in dictating the trajectory of this project, we are ${getSynonym('urging')} you to call off your lease for the training center and stop taxpayer dollars from funding a project the taxpayers don’t support.`
    ]
}

function pickRandomElement(arr) {
    var index = Math.floor(Math.random() * arr.length)
    return arr[index];
}

function getSynonym(word) {
    var arr = synonyms[word]
    arr.push(word)
    return pickRandomElement(arr)
}

function getAddresses(num, group) {
    arr = addresses[group].split(',')
    const shuffled = arr.sort(() => 0.5 - Math.random())
    let selected = shuffled.slice(0, num)
    // selected.push(gz4c_emails[group])
    return selected.join(",")
}

function encodeBody(value) {
    var to_encode = "To whom it may concern,\n\n" + value
    return encodeURIComponent(to_encode)
}

function getEmailLink(group) {
    var email = getAddresses(25, group)
    var subject = pickRandomElement(subjects[group])
    var body = encodeBody(pickRandomElement(bodies[group]))
    return `mailto:${email}?subject=${subject}&body=${body}`
}


var funder_twits = ["WellsFargo","Ask_WellsFargo","GeorgiaPacific","GAPacificJobs","UPS","UPSAirlines","CarolBTome","TruistNews"]
var contract_twits = ["Atlas_technical","Ls3p","BrasfieldGorrie"]
var leg_twits = ["DougShipmanATL","Michael_J_Bond","WestmorelandATL","WaitesKeisha","JasonHWinston","AmirForATL","ByronAmos","jasonsdozier","LilianaforATL","AlexWanforATL","marynorwood","Dustin4ATL","andreaboonenow","marcioverstreet","antoniolewisatl","andreforatlanta"]


function addTweets(stringy, arr) {
  var finalString = ""
  for (var value in arr) {
    finalString += `<a href="https://twitter.com/intent/tweet?screen_name=${arr[value]}&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-text="${stringy} Cop City to show your support for the vast majority of Atlanta residents who are against the destruction of their community's ecology. #StopCopCity" data-related="${arr[value]}" data-show-count="false">Tweet to @${arr[value]}</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  }
  return finalString
}

$("#contractor-tweet").append(addTweets("Stop constructing", contract_twits))
$("#funder-tweet").append(addTweets("Divest from", funder_twits))
$("#leg-tweet").append(addTweets("Cancel the lease for", leg_twits))

contract.href = getEmailLink('contract')
fund.href = getEmailLink('fund')
local.href = getEmailLink('local')


})
