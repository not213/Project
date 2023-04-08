<template>
  <Layout>
    
    <div class="container mx-auto my-8" >
      <h1>
        
        <span>{{$page.post.type}}</span>
      </h1>

      <div>
        <b-card
          v-for="tag in $page.post.cultures"
          :key="tag.id"
          :title="tag.culture_name"
          :img-src="apiUrl+tag.image.url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width:600px;"
          class="mb-2"
          
        >

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id:ID!) {
  post:strapiCultureType (id:$id){
    type
    cultures {
        id
      culture_name
      culture_code
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
</script>