import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ReuseElement} from "./components/ex1-reuse-element";
import {App as ElementProps} from "./components/ex1.1-element-props";
import {App as ElementContext} from "./components/ex1.2-element-context";
import {App as ElementUseMemo} from "./components/ex1.3-element-use-memo";
import {App as ElementMemo} from "./components/ex1.4-element-memo";
import {App as MemorizeContext} from "./components/ex2-memorize-context";
import {App as ContextProvider} from "./components/ex2.1-context-provider";

function Menu() {
  return (
    <>
    <h1 className="text-3xl mb-6">React Advanced Patterns</h1>
    <ul>
      <li><a href="/reuse-elements">Element Optimization: Reusing Elements</a></li>
      <li><a href="/element-props">Element Optimization: Element Props</a></li>
      <li><a href="/element-context">Element Optimization: Context</a></li>
      <li><a href="/element-use-memo">Element Optimization: useMemo</a></li>
      <li><a href="/element-memo">Element Optimization: React memo</a></li>
      <li><a href="/memorize-context">Context: Memorize Context</a></li>
      <li><a href="/context-provider">Context Provider</a></li>
    </ul>
    </>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu/>,
    },
    {
      path: "/reuse-elements",
      element: <ReuseElement/>,
    },
    {
      path: "/element-props",
      element: <ElementProps/>,
    },
    {
      path: "/element-context",
      element: <ElementContext/>,
    },
    {
      path: "/element-use-memo",
      element: <ElementUseMemo/>,
    },
    {
      path: "/element-memo",
      element: <ElementMemo/>,
    },
    {
      path: "/memorize-context",
      element: <MemorizeContext/>,
    },
    {
      path: "/context-provider",
      element: <ContextProvider/>,
    }
  ]);

  return  <div className="p-12">
      <a className="mb-8 inline-block" href="/">Home</a>
      <RouterProvider router={router} />
  </div>
}

export default App
