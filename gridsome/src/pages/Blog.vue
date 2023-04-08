<template>
<Layout>
  <div>
  <b-nav tabs fill>
    <b-nav-item to="/Blog" exact exact-active-class="active">
      
      พืช
    </b-nav-item>
    <b-nav-item to="/A" exact exact-active-class="active">สัตว์</b-nav-item>
    <b-nav-item to="/Cultures" exact exact-active-class="active">ภูมิปัญญา</b-nav-item>
    <b-nav-item to="/Economy" exact exact-active-class="active">ชีวภาพอิ่นๆ</b-nav-item>
  </b-nav>
</div>
    <b-container class="bv-example-row">
        <div class="mb-2">
          <b-form-input v-model="searchTerm" placeholder="Search" class="mb-2" @input="search"></b-form-input>
        </div>
        <div>
          <b-button to="/table" block variant="primary">Table / ตาราง</b-button>
        </div>
      <b-card-group columns>
        <b-card
          v-for="edges in temp"
          :key="edges.node.id"
          style="max-width: 20rem; "
          :title="edges.node.plant_name"
          :img-src="apiUrl+edges.node.image.url"
          img-alt="Image"
          img-top
          class="cropped1"
                   
        >
          <b-card-text>{{edges.node.plant_kind}} </b-card-text>
           <g-link class="post-tags__link" v-for="edges in edges.node.plants_types" :key="edges.id" :to="'plant/'+edges.type">
              <b-button>#
                {{ edges.type }}
              </b-button>
            </g-link>
            <div>
              <b-button @click="showImage(edges)" class="mt-1">รายละเอียด</b-button>

              <b-modal v-model="modalShow">
                <b-img :src="img"></b-img>
                <b-list-group>
      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">ลักษณะวิสัย</h5>
        </div>

        <p class="mb-1">
          {{edges.node.plant_kind}}
        </p>
      </b-list-group-item>
      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">ลักษณะเด่น</h5>
        </div>
        <p class="mb-1">
          {{edges.node.plant_remarkable}}
        </p>
      </b-list-group-item>
    </b-list-group>
              </b-modal>
            </div>
        </b-card>
      </b-card-group >

    <div>
        <b-card class="text-center"
          title="All Tag"
          img-top
          tag="article"
          style="max-width: 100%;"
        >
        <g-link class="post-tags__link" v-for="edges in $static.allStrapiPlantsType.edges" :key="edges.type" :to="'plant/'+edges.node.type">
            <b-button class="ml-0 mr-1 mt-1">#
              {{ edges.node.type }}
            </b-button>
        </g-link>
      </b-card>
    </div>
      <!-- <b-row style="margin-top:0.5rem;margin:auto;" columns>
        <div v-for="edge in $page.Strapi.edges" :key="edge.node.id">
        <b-col >
      <b-card
        :title="edge.node.plant_name"
        :img-src="apiUrl+edge.node.image[0].url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width:20rem; display:block;margin:auto;"

        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button @click="test(edge.node)" variant="primary">Go somewhere</b-button>
        </b-card>
        </b-col>

        </div>
        <Pager :info="$page.Strapi.pageInfo"/>
      </b-row>-->
       <Pager
        class="pagination-container"
        :info="pageInfo"
        prevLabel="<"
        nextLabel=">"
      />
    </b-container>
  </Layout>
</template>

<page-query>
query Group ($page: Int) {
  Strapi: allStrapiPlant (perPage: 6, page: $page, sortBy: "id", order:ASC) @paginate   {
    totalCount
        pageInfo {
          totalPages
          currentPage
        }
    edges {
      node {
        id
        plant_name
        plant_code
        plant_kind
        plant_location
        plant_remarkable
        image {
          url(height:64, fit:inside)
        }
        plants_types{
          id
          type
        }
      }
    }
  }
}

</page-query>
<static-query>
query {
  allStrapiPlantsType{
    edges{
      node{
        id
        type
      }
    }
  }
}
</static-query>

<script>
import { Pager } from "gridsome";
import Vue from 'vue'
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pager
  },
  
  metaInfo: {
    title: "Hello, world!"
  },
  data() {
    return {
      plants: [],
      dialog: false,
      apiUrl: "http://localhost:1234",
      post: {},
      posts: {},
      num: 1,
      index: null,
      searchTerm: "",
      plant: [],
      temp: [],
      modalShow: false,
      img: ''
    };
  },
  mounted() {
    this.plants = this.$page.Strapi.edges
    this.temp = this.$page.Strapi.edges
  },
  computed: {
     pageInfo () {
      return this.$page.Strapi.pageInfo
    },

    searchResults () {
      let len = this.$page.Strapi.edges.length
      const searchTerm = this.searchTerm
      let temp = []
      if (searchTerm === "") {
        temp = this.plants
        return temp
      }
      for (let i=0; i<len; i++) {
        if (this.plants[i].node.plant_name.includes(searchTerm)) {
          temp.push(this.plants[i])
        }
      }
      return temp

    }
  },
  methods: {
    show() {
      this.posts = [];
      this.post = this.$page.Strapi.edges;
      for (var i = 0; i < this.post.length; i++) {
        this.posts.push(this.post[i]);
      }
      console.log(this.post);
    },
    search () {
      this.temp = this.searchResults
    },
    showImage(image) {
      this.modalShow = !this.modalShow
      this.img = this.apiUrl+image.node.image.url
    }    
  }
};
</script>

<style scoped>
.home-links a {
  margin-right: 0rem;
}

.pagination-container {
  text-align: center;
}

.card {
  margin: 0.75rem;
}
#set {
  width: 150px;
}
.v-card__title {
  color: #ffd600;
}
.card-img-top {
  height: 200px;
}
.card-body {
  height: 200px;
}
</style>


