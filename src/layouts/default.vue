<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-more</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="rightDrawer" :right="right" fixed>
      <v-list>
        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>
              mdi-eject
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DefaultLayout extends Vue {
  @Provide()
  clipped: boolean = false

  @Provide()
  drawer: boolean = false

  @Provide()
  fixed: boolean = false

  @Provide()
  miniVariant: boolean = false

  @Provide()
  right: boolean = true

  @Provide()
  rightDrawer: boolean = false

  title: string = 'fs-mng'

  items: object[] = [
    {
      icon: 'mdi-home',
      title: 'Top',
      to: '/'
    },
    {
      icon: 'mdi-movie',
      title: 'Movie',
      to: '/movie'
    },
    {
      icon: 'mdi-face',
      title: 'Viewer',
      to: '/viewer'
    }
  ]

  async logout() {
    try {
      await this.$auth.logout()
    } catch (err) {
      this.$toast.error(err)
    }
  }
}
</script>
