<template>
<Layout>
  <b-container>
    <div>
        <b-table striped hover :items="Cultures"></b-table>
    </div>
  </b-container>  
</Layout>    
</template>

<page-query>
query Group{
  Strapi: allStrapiCultures (sortBy: "id", order:ASC) {
    edges { 
      node {
        id
        culture_name
        culture_code
        culture_location
       
      }
    }
  }
}

</page-query>

<script>
export default {
    data () {
        return {
            Cultures: []
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
            this.Cultures.push(
              { ชื่อ: a[i].node.culture_name,
                รหัสพันธุ์ชีวภาพ: a[i].node.culture_code,
                ลักษณะวิสัย: a[i].node.culture_usable,
                ลักษณะเด่น: a[i].node.culture_remarkable
              }
            )
      }
        }
    },
}



</script>
