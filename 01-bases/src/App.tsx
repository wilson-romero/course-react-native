// import BasicFunctions from './typescript/BasicFunctions'
//import { BasicTypes } from './typescript/BasicTypes'
//import ObjectLiteral from './typescript/ObjectLiteral'
//import Counter from "./components/Counter"

// import Login from "./components/Login"
import { AuthProvider } from "./context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <div className="my-4 flex flex-col justify-start items-center h-svh">
        <h1 className="text-3xl mb-5" >React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiteral /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <Login /> */}
      </div>
    </AuthProvider>
  )
}

export default App
