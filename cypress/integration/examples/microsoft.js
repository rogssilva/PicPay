

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


it('DELETE CUSTOMER IN CSP', () => {
    cy.request ({
    Method: 'DELETE',
    url: 'https://api.partnercenter.microsoft.com/v1/customers/edb93f33-33a2-46a5-a2cf-3c46c79b7a24',
    headers:{
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjE0MjJmNDEtNGNkOS00Mjk2LWE5NzgtMjY4MGM3YWVlYTVlLyIsImlhdCI6MTYxNzczNDAzMiwibmJmIjoxNjE3NzM0MDMyLCJleHAiOjE2MTc3Mzc5MzIsImFpbyI6IkUyWmdZQ2phYmNOUWFLMVN3ampIbS9mUHVrc0dBQT09IiwiYXBwaWQiOiJhYjg1YTM1ZC00ZTcyLTQ1M2EtYjM2YS03MGMyOWMyMDhjZjYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iMTQyMmY0MS00Y2Q5LTQyOTYtYTk3OC0yNjgwYzdhZWVhNWUvIiwib2lkIjoiZjI1YjVhZjktNWU0MC00NjgyLTkwM2MtMzFhNGRmMjBmM2VjIiwicmgiOiIwLkFTVUFRUzlDc2RsTWxrS3BlQ2FBeDY3cVhsMmpoYXR5VGpwRnMycHd3cHdnalBZbEFBQS4iLCJyb2xlcyI6WyJEaXJlY3RvcnkuUmVhZC5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIkRvbWFpbi5SZWFkV3JpdGUuQWxsIl0sInN1YiI6ImYyNWI1YWY5LTVlNDAtNDY4Mi05MDNjLTMxYTRkZjIwZjNlYyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJTQSIsInRpZCI6ImIxNDIyZjQxLTRjZDktNDI5Ni1hOTc4LTI2ODBjN2FlZWE1ZSIsInV0aSI6IjlnSEhaNVBVYUVXVk1tYUZqd25VQUEiLCJ2ZXIiOiIxLjAifQ.SEHz1AuZHFXNVporybNqD2jWoye1gQtXYrh-u8YRN3NbO-PweR4nlJ2OiKcU0B8eZP5ufzPIOPKEEvMOPANj5A4lhUkPS9p_IXjAE-J4ZWy2U1GfJdCgr-a3-50kkJyvmp9RTrqDOHC_G0pa-MnToMsAqdu2ADGRCcW13e2EX0Ac3ckRBMPjZ_aRwR7NrqkKGPS7CD9svjIynI1hD21BjvxI-_LAz_xdb8SoJB1Al1SU5tcC2gJ1NQZNAaiwCBLQsEgyuSH34T3NdvUGfPpi2PwhKplmfKb17j5biBcxb2zW-e31hHXcsPg3cKJg6vOrBFruMlWLsrkG1aqtTWWAvQ',
        'Accept': 'application/json',
    }
}).then(res => console.log(res))
//.should ((response) =>{
//    expect(response.status).to.eq (200),
//   // expect(response.body.DefaultGetTemplateResponse.providerResourceTemplateList[0].providerTemplateId).to.equal (101059)
//})

})