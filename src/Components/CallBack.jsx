const CallBack = ({ handleConsole }) => {
  const buttonClick = () => {
    handleConsole();
  };
  return (
    <div>
      <button onClick={buttonClick}>Click ME</button>
    </div>
  );
};

export default CallBack;
