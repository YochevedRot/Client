const ButtonSearchMeeting = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
      setIsClicked(true)
    }
  
    return (<>
      <Fab color="warning" aria-label="edit" sx={{ position: 'fixed', left: '25px', bottom: '25px' }} onClick={handleClick}>
      <SearchIcon/>
      </Fab>
      {isClicked && <NewForm setIsClicked={setIsClicked} />}
    </>)
  
  };