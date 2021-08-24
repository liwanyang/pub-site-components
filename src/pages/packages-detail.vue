<template>
    <section class="packages-detail">
        <Headers></Headers>
        <section class="package-content">
            <section class="main">
                <h3>{{packageInfo.data.name}}</h3>
                <div class="version-info">
                    <div class="time">Published {{packageInfo.data.createdAt}}•</div>&#x3000;
                    <div class="href">{{authors}}</div>&#x3000;
                    <div class="tagList">
                        <div v-for="item in packageInfo.data.tag" :key="item">{{item}}</div>
                    </div>
                </div>
                <div class="content">
                    <el-tabs v-model="tabActiveName" @tab-click="handleClickTab" type="card">
                        <el-tab-pane label="Readme" name="readme">
                          <div v-html="packageInfo.data.readme"></div>
                        </el-tab-pane>
                        <el-tab-pane label="Changelog" name="changelog">
                          <div v-html="packageInfo.data.changelog"></div>
                        </el-tab-pane>
                        <el-tab-pane label="Versions" name="versions" v-if="packageInfo.data.versions">
                          <el-table
                            :data="packageInfo.data.versions"
                            style="width: 100%">
                            <el-table-column
                                prop="version"
                                label="Version">
                            </el-table-column>
                            <el-table-column
                                prop="createdAt"
                                label="Uploaded">
                            </el-table-column>
                            <!-- <el-table-column
                                prop="address"
                                label="地址">
                            </el-table-column> -->
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </section>
            <section class="package-other-info">
                <div class="Metadata">
                   <h3>Metadata</h3>
                   <p>{{packageInfo.data.description}}</p>
                   
                   <div class="meta-data-list">
                      <div v-for="item in MetadataList" :key="item" @click="handleReplaceParams(item)">{{item}}</div>
                   </div>
                </div>
                <div class="dependencies">
                   <h3>Dependencies</h3>
                   <div class="dependencies-list">
                      <div v-for="item in Object.keys(packageInfo.data.dependencies)" :key="item" @click="handleReplaceParams(item)">{{item}}</div>
                   </div>
                </div>
            </section>
        </section>
        <Footers></Footers>
    </section>
</template>
<script>
import { onMounted,  ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import Headers from "../components/Header.vue"
import Footers from "../components/Footer.vue"
export default {
    components: {
        Headers,
        Footers
    },
    setup() {
        const route = useRouter();
        const version = ref('latest')
        const authors = ref('http')
        const {name} = route.currentRoute.value.query;
        const packageName = ref(name??'')
        const tabActiveName = ref('readme')
        let packageInfo = reactive({data: {
            dependencies: {}
        }})
        async function fetchPackageDetail() {
            try {
                const {data} = await window.axios.request({
                    url: `/webapi/package/${packageName.value}/${version.value}`,
                    method: "get"
                })
                packageInfo.data = data.data;
                authors.value = data.data.authors[0];
                console.log('packageInfo:::', data.data);
            } catch (error) {
                console.log('error:::', error);
            }
        }
        watch(packageName, () => {
          fetchPackageDetail()
        })
        function handleClickTab(tab) {
           tabActiveName.value = tab.props.name;
        }
        function handleReplaceParams(name) {
            packageName.value = name
            route.push({name: "packagesDetail",query: {name}})
        }
        onMounted(() => {
            fetchPackageDetail();
        })
        return {
            packageInfo,
            tabActiveName,
            authors,
            handleClickTab,
            handleReplaceParams,
            dependenciesList: [
                'async', 'http_parser', 'meta', 'path', 'pedantic'
            ],
            MetadataList: [
                'Repository (GitHub)',
                'View/report issues'
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
   .packages-detail {
       display: flex;
       flex-direction: column;
       height: 100%;
       .package-content {
           display: flex;
           justify-content: space-between;
           flex: auto;
           padding: 0 20px;
           width: 100%;
           box-sizing: border-box;
           @media screen and(max-width:1060px) {
             flex-wrap: wrap;
           }
       }
        .main {
            display: flex;
            flex-direction: column;
            flex: auto;
            width: 100%;
            h3 {
                font-size: 36px;
                margin-bottom: 15px;
            }
            .version-info {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                font-size: 12px;
                margin-bottom: 20px;
                .time {
                    font-size: 16px;
                }
                .href {
                   color: #0175c2;
                }
                .tagList {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
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
            .content {
                font-size: 16px;
                line-height: 30px;
            }
        }
        .package-other-info {
            font-size: 16px;
            min-width: 300px;
            width: 300px;
            padding-top: 200px;
            margin-left: 50px;
            .Metadata {
              margin-bottom: 50px;
              .meta-data-list {
                div {
                    color: #0175c2;
                    margin: 5px 0;
                    cursor: pointer;
                }
              }
            }
            .dependencies {
                .dependencies-list {
                  display: flex;
                  flex-wrap: wrap;
                  line-height: 30px;
                  div {
                      color: #0175c2;
                      margin: 0 5px;
                      cursor: pointer;
                  }
                }
            }
        }
   }
</style>