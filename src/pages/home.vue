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
                    <h3>{{item.name}}</h3>
                    <p> {{item.describe}}</p>
                    <div class="icon-href">
                        <img src="../assets/images/verified-publisher-gray.svg" alt="">
                        <a href="">{{item.href}}</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </section>
        <Footers></Footers>
    </section>
</template>
<script>
import Footers from "../components/Footer.vue"
import Search from "../components/Searchs.vue"
export default {
    components: {
        Footers,
        Search
    },
    setup() {
        return {
            searchKey: "",
            packageList: [
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    href: "bloclibrary.dev"
                },
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    href: "bloclibrary.dev"
                },
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    href: "bloclibrary.dev"
                },
                {
                    name: "flutter_bloc",
                    describe: "Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.",
                    href: "bloclibrary.dev"
                }
            ]
        }
    },
    methods: {
        handleSearch(key) {
            if (key) {
              this.$router.push({name: "packages",query: {q: key}})
            }
        }
    }
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
            height: 200px;
            display: flex;
            .mini-list-item {
                background: #fff;
                border-radius: 4px;
                box-shadow: 0px 2px 7px 0px rgb(0 0 0 / 30%);
                padding: 28px 3px 3px 10px;
                margin-bottom: 10px;
                min-height: 100px;
                min-width: 260px;
                height: 190px;
                margin: 0px 16px 16px 0px;
                box-sizing: border-box;
                &:hover {
                    background: #fafafa;
                    box-shadow: 0px 4px 9px 0px rgb(0 0 0 / 40%);
                }
                h3 {
                    color: #1967d2;
                    font-size: 20px;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: normal;
                }
                p {
                    font-size: 14px;
                    overflow: hidden;
                    height: 73px;
                    line-height: 18px;
                }
                .icon-href {
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    img {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
  }
</style>