const cookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const consentGive = localStorage.getItem("cookieConsent");
    if (!consentGive) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = async () => {
    localStorage.setItem("cookieConsent", true);
    await fetch("http://localhost:5000/api/track-consent"),
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ consent: true }),
      };
    setShowPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", false);
    alert("you rejected the cookies");
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div>
        <p>this website used cookies for develop your experience .</p>
        <button onClick={handleAccept}>accept</button>
        <button onClick={handleReject}>reject</button>
      </div>
    )
  );
};

// css
/*



*/
