<template>
<Layout>
  <b-container>
    <div>
        <b-table striped hover :items="Economy"></b-table>
    </div>
  </b-container>  
</Layout>    
</template>

<page-query>
query Group{
  Strapi: allStrapiEconomies (sortBy: "id", order:ASC) {
    edges { 
      node {
        id
        economy_name
        economy_code
        economy_kind
       
      }
    }
  }
}

</page-query>

<script>
export default {
    data () {
        return {
            Economy: []
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
            this.Economy.push(
              { ชื่อ: a[i].node.economy_name,
                รหัสพันธุ์ภูมิปัญญา: a[i].node.economy_code,
                ลักษณะวิสัย: a[i].node.economy_usable,
                ลักษณะเด่น: a[i].node.economy_kind
              }
            )
      }
        }
    },
}



</script>