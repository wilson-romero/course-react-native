// import BasicFunctions from './typescript/BasicFunctions'
//import { BasicTypes } from './typescript/BasicTypes'
//import ObjectLiteral from './typescript/ObjectLiteral'
//import Counter from "./components/Counter"

// import Login from "./components/Login"
// import Users from './components/Users'
import Forms from './components/Forms'
import { AuthProvider } from "./context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <div className="flex flex-col justify-start items-center h-svh bg-neutral-700 text-zinc-100 p-4">
        <h1 className="text-3xl mb-5" >React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiteral /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <Login /> */}
        {/* <Users /> */}
        <Forms />
      </div>
    </AuthProvider>
  )
}

export default App
