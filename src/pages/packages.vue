<template>
    <section class="packages">
        <Headers></Headers>
           <section class="_banner-bg">
               <div class="container container-search">
                  <Search @handleSearch="handleSearch" :searchKeys="searchKey"></Search>
               </div>
           </section>
        <section class="main">
           <section class="container package-list">
              <div class="package-number">RESULTS <span>{{packageList.length}}</span> packages</div>
              <ul>
                  <li v-for="item in packageList" :key="item.name">
                      <div class="name" @click="handleEnterDetail (item.name)">{{item.name}}</div>
                      <p class="describe">{{item.description}}</p>
                      <div class="version-info">
                        <div class="version">v<span></span>{{item.version}}</div>&#x3000;
                        <div class="time">Updated: {{item.createdAt}}</div>&#x3000;
                        <div class="href">{{item.authors}}</div>&#x3000;
                        <div class="tagList">
                            <div  v-for="ele in item.tag" :key="ele">{{ele}}</div>
                        </div>
                      </div>
                  </li>
              </ul>
            <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="total">
            </el-pagination>
           </section>
        </section>
        <Footers></Footers>
    </section>
</template>
<script>
import Headers from "../components/Header.vue"
import Search from "../components/Searchs.vue"
import Footers from "../components/Footer.vue"
import { onMounted,  ref} from 'vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        Headers,
        Search,
        Footers
    },
    setup() {
        const route = useRouter();
        const packageList = ref([]);
        const page = ref(1);
        const {q} = route.currentRoute.value.query;
        const searchKey = ref(q);
        const total = ref(0)
        
        function handleEnterDetail(name) {
            route.push({name: 'packagesDetail', query: {name}})
        }
        async function fetchPackageList() {
            try {
                const {data} = await window.axios.request({
                    url: "/webapi/packages",
                    method: "get",
                    params: {q: searchKey.value,
                    // page: page.value
                    }
                })
                packageList.value = data;
                total.value = data.length;
            } catch (error) {
                //
            }
        }
        function handleCurrentChange(page) {
           page.value = page;
           fetchPackageList()
        }
        function handleSearch(key) {
            searchKey.value = key;
            route.push({name: "packages",query: {q: key}})
            fetchPackageList()
        }
        
        onMounted(() => {
            fetchPackageList();
        })
        return {
            packageList,
            searchKey,
            total,
            handleSearch,
            handleEnterDetail,
            handleCurrentChange
        }
    }
}
</script>
<style lang="scss" scoped>
    .packages {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .container {
        width: 1096px;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: auto;
    }
  ._banner-bg {
    background: #132030;
    background-image: url("../assets/images/hero-bg-static.svg");
    background-size: cover;
    color: #8d9399;
    padding: 10px 0px;
    text-align: center;
    width: 100%;
    .container-search {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        margin: auto;
    }
  }
  .package-list {
    .package-number {
        font-size: 16px;
        margin: 20px 0;
        span {
            color: #0175c2;
        }
    }
    ul {
        list-style-type: none;
        font-size: 16px;
        li {
            margin: 50px 0;
            .name {
                color: #0175c2;
                cursor: pointer;
                font-size: 22px;
                display: inline-block;
            }
            .version-info {
                display: flex;
                align-items: center;
                font-size: 12px;
                .version {
                    span {
                        color: #0175c2;
                    }
                }
                .href {
                   color: #0175c2;
                }
                .tagList {
                    display: flex;
                    align-items: center;
                    &>div {
                        background: #fff;
                        border: 1px solid #0175c2;
                        border-radius: 20px;
                        color: #0175c2;
                        padding: 2px 5px;
                        margin: 0 5px;
                    }
                }
            }
        }
    }
  }
</style>