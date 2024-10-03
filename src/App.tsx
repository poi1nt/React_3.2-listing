import './App.css';
import { Listing } from './components/Listing';
import json from '../public/data/etsy.json';
import { IItem } from './models';

const items: IItem[] = json as IItem[];

function App() {
  const filteredItems = items.filter(item =>
    item.listing_id &&
    item.title &&
    item.currency_code &&
    item.price &&
    item.quantity &&
    item.MainImage?.url_570xN
  );

  return (
    <Listing items={filteredItems} />
  );
}

export default App;
