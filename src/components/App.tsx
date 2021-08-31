
interface AppProps {
  title: string;
}

export default function App({title}:AppProps): JSX.Element {
	return <div>Henry Workshop - {title}</div>;
}

