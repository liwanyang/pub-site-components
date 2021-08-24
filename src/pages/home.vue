<template>
    <section class="home">
        <section class="main">
            <header class="site-header"></header>
            <section class="banner">
                <div class="banner-content">
                    <div class="title">
                        <img src="../assets/images/pub-dev-logo.svg" alt="">
                    </div>
                    <Search @handleSearch="handleSearch"></Search>
                    <div class="text">
                        <span>The official package repository for </span>
                        <a target="_blank" href="https://dart.dev/">Dart</a>
                        and
                        <a target="_blank" href="https://flutter.dev/">Flutter</a>
                        apps.
                    </div>
                </div>
            </section>
            <section class="package-list">
                <div class="flutter-favorites">
                    <h1 class="title">Flutter Favorites</h1>
                    <p class="home-block-context-info">
                        <span> Some of the packages that demonstrate the </span>
                        <a href="https://flutter.dev/docs/development/packages-and-plugins/favorites">highest levels of quality</a>
                        <span>, selected by the Flutter Ecosystem Committee </span>
                    </p>
                    <div class="mini-list">
                        <div class="mini-list-item" v-for="item in packageList" :key="item.name">
                        <h3 @click="handleEnterDetail(item.name)">{{item.name}}</h3>
                        <p> {{item.description}}</p>
                        <div class="icon-href">
                            <img src="../assets/images/verified-publisher-gray.svg" alt="">
                            <a href="">{{item.authors}}</a>
                        </div>
                        </div>
                    </div>
                    <div class="all-packages"  @click="handleAll">VIEW ALL</div>
                </div>
            </section>
        </section>
        <Footers></Footers>
    </section>
</template>
<script>
import Footers from "../components/Footer.vue"
import Search from "../components/Searchs.vue"
import {
  onMounted,
  ref,
} from 'vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        Footers,
        Search
    },
    setup() {
        const route = useRouter();
        const packageList = ref([]);
        const list = ref([]);
        const searchKey = ref('');
        async function fetchPackageList() {
            try {
                const {data} = await window.axios.request({
                    url: "/webapi/packages",
                    method: "get"
                })
                packageList.value = data.filter((item, index) => index < 4);
                list.value = data;
                handleResize();
            } catch (error) {
                //
            }
        }
        function handleEnterDetail(name) {
            route.push({name: 'packagesDetail', query: {name}})
        }
        function handleSearch(key) {
            if (key) {
              route.push({name: "packages",query: {q: key}})
            }
        }
        function handleAll() {
            route.push({name: "packages"})
        }
        function handleResize() {
           const clientWidth = window.innerWidth;
           if (clientWidth >= 1100) {
                packageList.value = list.value.filter((item, index) => index < 4);
           } else if (clientWidth > 850) {
                packageList.value = list.value.filter((item, index) => index < 3);
           } else {
                packageList.value = list.value.filter((item, index) => index < 2);
           }

        }
        onMounted(() => {
            fetchPackageList();
            window.addEventListener("resize", handleResize)
        })
        return {
            searchKey,
            packageList,
            handleSearch,
            handleAll,
            handleEnterDetail
        }
    },
}
</script>
<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    .main {
        flex: auto;
    }
    .site-header {
      height: 0.5rem;
      background-color: #1c2834;
    }
    .banner {
        background: #132030;
        background-image: url("../assets/images/hero-bg-static.svg");
        background-size: cover;
        color: #8d9399;
        padding: 0.1rem 0.1rem;
        display: flex;
        justify-content: center;
        .banner-content {
            max-width: 10.96rem;
            flex: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 0;
            .title {
                text-align: center;
                margin-bottom: 0.28rem;
                img {
                    width: 3.28rem;
                }
            }
            .text {
                color: #fff;
                font-size: 0.2rem;
                margin: 0.5rem auto;
                a {
                    color: #31b0fc;
                    max-width: 5rem;
                }
            }
        }
    }
    .package-list {
        display: flex;
        width: 100%;
        justify-content: center;
        .flutter-favorites {
            max-width: 10.96rem;
            width: 100%;
            .all-packages {
                color: #1967d2;
                cursor: pointer;
                text-align: right;
                font-size: 0.16rem;
            }
        }
        .title {
            color: #254a76;
            font-size: 0.36rem;
            margin-bottom: 0;
            font-weight: normal;
        }
        .home-block-context-info {
            font-size: 0.18rem;
            a {
                color: #0175c2;
            }
        }
        .mini-list {
            height: 2rem;
            display: flex;
            justify-content: space-around;
            .mini-list-item {
                background: #fff;
                border-radius: 0.04rem;
                box-shadow: 0px 0.02rem 0.07rem 0px rgb(0 0 0 / 30%);
                padding: 0.28rem 0.03rem 0.03rem 0.1rem;
                margin-bottom: 0.1rem;
                min-height: 1rem;
                width: 2.6rem;
                height: 1.9rem;
                margin: 0px 0.16rem 0.16rem 0px;
                box-sizing: border-box;
                &:hover {
                    background: #fafafa;
                    box-shadow: 0px 0.04rem 0.09rem 0px rgb(0 0 0 / 40%);
                }
                h3 {
                    color: #1967d2;
                    font-size: 0.2rem;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: normal;
                    cursor: pointer;
                }
                p {
                    font-size: 0.14rem;
                    overflow: hidden;
                    height: 0.73rem;
                    line-height: 0.18rem;
                }
                .icon-href {
                    font-size: 0.14rem;
                    display: flex;
                    align-items: center;
                    img {
                        margin-right: 0.1rem;
                    }
                }
            }
        }
    }
  }
</style>