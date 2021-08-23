<template>
    <section class="packages">
        <Headers></Headers>
           <section class="_banner-bg">
               <div class="container container-search">
                  <Search @handleSearch="handleSearch"></Search>
               </div>
           </section>
        <section class="main">
           <section class="container package-list">
              <div class="package-number">RESULTS <span>19663</span> packages</div>
              <ul>
                  <li v-for="item in packageList" :key="item.name">
                      <div class="name" @click="handleEnterDetail">{{item.name}}</div>
                      <p class="describe">{{item.describe}}</p>
                      <div class="version-info">
                        <div class="version">v<span></span>{{item.version}}</div>&#x3000;
                        <div class="time">Updated: {{item.time}}</div>&#x3000;
                        <div class="href">{{item.href}}</div>&#x3000;
                        <div class="tagList">
                            <div  v-for="ele in item.tagList" :key="ele">{{ele}}</div>
                        </div>
                      </div>
                  </li>
              </ul>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
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
export default {
    components: {
        Headers,
        Search,
        Footers
    },
    setup() {
        return {
            packageList: [
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    version: "7.0",
                    time: "Jul 29, 2021",
                    href: "bloclibrary.dev",
                    tagList: [
                        "Flutter Favorite",
                        "Null safety"
                    ]
                },
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    version: "7.0",
                    time: "Jul 29, 2021",
                    href: "bloclibrary.dev",
                    tagList: [
                        "Flutter Favorite",
                        "Null safety"
                    ]
                },
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    version: "7.0",
                    time: "Jul 29, 2021",
                    href: "bloclibrary.dev",
                    tagList: [
                        "Flutter Favorite",
                        "Null safety"
                    ]
                },
            ]
        }
    },
    methods: {
        handleSearch() {
            //
        },
        handleEnterDetail() {
            this.$router.push({name: 'packagesDetail'})
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