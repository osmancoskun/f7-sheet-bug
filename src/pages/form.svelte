<script>
  import Dom7 from "dom7";

  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    ListButton,
    Sheet,
    ListInput,
    Toggle,
    Stepper,
    f7,
  } from "framework7-svelte";

  let modalTitle = "";
</script>

<Page name="form">
  <Navbar backLink />

  <Button
    fill
    on:click={() => {
      modalTitle = "Vladimir";
      f7.sheet.open(".test");
    }}>Open Sheet</Button
  >

  <Sheet class="test" style="height:auto" swipeToClose={true}>
    <Block>
      <Row style="display:flex;align-items:center">
        <Col><h2>{modalTitle}</h2></Col>
      </Row>
    </Block>
  </Sheet>
</Page>
