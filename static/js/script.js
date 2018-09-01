var Router = ReactRouterDOM.BrowserRouter;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouterDOM.Link;
var browserHistory = ReactRouter.browserHistory;
var Switch = ReactRouterDOM.Switch

class Contact extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        Find us here on: hfjkasdhflasf.
      </div>
    )
  }

}

class PuppyList extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="puppylist">
        Here's a list of Puppies
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="home">
        Welcome Home    
      </div>
    )
  }
}

class PuppyProfile extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        Display of puppy selected
      </div>
    )
  }

}

class TopLevel extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/puppies">Puppies</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/puppies" component={PuppyList}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route path="/puppy/:slug" component={PuppyProfile}></Route>
        </Switch> 
      </div>
    )
  }

}

ReactDOM.render(
  <Router history={browserHistory}>
    <TopLevel />  
  </Router>,
  document.getElementById('component')
)