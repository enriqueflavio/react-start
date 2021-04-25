import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Index from './pages/Index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default Routes
