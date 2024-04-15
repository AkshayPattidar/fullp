let initials = {
  tat: 0,
  data: [],
};
function Reduc(tats = initials, action) {
  switch (action.type) {
    case "cart":
      return {
        ...tats,
        tat: tats.tat + 1,
        data:[...tats.data ,action.data]
      };
      break;
    default:
      return tats;
  }
}
export default Reduc;
