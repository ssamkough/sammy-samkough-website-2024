export const formattedNoteDate = (date: Date) => {
  return `${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date)} @ 
  ${new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(date)}`;
};
