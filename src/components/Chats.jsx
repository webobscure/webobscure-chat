import react from '../assets/react.svg';

const Chats = () => {
  return (
    <>
      <div className="chats">
        <div className="chat-search">
          <input type="text" placeholder="Search the chat" className="chat-search__input" />
          <button className="chat-search__sort">
            <svg
              viewBox="0 0 24 24"
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px">
              <path
                fill="currentColor"
                d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
            </svg>
          </button>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
        <div className="chat-item">
          <img src={react} alt="" />
          <p>John Malkovich</p>
          <p> Choosing a sticker </p>
        </div>
      </div>
    </>
  );
};

export default Chats;
