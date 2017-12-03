import Link from "next/link";
import Head from "../components/head";
import { Provider } from "react-redux";
import { initStore } from "../redux/store";

const store = initStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Head title="Home" />
      </Provider>
    );
  }
}
