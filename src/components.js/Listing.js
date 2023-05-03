import React from "react";
import '../css/main.css'

function Listing({ items = [] }) {
    return (
      <div className="item-list">
        {items.map((item) => (
          <div key={item.listing_id} className="item">
            <div className="item-image">
              <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">
                {item.title.length > 50
                  ? item.title.substr(0, 50) + "..."
                  : item.title}
              </p>
              <p className="item-price">
                {item.currency_code === "USD" ? "$" : null}
                {item.currency_code === "EUR" ? "€" : null}
                {item.currency_code !== "USD" && item.currency_code !== "EUR"
                  ? item.currency_code + " "
                  : null}
                {item.price}
              </p>
              <p
                className={
                  item.quantity <= 10
                    ? "item-quantity level-low"
                    : item.quantity <= 20
                    ? "item-quantity level-medium"
                    : "item-quantity level-high"
                }
              >
                {item.quantity} left
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }


  export default Listing;