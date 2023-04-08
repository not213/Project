<template>
<Layout>
  <b-container>
    <div>
        <b-table striped hover :items="Animal"></b-table>
    </div>
  </b-container>  
</Layout>    
</template>

<page-query>
query Group{
  Strapi: allStrapiAnimal (sortBy: "id", order:ASC) {
    edges { 
      node {
        id
        animal_name
        animal_code
        animal_usable
        animal_location
        animal_remarkable
       
      }
    }
  }
}

</page-query>

<script>
export default {
    data () {
        return {
            Animal: []
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
            this.Animal.push(
              { ชื่อ: a[i].node.animal_name,
                รหัสพันธุ์สัตว์: a[i].node.animal_code,
                ลักษณะวิสัย: a[i].node.animal_usable,
                ลักษณะเด่น: a[i].node.animal_remarkable
              }
            )
      }
        }
    },
}



</script>
