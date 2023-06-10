import Card from "react-bootstrap/Card";
import { React, useState, useEffect } from "react";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CardGroup from "react-bootstrap/CardGroup";

function Cards() {
  const getstoredCards = () => {
    const storedCards = localStorage.getItem("cards");
    return storedCards
      ? JSON.parse(storedCards)
      : [
          {
            img: "https://themewagon.github.io/alazea/img/bg-img/6.jpg",
            title:
              "Garden designers across the country forecast ideas shaping the gardening world in 2018",
            date: "20 Jun 2018",
            author: "Alan Jackson",
            content:
              "Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.",
          },
          {
            img: "https://themewagon.github.io/alazea/img/bg-img/7.jpg",
            title:
              "Garden designers across the country forecast ideas shaping the gardening world in 2018",
            date: "20 Jun 2018",
            author: "Alan Jackson",
            content:
              "Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.",
          },
          {
            img: "https://themewagon.github.io/alazea/img/bg-img/8.jpg",
            title:
              "Garden designers across the country forecast ideas shaping the gardening world in 2018",
            date: "20 Jun 2018",
            author: "Alan Jackson",
            content:
              "Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.",
          },
        ];
  };
  const user = useSelector(selectUser);
  const [cards, setCards] = useState(getstoredCards());
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(true);
  const [newCard, setNewCard] = useState({
    img: "",
    title: "",
    date: "",
    author: "",
    content: "",
  });
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);
  const handleToggle = () => {
    setIsFormVisible((prevValues) => !prevValues);
    setButtonClicked((prevValues) => !prevValues);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddCard = () => {
    setCards((prevCards) => [...prevCards, newCard]);
    setNewCard({
      img: "",
      title: "",
      date: "",
      author: "",
      content: "",
    });
  };
  
  const handleDeleteCard = (index) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards.splice(index, 1);
      return updatedCards;
    });
  };
  return (
    <div className="Container">
      <div class="section-heading Cards text-center">
        <h2>LATEST NEWS</h2>
        <p>The breaking news about Gardening &amp; House plants</p>
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>
                <h5>{card.title}</h5>
              </Card.Title>
              <Card.Text>
                <small className="post-meta">
                  <a href="#">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                    {card.date}
                  </a>
                  <a href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>{" "}
                    {card.author}
                  </a>
                </small>
                <p>{card.content}</p>
              </Card.Text>
            </Card.Body>
            {user && (
              <div
                className="delete-icon"
                onClick={() => handleDeleteCard(index)}
              >
                <i class="fa-solid fa-trash"></i>
              </div>
            )}
          </Card>
        ))}

        {user && (
          <>
            <button className="alazea-btn-card" onClick={handleToggle}>
              {buttonClicked ? (
                <i class="fa-solid fa-plus"></i>
              ) : (
                <i class="fa-solid fa-minus"></i>
              )}{" "}
            </button>{" "}
            <div>
              {isFormVisible && (
                <div className="input-form-card">
                  {" "}
                  <input
                    type="url"
                    className="img-url"
                    name="img"
                    placeholder="Enter URL"
                    value={newCard.img}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newCard.title}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={newCard.date}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newCard.author}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="content"
                    placeholder="Content"
                    value={newCard.content}
                    onChange={handleInputChange}
                  />
                  <button className="alazea-btn" onClick={handleAddCard}>
                    Add Card
                  </button>{" "}
                </div>
              )}
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Cards;
