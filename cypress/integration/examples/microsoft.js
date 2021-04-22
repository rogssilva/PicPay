

    it('Microsoft', () => {
        cy.request ({
        Method: 'Post',
        url: 'https://login.microsoftonline.com/b1422f41-4cd9-4296-a978-2680c7aeea5e/oauth2/token',
        headers:{
            'grant_type': 'client_credentials',
            'resource': 'https://graph.windows.net',
            'client_id': 'ab85a35d-4e72-453a-b36a-70c29c208cf6',
            'client_secret': 'GG[.2NielRox?Y9rgv_r7rptRmHTx9ZT',
        }
    }).then(res => console.log(res))
    //.should ((response) =>{
    //    expect(response.status).to.eq (200),
    //   // expect(response.body.DefaultGetTemplateResponse.providerResourceTemplateList[0].providerTemplateId).to.equal (101059)
    //})

})
