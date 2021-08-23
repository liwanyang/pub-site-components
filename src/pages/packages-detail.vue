<template>
    <section class="packages-detail">
        <Headers></Headers>
        <section class="main container">
            <h3>animated_text_kit 4.2.1</h3>
            <div class="version-info">
                <div class="time">Published Apr 24, 2021•</div>&#x3000;
                <div class="href">ayushagarwal.ml</div>&#x3000;
                <div class="tagList">
                    <div>Null safety</div>
                </div>
            </div>
            <div class="content">render data</div>
        </section>
        <Footers></Footers>
    </section>
</template>
<script>
import Headers from "../components/Header.vue"
import Footers from "../components/Footer.vue"
export default {
    components: {
        Headers,
        Footers
    },
    setup() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
   .packages-detail {
       display: flex;
       flex-direction: column;
       height: 100%;
        .container {
            width: 1096px;
        }
        .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: auto;
            h3 {
                font-size: 36px;
                margin-bottom: 15px;
            }
            .version-info {
                display: flex;
                align-items: center;
                font-size: 12px;
                .time {
                    font-size: 16px;
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
</style>