<template>
        <ul class="list" >
            <talent-card
                v-for="(user, index) in users"
                :key="user._id"
                :user="user"
                :editable="editable"
            >
            </talent-card>
        </ul>
</template>

<script>
import TalentCard from "@/components/TalentCard";

export default {
  components: {
    TalentCard
  },
  props: {
    users: {},
    editable: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  /* position: absolute; */
  margin-bottom: 2px;
  padding-bottom: 31px;
}
.small {
  padding: 1rem 4px 5px 45px;
  overflow: auto;
  /* position: absolute; */
  top: 0;
  background-color: #fbf4ff;
  max-height: 750px;
  padding-bottom: 60px;
}
</style>
