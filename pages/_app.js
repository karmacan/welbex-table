import '@public/css/globals.css';
import '@public/css/scrollbar.css';
import {AppProvider} from '@src/stores/App/AppProvider';

export default function MyApp({Component: Page, pageProps}) {
  return (
    <AppProvider>
      <Page {...pageProps} />
    </AppProvider>
  );
}
