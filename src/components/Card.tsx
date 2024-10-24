const Card = ({ item }) => {
  const [activeLanguage, setActiveLanguage] = useState({
    language: Math.round(Math.random()),
    colored: true,
  });

  function handleClick() {
    setActiveLanguage((prevLanguage) => ({
      language: prevLanguage.language === 1 ? 0 : 1,
      colored: !prevLanguage.colored,
    }));
  }

  return (
    <div
      onClick={() => handleClick()}
      className={"card " + (activeLanguage.colored ? "bright" : "dark")}
    >
      {item.values[activeLanguage.language]}
      {/* <button
          onClick={(e) => {
            e.stopPropagation();
            handleChange(item.values[activeLanguage]);
          }}
        >
          change
        </button> */}
    </div>
  );
};

export default Card;