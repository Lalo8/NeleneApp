<template>
  <div class="searchbar">
        <!-- <b-field type="is-primary" position="is-centered">
+        <b-input v-model="searched" type="search" icon="search" v-bind:placeholder="$t('filter.placeholder')" expanded> -->
           <b-field>
            <b-input v-model="searched" v-bind:placeholder="$t('filter.placeholder')" 
                type="search"
                icon="search" expanded>
            </b-input>
            <p class="control">
                <button class="button is-primary">Search</button>
            </p>
        </b-field>
        <!-- </b-input> -->
      <!-- </b-field> -->
    </div>
</template>

<script>
export default {
  props: {
    organisations: Array,
    jobs: Array,
    users: Array
  },
  data() {
    return {
      searched: ""
    };
  },
  methods: {
    filter() {
      this.$emit("filter", this.filterBy(this.organisations, this.searched))
        .then;
    },
    filter() {
      this.$emit("filter", this.filterBy(this.users, this.searched)).then;
    },
    filter() {
      this.$emit("filter", this.filterBy(this.jobs, this.searched)).then;
    }
  },
  watch: {
    searched() {
      this.filter();
    }
  }
};
</script>

<style>

</style>
