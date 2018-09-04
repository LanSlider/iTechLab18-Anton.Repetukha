const styles = theme => ({
  middleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    paddingTop: 0,
  },
  componentContainer: {
    padding: 10,
    maxWidth: 1000,
    background: "#37383b"
  },
  coverImage: {
    minWidth: 200,
    height: 290,
    alignSelf: "flex-start",
    border: "4px solid #EB1D24",
  },
  description: {
    marginBottom: 10,
  },
  trailerVideo: {
		padding: 2,
		display: 'flex',
		justifyContent: 'center',
	},
  titleLine: {
    display: "block",
    width: "150px",
    height: "4px",
    background: "#EB1D24",
    marginTop: "15px",
    marginBottom: "20px",
  },
  detailsTitle: {
    color: "#666666",
    fontSize: 15,
    marginTop: 30 
  },
  card: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    flex: "0 1 auto",
    width: "100%",
  },
});

export default styles;
