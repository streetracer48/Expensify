import React, { Component } from 'react'
import {Route, Switch ,Link} from 'react-router-dom'
import {Container} from 'semantic-ui-react'


const Home = () => (
    <div>
    <h1>This is Home</h1>
</div>
)

const About = () => (
    <div>
    <h1>This is About</h1>
</div>
)

const Admin = () => (
    <div>
    <h1>This is Admin</h1>
</div>
)

const NotFound = () => (
    <div>
    <h1>This is 404! </h1><Link to="/">Go Back Home</Link>
</div>
)
    


 class App extends Component {
    render() {
        return (
            <div>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link>
              {/* <ModalManager/> */}
            <Switch>
            <Route exact path='/' component={Home} />
            
            </Switch>
            <Route path="/(.+)"
            render={() => (
              <div>
                {/* <NavBar/> */}

                <Container className="main">
                <Switch>
                <Route path='/about' component={About} />
                  <Route path='/admin' component={Admin} />
                  <Route  component={NotFound} />
                </Switch>
                  
                  
                  
                </Container>
            </div>
            )}
      />
            </div>
      
          );
    }
}

export default App
