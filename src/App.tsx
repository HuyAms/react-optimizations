import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ReuseElement} from "./components/ex1-reuse-element";
import {App as ElementProps} from "./components/ex1.1-element-props";
import {App as ElementContext} from "./components/ex1.2-element-context";
import {App as ElementUseMemo} from "./components/ex1.3-element-use-memo";
import {App as ElementMemo} from "./components/ex1.4-element-memo";

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
    }
  ]);

  return  <div className="p-12">
      <a className="mb-8 inline-block" href="/">Home</a>
      <RouterProvider router={router} />
  </div>
}

export default App
