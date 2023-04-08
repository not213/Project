<template>
  <Layout>
    <div class="container mx-auto my-8" >
      <h1>
        #
        <span>{{$page.post.type}}</span>
      </h1>

      <div>
        <b-card
          v-for="tag in $page.post.animals"
          :key="tag.id"
          :title="tag.animal_name"
          :img-src="apiUrl+tag.image.url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width:600px;"
          class="mb-2"
          
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query($id: ID!) {
  post: strapiAnimalType(id: $id) {
    type
    animals {
      id
      animal_name
      animal_code
      image {
        url
      }
    }
  }
}
</page-query>

<script>
export default {
    data(){

        return{
            
          apiUrl: "http://localhost:1234"
        }
    }
}
</script>