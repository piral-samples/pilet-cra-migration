import "./index.css";
import * as React from "react";
import { PiletApi } from "sample-piral";
import { Link } from "react-router-dom";

const App = React.lazy(() => import("./App"));

export function setup(app: PiletApi) {
  app.registerMenu(() => <Link to="/sample">Sample</Link>);
  app.registerPage("/sample", App);
}
