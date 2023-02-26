import React, { Fragment } from "react";

import {InputTodo} from "./components/InputTodo";
import {ListTodo} from "./components/ListTodo"

export function App() {
  return<Fragment>
    <div className="container">
       <InputTodo/>
       <ListTodo/>
  </div>
 </Fragment>
}


