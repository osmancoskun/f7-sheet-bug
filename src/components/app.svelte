<script>
  import { onMount } from "svelte";

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter,
  } from "framework7-svelte";

  import routes from "../js/routes";
  import store from "../js/store";

  // Framework7 Parameters
  let f7params = {
    name: "My App", // App name
    theme: "auto", // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,
  };
  // Login screen demo data
  let username = "";
  let password = "";

  function alertLoginData() {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  }
  onMount(() => {
    f7ready(() => {
      // Call F7 APIs here
    });
  });
</script>

<App {...f7params}>
  <View main class="safe-areas" url="/" />
</App>
