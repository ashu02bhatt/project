<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase--text white">
        <span class="front-weight-light">application</span>
        <span>draw</span>
      </v-toolbar-title>
      <v-btn flat colour="green">
        <span>get vue news</span>
      </v-btn>
      <v-btn flat colour class="primary">
        <span>getting started</span>
      </v-btn>
      <v-btn flat colour="primary ">
        <span>tutotrial</span>
      </v-btn>
      <v-btn flat colour="green">
        <span>get vue news</span>
      </v-btn>
      <v-spacer></v-spacer>

      <v-menu>
        <v-btn color="primary" slot="activator flat">
          <v-icon>expand</v-icon>
          <span>tools</span>
        </v-btn>

        <v-list>
          <v-list-tile v-for="menu in first" :key="menu.text">
            <v-list-tile-title>{{menu.text}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat colour="green">
        <span>sign in</span>
        <v-icon right>exit</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="dradwe" class="primary">
      <v-list>
        <v-list-title v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-title-action>
            <v-icon class="white--text"></v-icon>
          </v-list-title-action>
          <v-list-title-content>
            <v-list-title class="white--text">{{link.text}}</v-list-title>
          </v-list-title-content>
        </v-list-title>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My files", route: "/work" },
        { icon: "person", text: "team", route: "/people" }
      ],
      first: [
        { icon: "build", text: "Editor and snippets" },
        { icon: "build", text: "Editor and snippets" },
        { icon: "book", text: "nwes" },
        { icon: "build", text: "MDb cli" }
      ]
    };
  }
};
</script>