async function oui(CodePostal) {
    const response = await fetch("https://geo.api.gouv.fr/communes?codePostal="+CodePostal)
    const data = await response.json() 
    console.log(data)
}
oui(50440)