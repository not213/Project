<template>
<Layout>
  <b-container>
    <div>
        <b-table striped hover :items="plants"></b-table>
    </div>
  </b-container>  
</Layout>    
</template>

<page-query>
query Group{
  Strapi: allStrapiPlant (sortBy: "id", order:ASC) {
    edges { 
      node {
        id
        plant_name
        plant_code
        plant_kind
        plant_location
        plant_remarkable
        image {
          url
        }
      }
    }
  }
}

</page-query>

<script>
export default {
    data () {
        return {
            plants: []
        }
    },
    mounted() {
        this.setVariable()
    },
    methods: {
        setVariable () {
            let len = this.$page.Strapi.edges.length
            let a = this.$page.Strapi.edges
            for (let i = 0; i < len; i++) {
            this.plants.push(
              { ชื่อ: a[i].node.plant_name,
                รหัสพันธุ์พืช: a[i].node.plant_code,
                ลักษณะวิสัย: a[i].node.plant_kind,
                ลักษณะเด่น: a[i].node.plant_remarkable
              }
            )
      }
        }
    },
}



</script>



