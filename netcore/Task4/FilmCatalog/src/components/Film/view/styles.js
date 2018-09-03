const styles = () => ({
  cardContainer: {
    margin: 8,
  },
  media: {
    height: 300,
    width: 240,
    flexGrow: 1
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 240
  },
  headline: {
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
  },
  linkArea: {
    color: "black"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    color: "red",
    fontSize: 16
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

export default styles;