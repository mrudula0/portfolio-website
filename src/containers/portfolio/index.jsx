import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
    link: "#",
  },
  {
    id: 3,
    name: "Notes App",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600",
    link: "#",
  },
  {
    id: 2,
    name: "Supplier Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
    link: "#",
  },
  {
    id: 2,
    name: "Todo App",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600",
    link: "#",
  },
  {
    id: 3,
    name: "Shopping Cart Design",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600",
    link: "#",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Design" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  />
                </a>
              </div>

              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;