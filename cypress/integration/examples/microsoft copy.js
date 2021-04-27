

it('Recebendo o Token', () => {
  cy.request({
      method: 'POST',
      url: 'https://login.microsoftonline.com/b1422f41-4cd9-4296-a978-2680c7aeea5e/oauth2/token',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'fpc=ArT93FaUiDBBuBPGBTdkWdYf3b4gAQAAAAlAGdgOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
      },
      form: true,
      body: {
          'grant_type': 'client_credentials',
          'resource': 'https://graph.windows.net',
          'client_id': 'ab85a35d-4e72-453a-b36a-70c29c208cf6',
          'client_secret': 'GG[.2NielRox?Y9rgv_r7rptRmHTx9ZT'
      }

  }).then(res => console.log(res))
  .should ((response) =>{
  expect(response.status).to.eq (200)             //valida retorno 200
  expect(response.body.access_token).not.be.empty //valida retorno do access token
  const token = response.body.access_token 
  // expect(token).not.be.empty                   //sucesso

  //requisição para Delete
  cy.request ({
    method: 'DELETE',
    url: 'https://api.partnercenter.microsoft.com/v1/customers/edb93f33-33a2-46a5-a2cf-3c46c79b7a24',
    headers:{
        'Authorization': 'Bearer ' +token, //Não está declarando variável token
        'Accept': 'application/json'
        }
        }).then(res => console.log(res))
          .should ((response) =>{
          expect(response.status).to.eq (204)
          })
    })
    
})


  
