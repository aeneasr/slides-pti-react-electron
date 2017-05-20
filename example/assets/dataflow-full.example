const Application = ({ data }) => (
  <MuiThemeProvider>
    <List>
      {data.map(({ title, icon }) => (<ListItem primaryText={title} leftIcon={icon} />))}
    </List>
  </MuiThemeProvider>
)

render(
  <Application data={getDataFromBackend()} />,
  mountNode
)