import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          Definitely Not A Blog
            <Header.Subheader>
            It's not a blog, because there's a picture of a newspaper.
            If it was a blog, there would big a picture of a blog.
            Therefore, it's a avacado stealthily pretending to be an interactive medium following the innovations of rocks, eletricity, eletricity in rocks, and eletricity and rocks pretending to be rocks.
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
