<template>
    <div class="searchs">
        <img src="../assets/images/search.png" alt="" class="search-icon" @click="handleSearch">
        <input type="text" class="input-search" placeholder="Search Packages" v-model="searchKey" @keyup.enter="handleSearch">
    </div>
</template>
<script>
export default {
    setup() {
        return {
           searchKey: "" 
        }
    },
    methods: {
        handleSearch() {
            this.$emit("handleSearch", this.searchKey.trim())
        }
    }
}
</script>
<style lang="scss" scoped>
    .searchs {
        position: relative;
        width: 80%;
        display: flex;
        .search-icon {
            width: 0.25rem;
            height: 0.25rem;
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 0.2rem;
            transform: translateY(-50%);
        }
        .input-search {
            background-color: #35404d;
            border: none;
            font-size: 0.24rem;
            padding: 0.2rem 0.35rem 0.2rem 0.65rem;
            border-radius: 0.35rem;
            color: #ffffff;
            width: 100%;
            &:focus-visible {
                outline: none;
            }
        }
    }
</style>