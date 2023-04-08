<template>
  <aside class="mb-5">
    <h2 class="mb-3 font-family-sans-serif h4">All Tags</h2>
    <ul class="list-inline">
      <li class="list-inline-item mb-2" v-for="{ node } in $static.allStrapiCultureType.edges" :key="node.type">
        <b-button
          variant="primary"
          size="sm"
          :to="node.path">
          {{ node.type }} 
        </b-button>
      </li>
    </ul>
  </aside>
</template>

<static-query>
query {
  allStrapiCultureType{
    edges{
      node{
        id              
        type
      }
    }
  }
}
</static-query>