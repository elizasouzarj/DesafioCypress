describe('template spec', () => {


  it('passes', () => {
    cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
      .then((response) => { 

        expect(response).property('status').to.equal(200)
        //expect(response.body.data.list).property('name').to.equal("Professional")
      
        // })

        //
        const name = response.body.data.list.name;
        cy.log("Name: " + name)
      })
  })
})