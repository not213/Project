//gridsome.server.js
module.exports = function (api) {
  // Plant
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allStrapiPlantsType {
        edges {
          node {
            id
            type            
          }
        }
      }
    }`)

    data.allStrapiPlantsType.edges.forEach(({ node }) => {
      createPage({
        path: `/plant/${node.type}`,
        component: './src/templates/plant.vue',
        context: {
          id: node.id
        }
      })
    })
  })

  //  Animal
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allStrapiAnimalType {
        edges {
          node {
            id
            type
          }
        }
      }
    }`)

    data.allStrapiAnimalType.edges.forEach(({ node }) => {
      createPage({
        path: `/animal/${node.type}`,
        component: './src/templates/Animal.vue',
        context: {
          id: node.id
        }
      })
    })
  })

  // culture
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{ 
      allStrapiCultureType{
        edges{
          node{
            id
            type
          }
        }
    }
      
    }`)

    data.allStrapiCultureType.edges.forEach(({ node }) => {
      createPage({
        path: `/culture/${node.type}`,
        component: './src/templates/Culture.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
