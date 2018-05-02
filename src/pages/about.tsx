import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            The About Page
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          The About Page is a fantastic modern marvel.
          Having a page that describes what a site is all about, is really important in this day and age and day.
          However, even more importantly, is having really really good descriptions for an about page.
          I don't know how many times I've seen a bad about page.
          I think it's 0, but I don't know.
        </p>
        <p>
          If there are issues with this site, then please don't tell me.
          I don't want to know, and I don't want to fix them.
        </p>
      </Segment>
    </Container>
  );
};
