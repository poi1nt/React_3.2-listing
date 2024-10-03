import { IItem } from '../models';

export interface ListingProps {
  items: IItem[],
}

export const Listing = ({ items }: ListingProps) => {

  const formatTitle = (title: string): string => {
    if (title) {
      return title.length > 50 ? `${title.substring(0, 50)}...` : title;
    } else {
      return '';
    }
  };

  const formatPrice = (currency_code: string, price: string): string => {
    switch (currency_code) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const formatQuantityClass = (quantity: number): string => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
            <img src={item.MainImage?.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{formatTitle(item.title)}</p>
            <p className="item-price">{formatPrice(item.currency_code, item.price)}</p>
            <p className={`item-quantity ${formatQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
