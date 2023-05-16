<template>
  <div class="container-fluid" style="position: relative">
    <Breadcrumbs main="Добавить новое устройство"/>
    <div class="row starter-main">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <div id="treecheckbox-two">
              <Tree :nodes="menuTwo" :use-icon="false" :use-checkbox="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/config" style="width: 100%; display: flex; justify-content: center; margin-top: 50px">
      <button class="btn btn-primary btn-position" type="button">
          Создать конфигурацию
      </button>
    </router-link>
  </div>
</template>

<script>
import treeView from "@/mixins/treeView"
import treeViewTwo from "@/mixins/treeView-two"
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css"
export default {
  components: {
    Tree
  },
  mixins: [treeViewTwo],

}
</script>

<style lang="scss" scoped>
.btn-position {
  position: absolute;
  bottom: -40px;
  z-index: 1;
  padding: 20px 90px;
  font-size: 120%;
}
</style>