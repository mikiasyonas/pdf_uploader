<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="sidebar white--text"
    >
      <v-row justify="center" align="center" class="logo">
        <h1>Poster Labs</h1>
      </v-row>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="item-list white--text"
        >
          <v-list-item-action>
            <v-icon class="white--text">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="grey lighten-4 elevation-0"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
        <!-- Profile Pic -->
      </v-btn>
    </v-app-bar>
    <!-- <v-main class="main d-flex flex-row justify-space-between align-center" /> -->
    <v-main>
      <v-row>
        <v-col class="d-flex flex-row justify-space-between align-center pl-10 pr-10 mt-5 mb-5">
          <h1 class="new-tool">
            New Tool
          </h1>
          <v-btn class="accent">
            <NuxtLink to="/uploadfile" class="white--text link">
              Upload
            </NuxtLink>
          </v-btn>
        </v-col>
      </v-row>
      <Nuxt class="grey lighten-5" />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Gallery',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Participants',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Live Session',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'New Tool',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Knowledge transfered. FAST'
    }
  }
}
</script>

<style scoped>
.sidebar {
  background: #1A237E;
}

.logo {
  padding: 2rem;
}

.link {
  text-decoration: none;
}

.new-tool {
  font-weight: 300;
}
</style>
