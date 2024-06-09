# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Day 4 Summary - Web Development Bootcamp by Livewires

## Today's Focus:
- **Building the UI of the To-Do List App**
  - **Created the Authentication Page**
  - **Navigation Using react-router-dom**


### React Router DOM:
- **Installation:**
  - Installed `react-router-dom` using npm or yarn.
    ```bash
    npm install react-router-dom
    # or
    yarn add react-router-dom
    ```
- **Setting Up Routes:**
  - Configured the router in your main App component.
    ```jsx
    import './App.css'
    import Content from './components/Content'
    import Signin from './components/Signin'
    import { BrowserRouter,Routes,Route } from 'react-router-dom'



    function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Signin}> </Route>
            <Route path='/home' Component={Content}></Route>
            </Routes>
        </BrowserRouter>
    )
    }

    export default App
    ```
- **Navigation Between Pages:**
  - Used `<Link>` and `<NavLink>` components to navigate between different routes.
    ```jsx
      <Link to="/home">
        <button>
            <img src= {google} alt="" className='google' />
            Continue with Google
        </button>
      </Link>
    ```

