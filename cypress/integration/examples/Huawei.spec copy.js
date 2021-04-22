

it.only('Listar DNS', ()=> {
    cy.request ({
    method: 'GET',
    url: 'https://rsl-uat.vivoplataformadigital.com.br/api/v2/resource-script/templates/MicrosoftAzureCsp/dns/listDns',
    headers:{
        'X-Auth-Token':'rO0ABXNyAEBjb20uamFtY3JhY2tlci5zZWN1cml0eS5hdXRoZW50aWNhdGlvbi5KQ0F1dGhlbnRpY2F0aW9uVG9rZW5JbXBsS5KczU+K7YMCAApJAAljb21wYW55SURJAAZ1c2VySURMAAxhdXRobkluc3RhbnR0ABBMamF2YS91dGlsL0RhdGU7TAAIY2hlY2tTdW10ABJMamF2YS9sYW5nL1N0cmluZztMAApjbGllbnRUeXBlcQB+AAJMAA5jb21wYW55QWNyb255bXEAfgACTAAKZXhwaXJ5RGF0ZXEAfgABTAAJc2Vzc2lvbklEcQB+AAJMAAdzdWJqZWN0dAAdTGphdmF4L3NlY3VyaXR5L2F1dGgvU3ViamVjdDtMAAh1c2VyTmFtZXEAfgACeHAAPVFbAD1RXHNyAA5qYXZhLnV0aWwuRGF0ZWhqgQFLWXQZAwAAeHB3CAAAAXj0+xITeHB0AAJ1aXQADkF6dXJlTXVsdGlwbGFzc3EAfgAFdwgAAAF5ilN+E3h0AB80MDE4NTI0OjMxeXVUSlo0OjIwMjE0MjEzOTU4MTYzc3IAG2phdmF4LnNlY3VyaXR5LmF1dGguU3ViamVjdIyyMpMAM/poAwACWgAIcmVhZE9ubHlMAApwcmluY2lwYWxzdAAPTGphdmEvdXRpbC9TZXQ7eHAAc3IAJWphdmEudXRpbC5Db2xsZWN0aW9ucyRTeW5jaHJvbml6ZWRTZXQGw8J5Au7fPAIAAHhyACxqYXZhLnV0aWwuQ29sbGVjdGlvbnMkU3luY2hyb25pemVkQ29sbGVjdGlvbiph+E0JnJm1AwACTAABY3QAFkxqYXZhL3V0aWwvQ29sbGVjdGlvbjtMAAVtdXRleHQAEkxqYXZhL2xhbmcvT2JqZWN0O3hwc3IAJWphdmF4LnNlY3VyaXR5LmF1dGguU3ViamVjdCRTZWN1cmVTZXRtzDKAF1V+JwMAA0kABXdoaWNoTAAIZWxlbWVudHN0ABZMamF2YS91dGlsL0xpbmtlZExpc3Q7TAAGdGhpcyQwcQB+AAN4cAAAAAFzcgAUamF2YS51dGlsLkxpbmtlZExpc3QMKVNdSmCIIgMAAHhwdwQAAAABc3IAN2NvbS5qYW1jcmFja2VyLnNlY3VyaXR5LmF1dGhlbnRpY2F0aW9uLmphYXMuSkNQcmluY2lwYWxTGbW8VATh4gIABEwACmF0dHJpYnV0ZXN0ABNMamF2YS91dGlsL0hhc2hNYXA7TAALYXV0aG5NZXRob2RxAH4AAkwADmNvbXBhbnlBY3JvbnltcQB+AAJMAAh1c2VyTmFtZXEAfgACeHBzcgARamF2YS51dGlsLkhhc2hNYXAFB9rBwxZg0QMAAkYACmxvYWRGYWN0b3JJAAl0aHJlc2hvbGR4cD9AAAAAAAAAdwgAAAABAAAAAHh0ACd1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoxLjA6YW06cGFzc3dvcmRxAH4ACHQAHG11bHRpcGxhc2F6dXJlMzYuZ2V0bmFkYS5jb214cQB+AA14cQB+ABJ4eHEAfgAe',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    
 }).then(res => console.log(res))
    .should ((response) =>{
    expect(response.status).to.eq (200),
    expect(response.body.DefaultGetTemplateResponse.providerResourceTemplateList[0].providerTemplateId).to.equal (101059)
})

})
