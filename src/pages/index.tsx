import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">Maxim Podolski</Header>
        <Header inverted as="h2">A Subheading</Header>
        <Button primary size="huge">A Button</Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>A Header</Header>
            <p>
              A completely useless paragraph that I'm not sure why I have not deleted.
                </p>
            <Header>Another Header</Header>
            <p>
              I have genuinely wasted too much time writing these useless placeholders.
              I have absolutely no idea why I'm writing this, what I'm writing, to whom I'm writing it, and since I'm very sleep deprivated, if I'm writing it.
              <br/><br/>
              Do I really exist?
              What is the point of life when everything seems to apass in a blur.
              One day you close your eyes and everything is completely gone.
              The world just swallows you up.
              You're unable to make any mark.
                </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Carrots</Header>
            <p>
              Carrots are my favorite fruit.
                </p>
            <Header>Motivational Advice</Header>
            <p>
              "Be as crispy as a coconut" - 2manypistachios
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              This is the right placeholder.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              This it the left placeholder.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Center Placeholder
            </Header>
            <p>
              I am going to be so confused when I'm editing this later.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;
