const { it } = require("mocha");

it('Criar DNS', ()=> {
cy.request ({
method: 'POST',
url: 'https://vivo-int-uat.vivoplataformadigital.com.br/iaaspanel/api/Script',
body: {
    accountId: "0bb8c7bfb500f3630f41c00d66295700",
    parameters: {private_zone: false, dns_name: "Cypress2.com"},
    dns_name: "Cypress2.com",
    private_zone: false,
    providerCode: "vivoopenstack",
    scriptName: "68119c27-2297-460d-b047-f8207b723328",
    scriptType: "ansible",
    templateCode: "dns",
    templateName: "createDns",
    tenantActiveState: "Y"    
    }
}).then(res => console.log(res))



} )
