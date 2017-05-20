import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";
import MuiList, { ListItem as MuiListItem } from 'material-ui/List';

import YouTube from 'react-youtube'

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TimePicker from 'material-ui/TimePicker';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  demo: require("../assets/demo-time.jpg"),
  markdown: require("../assets/markdown.png")
};

import './styles.css'

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

let foo = 0

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>

        <Slide transition={["zoom"]} bgColor="primary" notes={`
<ul>
    <li>My name is Aeneas, I am the founder of ORY and Serlo Education (might have seen the previous presentation)</li>
    <li>I write software since I'm twelve</li>
    <li>I have written a lot of production code, and also a lot of uis</li>
    <li>I used prototype.js (last version in 2015), moo tools, jquery, angular</li>
    <li>Writing good UIs is challenging</li>
    <li>React changed that</li>
    <li>Today, I will introduce you to react using some live coding, and we will have time at the end so you'll be able to get started with react</li>
    <li>The next session where I'll support Kevin Goslar from Originate on modern web development starts after this session, you will have two full hours of our time</li>
</ul>
`}>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Build better UIs
          </Heading>
          <Appear fid="1">
            <Text caps>
              Learn to build applications with React.js and Electron
            </Text>
          </Appear>
        </Slide>

        <Slide
          notes={`
<ul>
    <li>Before we go deep on this topic, let's look at some demos first</li>
    <li>I hope that those demos demonstrate you the power of react</li>
</ul>
          `}
          transition={["slide"]}
          bgColor="black">
          <Image src={images.demo.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={`
<ul>
    <li>Before we go deep on this topic, let's look at some demos first</li>
    <li>I hope that those demos demonstrate you the power of react</li>
</ul>
          `}>
          <Heading size={1} caps fit textColor="tertiary">
            This presentation is written in React!
          </Heading>
          <Appear fid="2">
            <Interactive />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" maxHeight="90vh" maxWidth="80vw" notes={`<ul>
<li>
    Why did I build this?<br />
    --> Serlo<br/>
    --> Talk about Serlo<br/>
    --> Talk briefly about markdown and issues authors have (show the experience)<br />
</li>
<li>
    So what does it do?
</li>
<li>
    It's a WYSI editor (what you see is) with layout capabilities
</li>
<li>
    ORY GmbH is a company I founded, we focus on cloud native security and web technology
</li>
<li>
    The editor is capable of: Rich text editing
</li>
<li>
    Re-arrange layouts
</li>
<li>
    Interactive components such as spacers, videos, parallax backgrounds
</li>
<li>
    Is highly extensible (show plugin bar)
</li>
</ul>`}>
          <iframe src="https://editor.ory.am" style={{ width: '100%', height: '75vh' }} />
          <Heading size={5} textColor="primary">
            http://editor.ory.am
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" notes={`<ul>
<li>
    It's a desktop app for creating websites
</li>
<li>
    Based on the ORY Editor
</li>
<li>
    Show mobile preview
</li>
<li>
    Show designs
</li>
<li>
    The result is a static HTML file with intelligent SEO, that you can host anywhere and that can not be hacked
</li>
<li>
    You can write your own designs, add custom js and css and your own content plugins - and use open source plugins
    from the ORY Editor eco system.
</li>
<li>
    Talk to me after this talk if you want more info!
</li>
</ul>`}>
          <Heading size={1} caps fit textColor="primary">
            ORY Sites
          </Heading>
          <Appear fid="1">
            <Heading size={2} fit textColor="tertiary">
              Cutting edge desktop app for building modern,<br />
              advanced responsive websites.
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`Talk about the attempts`}>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            React made this possible
          </Heading>
          <Appear fid="1">
            <Heading size={2} fit textColor="tertiary">
              So...what is React?
            </Heading>
          </Appear>
        </Slide>

        <Slide maxWidth="90%" notes={`<ul>
<li>
    This looks like HTML, right? The syntax is called JSX!
</li>
<li>
    What is the component - it get's attributes / properties
</li>
<li>
    What is the render command doing?
</li>
<li>
    If we update something, it will be shown immediately
</li>
<li>
    We can add regular html stuff such as ID
</li>
<li>
    We can add html elements such as bold
</li>
<li>
    We can style components
</li>
</ul>`}>
          <ComponentPlayground
            theme="dark"
            previewBackgroundColor=""
            code={require("raw-loader!../assets/deck.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Ok, but why should I use it?
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black">
          <BlockQuote>
            <Quote>
              React makes it painless to create interactive user interfaces at scale.
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem>It makes writing HTML + CSS + Javascript easier</ListItem>
            <Appear><ListItem>Components are the future of web development</ListItem></Appear>
            <Appear><ListItem>React is extremely efficient</ListItem></Appear>
            <Appear><ListItem>It's awesome for SEO</ListItem></Appear>
            <Appear><ListItem>You get amazing, out-of-the-box developer tools</ListItem></Appear>
            <Appear><ListItem>You can write native (OSX, Android) apps with it</ListItem></Appear>
            <Appear><ListItem>And...</ListItem></Appear>
            <Appear><ListItem>Facebook is written with it</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Deep-Dive!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Composition
          </Heading>
        </Slide>

        <Slide maxWidth="90%" notes={`<TimePicker
            hintText="12hr Format"
          />`}>
          <ComponentPlayground
            scope={{
              YouTube, DatePicker, MuiThemeProvider, TimePicker
            }}
            theme="dark"
            previewBackgroundColor=""
            code={require("raw-loader!../assets/youtube.example")}
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Unidirectional Dataflow
          </Heading>
        </Slide>

        <Slide maxWidth="90%" notes={`getDataFromBackend`} nodes={`const Application = ({ data }) => (
  <MuiThemeProvider>
    <List>
      {data.map(({ title, icon }) => (<ListItem primaryText={title} leftIcon={icon} />))}
    </List>
  </MuiThemeProvider>
)

render(
  <Application data={getDataFromBackend()} />,
  mountNode
)`}>
          <ComponentPlayground
            scope={{
              getDataFromBackend: () => ([
                { title: 'hi there!', icon: <ContentInbox /> },
                { title: 'this data could be fetched from a backend', icon: <ActionGrade /> },
                { title: 'or some other place', icon: <ContentSend /> },
              ]),
              MuiThemeProvider, List: MuiList, ListItem: MuiListItem,
            }}
            theme="dark"
            previewBackgroundColor=""
            code={require("raw-loader!../assets/dataflow.example")}
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            It's all JavaScript
          </Heading>
        </Slide>

        <Slide maxWidth="90%" notes={`getDataFromBackend`}>
          <ComponentPlayground
            scope={{
              getDataFromBackend: () => ([
                { title: 'hi there!', icon: <ContentInbox /> },
                { title: 'this data could be fetched from a backend', icon: <ActionGrade /> },
                { title: 'or some other place', icon: <ContentSend /> },
              ]),
              MuiThemeProvider, List: MuiList, ListItem: MuiListItem,
            }}
            theme="dark"
            previewBackgroundColor=""
            code={require("raw-loader!../assets/dataflow-full.example")}
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black" notes={`
<ul>
    <li>npm run dev</li>
    <li>Show react developer tools (react tab)</li>
    <li>Show redux developer tools</li>
</ul>
        `}>
          <Heading size={1} caps fit textColor="primary">
            What about electron?
          </Heading>

          <Appear><ListItem><a style={{ color: 'black' }}
            href="https://github.com/chentsulin/electron-react-boilerplate">Electron + React Boilerplate</a></ListItem></Appear>

        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Cool, so where should I start?
          </Heading>
          <List textColor="white">
            <ListItem><a style={{ color: 'white' }} href="http://bit.ly/pti-react">bit.ly/pti-react</a>: these
              slides</ListItem>
            <Appear><ListItem><a style={{ color: 'white' }} href="https://jsfiddle.net/1ktoxu7p/1/">React (JSX)
              fiddle</a>: A quick way to get started in your browser.</ListItem></Appear>
            <Appear><ListItem><a style={{ color: 'white' }} href="https://reacttraining.com/online/react-fundamentals">React
              Training</a>: Training on react fundamentals</ListItem></Appear>

            <Appear><ListItem><a style={{ color: 'white' }}
              href="https://github.com/facebookincubator/create-react-app">Create React App</a>: Create React apps with
              no build configuration.</ListItem></Appear>
          </List>
        </Slide>


        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps fit textColor="primary">
            Now it's your turn!
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
